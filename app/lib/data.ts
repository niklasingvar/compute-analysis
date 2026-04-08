export type Year = 2026 | 2027 | 2028 | 2029 | 2030 | 2031;
export const years: Year[] = [2026, 2027, 2028, 2029, 2030, 2031];

// --- Sector toggles ---

export interface SectorToggles {
  publicCore: boolean; // Public sector excl healthcare & defense
  healthcare: boolean; // Healthcare (sjukvård)
  defense: boolean; // Defense/military (försvar) — rough estimate
  privateSector: boolean; // Private sector — rough estimate
}

export const defaultSectors: SectorToggles = {
  publicCore: true,
  healthcare: true,
  defense: false,
  privateSector: false,
};

export type SectorKey = keyof SectorToggles;

// Data quality per sector
export const sectorDataQuality: Record<
  SectorKey,
  "strong" | "good" | "rough" | "none"
> = {
  publicCore: "strong",
  healthcare: "good",
  defense: "none",
  privateSector: "rough",
};

// --- Assumption sliders ---

export interface Assumptions {
  adoptionRate: number; // 0.30–0.85, default 0.62
  agentShare: number; // 0.05–0.50, default 0.25
  healthcareAdoption: number; // 0.20–0.90, default 0.55
  fineTuningOrgs: number; // 10–300, default 80
  sovereignty: boolean; // default true
}

export const defaultAssumptions: Assumptions = {
  adoptionRate: 0.62,
  agentShare: 0.25,
  healthcareAdoption: 0.55,
  fineTuningOrgs: 80,
  sovereignty: true,
};

export const presets = {
  low: {
    adoptionRate: 0.4,
    agentShare: 0.12,
    healthcareAdoption: 0.3,
    fineTuningOrgs: 30,
    sovereignty: false,
  } as Assumptions,
  base: { ...defaultAssumptions } as Assumptions,
  high: {
    adoptionRate: 0.8,
    agentShare: 0.4,
    healthcareAdoption: 0.8,
    fineTuningOrgs: 200,
    sovereignty: true,
  } as Assumptions,
};

export type Preset = keyof typeof presets;

export const leverRanges = {
  adoptionRate: { min: 0.3, max: 0.85, step: 0.01 },
  agentShare: { min: 0.05, max: 0.5, step: 0.01 },
  healthcareAdoption: { min: 0.2, max: 0.9, step: 0.01 },
  fineTuningOrgs: { min: 10, max: 300, step: 10 },
} as const;

// --- Sector computation (delegates to shared kernel in simulation.ts) ---

import { computeDeterministic, defaultAdvanced, type AdvancedParams } from "./simulation";
export type { AdvancedParams };

export interface SectorResult {
  publicCore: number;
  healthcare: number;
  defense: number;
  privateSector: number;
  total: number;
}

export interface JobsResult {
  direct: number;
  indirect: number;
  total: number;
  aiSolutions: number;
  staffingPerSolution: number;
  indirectMultiplier: number;
}

export function computeAll(
  a: Assumptions,
  sectors: SectorToggles,
  year: Year,
  adv: AdvancedParams = defaultAdvanced
): SectorResult {
  const r = computeDeterministic(a, adv, sectors, year);
  return {
    publicCore: r.publicCore,
    healthcare: r.healthcare,
    defense: r.defense,
    privateSector: r.privateSector,
    total: r.total,
  };
}

export function computeTimeline(
  a: Assumptions,
  sectors: SectorToggles,
  adv: AdvancedParams = defaultAdvanced
): { year: Year; publicCore: number; healthcare: number; defense: number; privateSector: number; total: number; energyMW: number }[] {
  return years.map((year) => {
    const r = computeDeterministic(a, adv, sectors, year);
    return {
      year,
      publicCore: r.publicCore,
      healthcare: r.healthcare,
      defense: r.defense,
      privateSector: r.privateSector,
      total: r.total,
      energyMW: getEnergyMW(r.total, year),
    };
  });
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

function normalize(v: number, lo: number, hi: number): number {
  return clamp((v - lo) / (hi - lo), 0, 1);
}

function adoptionRamp(target: number, year: Year): number {
  const t = year - 2026;
  const midpoint = 2.5;
  const k = 1.5;
  const curve = 1 / (1 + Math.exp(-k * (t - midpoint)));
  const val = target * curve / (1 / (1 + Math.exp(-k * (3 - midpoint))));
  return Math.min(val, Math.min(target * 1.15, 0.95));
}

function scenarioInterp(low: number, base: number, high: number, n: number): number {
  if (n <= 0.5) return lerp(low, base, n / 0.5);
  return lerp(base, high, (n - 0.5) / 0.5);
}

export function computeHealthcareJobs(a: Assumptions, year: Year): JobsResult {
  // A91-A93 from 14-jobb.md, tied to healthcare adoption over time.
  const volumeN = normalize(
    a.healthcareAdoption,
    presets.low.healthcareAdoption,
    presets.high.healthcareAdoption
  );
  const complexityN = normalize(
    a.fineTuningOrgs,
    presets.low.fineTuningOrgs,
    presets.high.fineTuningOrgs
  );
  const ecosystemN = (volumeN + complexityN) / 2;

  const aiSolutions2029 = scenarioInterp(80, 120, 160, volumeN); // A91
  const staffingPerSolution = scenarioInterp(3, 5, 8, complexityN); // A92
  const indirectMultiplier = scenarioInterp(0.5, 0.7, 1.0, ecosystemN); // A93

  const displayYear = year > 2029 ? 2029 : year;
  const adoptionShare =
    adoptionRamp(a.healthcareAdoption, displayYear) /
    adoptionRamp(a.healthcareAdoption, 2029);
  const aiSolutions = aiSolutions2029 * adoptionShare;

  const direct = Math.round(aiSolutions * staffingPerSolution);
  const indirect = Math.round(direct * indirectMultiplier);
  const total = direct + indirect;

  return { direct, indirect, total, aiSolutions, staffingPerSolution, indirectMultiplier };
}

export function computeHealthcareJobs2029(a: Assumptions): JobsResult {
  return computeHealthcareJobs(a, 2029);
}

// --- Energy model ---
// Per-year kW per H100-eq (facility power at PUE 1.25)
// Source: 03-berakningsmodell.md efficiency curve
const kwPerH100: Record<Year, number> = {
  2026: 1.0,
  2027: 0.9,
  2028: 0.8,
  2029: 0.7,
  2030: 0.6,
  2031: 0.5,
};

const PUE = 1.25;

export function getEnergyMW(gpus: number, year: Year): number {
  const kw = kwPerH100[year];
  return parseFloat(((gpus * kw * PUE) / 1000).toFixed(1));
}

// --- Cost ---
const COST_PER_H100_YEAR = 0.222; // MSEK

export function getAnnualCost(gpus: number): number {
  return Math.round(gpus * COST_PER_H100_YEAR);
}

// --- EU comparison data ---
export const euComparisons = [
  { key: "lumi" as const, country: "Finland", h100eq: 5000, label: "LUMI (EuroHPC)" },
  { key: "gefion" as const, country: "Danmark", h100eq: 1528, label: "Gefion (NVIDIA)" },
  { key: "leonardo" as const, country: "Italien", h100eq: 3500, label: "Leonardo (EuroHPC)" },
  { key: "euFactories" as const, country: "EU", h100eq: 50000, label: "EU AI Factories (plan)" },
];

// --- Formatting ---

export function formatNumber(n: number): string {
  const safe = Number.isFinite(n) ? Math.round(n) : 0;
  return String(safe).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const REPO_URL = "https://github.com/niklasingvar/compute-analysis";

// --- Footnote references ---
// Links from UI elements to their source markdown files

export const footnotes = {
  // Assumptions → individual files
  adoptionRate: "assumptions/adoption-rate.md",
  agentShare: "assumptions/agent-share.md",
  healthcareAdoption: "assumptions/healthcare-ai.md",
  fineTuningOrgs: "assumptions/fine-tuning.md",
  sovereignty: "assumptions/sovereign-training.md",

  // Sectors → source docs
  publicCore: "03-berakningsmodell.md",
  healthcare: "13-sjukvard-compute-per-vardkedja.md",
  defense: "04-internationella-jamforelser.md",
  privateSector: "11-kompletterande-perspektiv.md",

  // Narrative claims
  tier1Calc: "03-berakningsmodell.md",
  tier4Policy: "08-suveranitet.md",
  budgetGap: "03-berakningsmodell.md",
  whyNow: "10-kan-vi-vanta.md",
  euContext: "04-internationella-jamforelser.md",
  triangulation: "01-ramverk.md",
  assumptions: "02-antaganden-och-data.md",
  sources: "05-kallor-och-resurser.md",
  tokensPerCapita: "11-kompletterande-perspektiv.md",
} as const;

export type FootnoteKey = keyof typeof footnotes;

export function footnoteUrl(key: FootnoteKey): string {
  return `${REPO_URL}/blob/main/${footnotes[key]}`;
}
