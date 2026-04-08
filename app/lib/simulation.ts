// Pure math — no React, no Next.js imports. Shared between main thread and worker.

import type { Assumptions, SectorToggles, Year } from "./data";

// --- Types ---

export interface AdvancedParams {
  bgAgentsNational: number; // 500–10,000, default 3000
  modelAmbition: "none" | "70b" | "200b" | "400b"; // default "200b"
  rlBudget: number; // 0–2.0, default 1.0 (fraction of base RL)
  overheadMultiplier: number; // 2.0–8.0, default 4.9
  demandGrowth: number; // 0–0.5, default 0.2
  uncertaintyScale: number; // 0.2–2.0, default 1.0
  iterations: number; // 200–5000, default 500
  budgetThreshold: number; // H100-eq threshold for exceedance, default 7000
}

export const defaultAdvanced: AdvancedParams = {
  bgAgentsNational: 3000,
  modelAmbition: "200b",
  rlBudget: 1.0,
  overheadMultiplier: 4.9,
  demandGrowth: 0.2,
  uncertaintyScale: 1.0,
  iterations: 500,
  budgetThreshold: 7000,
};

export interface PercentilePoint {
  year: Year;
  p10: number;
  p25: number;
  p50: number;
  p75: number;
  p90: number;
  // Sector medians for stacked view
  publicCore_p50: number;
  healthcare_p50: number;
  defense_p50: number;
  privateSector_p50: number;
  energyMW_p50: number;
}

export type PercentileTimeline = PercentilePoint[];

export interface ExceedanceResult {
  threshold: number;
  year2029Probability: number; // 0–1
}

export interface SimWorkerInput {
  assumptions: Assumptions;
  advanced: AdvancedParams;
  sectors: SectorToggles;
}

export interface SimWorkerOutput {
  type: "result";
  percentiles: PercentileTimeline;
  exceedance: ExceedanceResult;
}

// --- Sampling ---

// Box-Muller transform
let _spare: number | null = null;
export function randn(): number {
  if (_spare !== null) {
    const val = _spare;
    _spare = null;
    return val;
  }
  let u: number, v: number, s: number;
  do {
    u = Math.random() * 2 - 1;
    v = Math.random() * 2 - 1;
    s = u * u + v * v;
  } while (s >= 1 || s === 0);
  const mul = Math.sqrt((-2 * Math.log(s)) / s);
  _spare = v * mul;
  return u * mul;
}

export function sampleNormal(mean: number, sd: number): number {
  return mean + randn() * sd;
}

export function sampleLogNormal(median: number, spread: number): number {
  return median * Math.exp(randn() * Math.log(1 + spread));
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

// --- Logistic S-curve for adoption ramp ---

function adoptionAtYear(
  target: number,
  year: Year
): number {
  // S-curve: inflection ~mid-2028, steepness 1.5
  const t = year - 2026; // 0..5
  const midpoint = 2.5; // mid-2028
  const k = 1.5;
  const curve = 1 / (1 + Math.exp(-k * (t - midpoint)));
  // Scale: at year 2026 ≈ 5%, ramping to target by 2029, cap at target*1.15
  const val = target * curve / (1 / (1 + Math.exp(-k * (3 - midpoint)))); // normalize so year=2029 ≈ target
  return Math.min(val, Math.min(target * 1.15, 0.95));
}

// --- Training H100-hours by model ambition ---

const trainingHours: Record<string, { base: number; rl: number; domain: number }> = {
  none: { base: 0, rl: 0, domain: 0 },
  "70b": { base: 1_000_000, rl: 200_000, domain: 400_000 },
  "200b": { base: 5_000_000, rl: 500_000, domain: 1_200_000 },
  "400b": { base: 12_000_000, rl: 1_500_000, domain: 2_000_000 },
};

// Energy: kW per H100-eq by year (with PUE 1.25)
const kwPerH100: Record<Year, number> = {
  2026: 1.0, 2027: 0.9, 2028: 0.8, 2029: 0.7, 2030: 0.6, 2031: 0.5,
};

// --- Single MC iteration ---

export interface SingleResult {
  total: number;
  publicCore: number;
  healthcare: number;
  defense: number;
  privateSector: number;
  energyMW: number;
}

export function sampleOnce(
  a: Assumptions,
  adv: AdvancedParams,
  sectors: SectorToggles,
  year: Year
): SingleResult {
  const unc = adv.uncertaintyScale;
  const growthFactor = Math.pow(1 + clamp(sampleNormal(adv.demandGrowth, 0.06 * unc), 0, 0.6), year - 2026);

  // --- Tier 1: Inference ---
  const adoptionTarget = clamp(sampleNormal(a.adoptionRate, 0.08 * unc), 0.05, 0.95);
  const adoptionNow = adoptionAtYear(adoptionTarget, year);
  const addressable = clamp(sampleNormal(500_000, 30_000 * unc), 300_000, 700_000);
  const agentShare = clamp(sampleNormal(a.agentShare, 0.06 * unc), 0.02, 0.7);

  const activeUsers = addressable * adoptionNow;
  const copilotUsers = activeUsers * (1 - agentShare);
  const agentUsers = activeUsers * agentShare;

  const copilotTokensDay = copilotUsers * 30_000;
  const agentTokensDay = agentUsers * sampleLogNormal(400_000, 0.3 * unc);

  // Background agents ramp: 0 in 2026, full by 2029
  const bgRamp = clamp((year - 2026) / 3, 0, 1);
  const bgAgents = clamp(sampleNormal(adv.bgAgentsNational, 800 * unc), 0, 20_000) * bgRamp;
  const bgTokensDay = bgAgents * 1_000_000;

  const totalTokensDay = copilotTokensDay + agentTokensDay + bgTokensDay;
  const sustainedH100 = totalTokensDay / 3000 / 28800; // tokens/s / seconds in 8h day
  const overhead = sampleLogNormal(adv.overheadMultiplier, 0.2 * unc);
  const tier1 = Math.max(0, sustainedH100 * overhead * growthFactor);

  // --- Tier 2: Healthcare ---
  const healthAdoption = clamp(sampleNormal(a.healthcareAdoption, 0.12 * unc), 0.05, 0.95);
  const healthBase = 44 * (1 / 0.6) * adoptionAtYear(healthAdoption, year);
  const a90Correction = clamp(sampleNormal(0.5, 0.12 * unc), 0.1, 1.0);
  const reasoningOverhead = sampleLogNormal(2.5, 0.25 * unc);
  const tier2Health = healthBase * a90Correction * reasoningOverhead * 1.3 * growthFactor;

  // --- Tier 2: Domain (non-healthcare) ---
  const domainAI = sampleLogNormal(280, 0.4 * unc);
  const domainScale = adoptionAtYear(1.0, year);
  const tier2Domain = domainAI * domainScale * growthFactor;

  // --- Tier 3: Fine-tuning ---
  const ftOrgs = clamp(sampleNormal(a.fineTuningOrgs, 20 * unc), 5, 500);
  const ftGpuH = sampleLogNormal(200, 0.35 * unc);
  const tier3 = Math.max(0, (ftOrgs * (6 * ftGpuH + 30) / 8760) * 15 * growthFactor);

  // --- Tier 4: Sovereign training ---
  const ambition = a.sovereignty ? adv.modelAmbition : "none";
  const th = trainingHours[ambition];
  const trainBase = th.base > 0 ? sampleLogNormal(th.base, 0.25 * unc) : 0;
  const rl = th.rl > 0 ? sampleNormal(th.rl * adv.rlBudget, th.rl * 0.2 * unc) : 0;
  const domain = th.domain > 0 ? sampleLogNormal(th.domain, 0.3 * unc) : 0;
  const totalTrainH = Math.max(0, trainBase + rl + domain);
  const trainRamp = clamp((year - 2025) / 4, 0.1, 1.0);
  const tier4 = (totalTrainH / (0.5 * 8760)) * trainRamp;

  // --- Sector assembly ---
  const publicCoreRaw = tier1 * (320_000 / 500_000) + tier2Domain + tier3 + tier4;
  const healthcareRaw = tier1 * (180_000 / 500_000) + tier2Health;
  const defenseRaw = (publicCoreRaw + healthcareRaw) * 0.12;
  const privateSectorRaw = (publicCoreRaw + healthcareRaw) * 3.5;

  const publicCore = sectors.publicCore ? Math.round(publicCoreRaw) : 0;
  const healthcare = sectors.healthcare ? Math.round(healthcareRaw) : 0;
  const defense = sectors.defense ? Math.round(defenseRaw) : 0;
  const privateSector = sectors.privateSector ? Math.round(privateSectorRaw) : 0;
  const total = publicCore + healthcare + defense + privateSector;

  const energyMW = (total * kwPerH100[year] * 1.25) / 1000;

  return { total, publicCore, healthcare, defense, privateSector, energyMW };
}

// --- Percentile extraction ---

export function percentile(sorted: number[], p: number): number {
  const idx = (p / 100) * (sorted.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (idx - lo);
}
