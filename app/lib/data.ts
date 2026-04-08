export type Year = 2026 | 2027 | 2028 | 2029 | 2030 | 2031;
export const years: Year[] = [2026, 2027, 2028, 2029, 2030, 2031];

// --- Assumption model ---

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

// Presets: low, base, high
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

// --- Lever ranges ---

export const leverRanges = {
  adoptionRate: { min: 0.3, max: 0.85, step: 0.01 },
  agentShare: { min: 0.05, max: 0.5, step: 0.01 },
  healthcareAdoption: { min: 0.2, max: 0.9, step: 0.01 },
  fineTuningOrgs: { min: 10, max: 300, step: 10 },
} as const;

// --- Year scaling ---
// Index 0 = 2026, index 3 = 2029 (anchor = 1.0)
const yearScaleFactors: Record<Year, number> = {
  2026: 0.1,
  2027: 0.25,
  2028: 0.5,
  2029: 1.0,
  2030: 1.45,
  2031: 2.0,
};

// --- Formula constants ---
// Calibrated so defaults at 2029 reproduce known base scenario

// Tier 1: Copilots & agents
// 500K addressable × adoption × weighted compute per user
// Agents use ~10× more compute than copilots
const ADDRESSABLE_USERS = 500_000;
// copilot=0.0022, agent=0.022 → 310K × (0.25×0.022 + 0.75×0.0022) = 310K × 0.00715 = 2,217 ✓
const COPILOT_COMPUTE = 0.0022;
const AGENT_COMPUTE = 0.022;

// Tier 2: Specialized inference (healthcare-dominated)
// Base: ~1,500 H100-eq at 55% healthcare adoption
const TIER2_BASE = 1500;
const TIER2_HEALTHCARE_SHARE = 0.6; // 60% of Tier 2 is healthcare-driven
const TIER2_FIXED = TIER2_BASE * (1 - TIER2_HEALTHCARE_SHARE); // 600 non-healthcare
const TIER2_HEALTHCARE_ANCHOR = 0.55; // default healthcare adoption

// Tier 3: Fine-tuning
// Base: ~600 H100-eq with 80 orgs fine-tuning
const TIER3_PER_ORG = 7.5; // H100-eq per fine-tuning org

// Tier 4: Sovereign training
const TIER4_SOVEREIGN = 4500;

// --- Compute function ---

export interface TierResult {
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  total: number;
}

export function computeFromAssumptions(
  a: Assumptions,
  year: Year
): TierResult {
  const scale = yearScaleFactors[year];

  // Tier 1: Copilots & agents
  const activeUsers = ADDRESSABLE_USERS * a.adoptionRate;
  const agents = activeUsers * a.agentShare;
  const copilots = activeUsers * (1 - a.agentShare);
  const tier1 = Math.round(
    (copilots * COPILOT_COMPUTE + agents * AGENT_COMPUTE) * scale
  );

  // Tier 2: Specialized inference
  const healthcareCompute =
    TIER2_BASE * TIER2_HEALTHCARE_SHARE * (a.healthcareAdoption / TIER2_HEALTHCARE_ANCHOR);
  const tier2 = Math.round((TIER2_FIXED + healthcareCompute) * scale);

  // Tier 3: Fine-tuning
  const tier3 = Math.round(a.fineTuningOrgs * TIER3_PER_ORG * scale);

  // Tier 4: Sovereign training
  const tier4 = a.sovereignty ? Math.round(TIER4_SOVEREIGN * scale) : 0;

  const total = tier1 + tier2 + tier3 + tier4;
  return { tier1, tier2, tier3, tier4, total };
}

// --- Cost & power derivation ---
// From 06-sammanfattning: 9000 H100-eq ≈ 2000 MSEK/year, ≈ 6.3 MW
const COST_PER_H100_YEAR = 0.222; // MSEK
const POWER_PER_H100 = 0.0007; // MW

export function getAnnualCost(gpus: number): number {
  return Math.round(gpus * COST_PER_H100_YEAR);
}

export function getPowerMW(gpus: number): number {
  return parseFloat((gpus * POWER_PER_H100).toFixed(1));
}

// --- Formatting ---

export function formatNumber(n: number): string {
  return n.toLocaleString("sv-SE");
}

// GitHub repo URL
export const REPO_URL = "https://github.com/niklasingvar/compute-analysis";
