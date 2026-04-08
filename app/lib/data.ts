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

// --- Year scaling ---
const yearScale: Record<Year, number> = {
  2026: 0.1,
  2027: 0.25,
  2028: 0.5,
  2029: 1.0,
  2030: 1.45,
  2031: 2.0,
};

// --- Formula constants ---
// Tier 1: copilot=0.0022, agent=0.022 H100-eq per user
// 500K × 0.62 × (0.25×0.022 + 0.75×0.0022) = ~2,217 ✓
const ADDRESSABLE_USERS = 500_000;
const COPILOT_COMPUTE = 0.0022;
const AGENT_COMPUTE = 0.022;

// Tier 2: ~1,500 H100-eq base, 60% healthcare-driven
const TIER2_TOTAL_BASE = 1500;
const TIER2_HEALTHCARE_SHARE = 0.6;
const TIER2_NON_HEALTHCARE = TIER2_TOTAL_BASE * (1 - TIER2_HEALTHCARE_SHARE); // 600
const TIER2_HEALTHCARE_ANCHOR = 0.55;

// Tier 3: fine-tuning, ~600 base at 80 orgs
const TIER3_PER_ORG = 7.5;

// Tier 4: sovereign training
const TIER4_SOVEREIGN = 4500;

// Healthcare copilot/agent users (~180K healthcare workers, ~60% of healthcare workforce)
const HEALTHCARE_COPILOT_USERS = 180_000;

// Defense estimate: ~10-20% of public sector AI compute (international proxy)
const DEFENSE_MULTIPLIER_LOW = 0.08;
const DEFENSE_MULTIPLIER_HIGH = 0.15;
const DEFENSE_MULTIPLIER_BASE = 0.12;

// Private sector: tokens-per-capita → 35K-50K total Sweden minus public sector
// Use midpoint ~38K for base, scale from public sector
const PRIVATE_SECTOR_MULTIPLIER = 3.5; // private ≈ 3.5× public sector compute

// --- Sector computation ---

export interface SectorResult {
  publicCore: number;
  healthcare: number;
  defense: number;
  privateSector: number;
  total: number;
  // Sub-tier breakdown for public core
  tier1: number;
  tier2NonHealthcare: number;
  tier3: number;
  tier4: number;
  // Healthcare sub-tiers
  healthcareTier1: number;
  healthcareTier2: number;
}

export function computeAll(
  a: Assumptions,
  sectors: SectorToggles,
  year: Year
): SectorResult {
  const s = yearScale[year];

  // === PUBLIC CORE (excl. healthcare workers) ===
  const coreUsers = (ADDRESSABLE_USERS - HEALTHCARE_COPILOT_USERS) * a.adoptionRate;
  const coreAgents = coreUsers * a.agentShare;
  const coreCopilots = coreUsers * (1 - a.agentShare);
  const tier1 = Math.round(
    (coreCopilots * COPILOT_COMPUTE + coreAgents * AGENT_COMPUTE) * s
  );
  const tier2NonHealthcare = Math.round(TIER2_NON_HEALTHCARE * s);
  const tier3 = Math.round(a.fineTuningOrgs * TIER3_PER_ORG * s);
  const tier4 = a.sovereignty ? Math.round(TIER4_SOVEREIGN * s) : 0;
  const publicCore = sectors.publicCore
    ? tier1 + tier2NonHealthcare + tier3 + tier4
    : 0;

  // === HEALTHCARE ===
  const hcUsers = HEALTHCARE_COPILOT_USERS * a.adoptionRate;
  const hcAgents = hcUsers * a.agentShare;
  const hcCopilots = hcUsers * (1 - a.agentShare);
  const healthcareTier1 = Math.round(
    (hcCopilots * COPILOT_COMPUTE + hcAgents * AGENT_COMPUTE) * s
  );
  const healthcareTier2 = Math.round(
    TIER2_TOTAL_BASE *
      TIER2_HEALTHCARE_SHARE *
      (a.healthcareAdoption / TIER2_HEALTHCARE_ANCHOR) *
      s
  );
  const healthcare = sectors.healthcare
    ? healthcareTier1 + healthcareTier2
    : 0;

  // === DEFENSE (rough estimate) ===
  const publicOperational = tier1 + tier2NonHealthcare + tier3 + healthcareTier1 + healthcareTier2;
  const defense = sectors.defense
    ? Math.round(publicOperational * DEFENSE_MULTIPLIER_BASE * s)
    : 0;

  // === PRIVATE SECTOR (rough estimate) ===
  const publicTotal = (sectors.publicCore ? publicCore : tier1 + tier2NonHealthcare + tier3 + tier4) +
    (sectors.healthcare ? healthcare : healthcareTier1 + healthcareTier2);
  const privateSector = sectors.privateSector
    ? Math.round(publicTotal * PRIVATE_SECTOR_MULTIPLIER)
    : 0;

  const total = publicCore + healthcare + defense + privateSector;

  return {
    publicCore,
    healthcare,
    defense,
    privateSector,
    total,
    tier1,
    tier2NonHealthcare,
    tier3,
    tier4,
    healthcareTier1,
    healthcareTier2,
  };
}

// Compute all years at once for chart data
export function computeTimeline(
  a: Assumptions,
  sectors: SectorToggles
): { year: Year; publicCore: number; healthcare: number; defense: number; privateSector: number; total: number; energyMW: number }[] {
  return years.map((year) => {
    const r = computeAll(a, sectors, year);
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
  return n.toLocaleString("sv-SE");
}

export const REPO_URL = "https://github.com/niklasingvar/compute-analysis";
