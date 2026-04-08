export type Scenario = "low" | "base" | "high";
export type Year = 2026 | 2027 | 2028 | 2029 | 2030 | 2031;

export const years: Year[] = [2026, 2027, 2028, 2029, 2030, 2031];

// H100-equivalents per scenario per year
// Source: 06-sammanfattning.md scenario table, backed by 03-berakningsmodell.md
export const scenarioData: Record<Scenario, Record<Year, number>> = {
  low: {
    2026: 400,
    2027: 900,
    2028: 1800,
    2029: 3000,
    2030: 5500,
    2031: 8000,
  },
  base: {
    2026: 900,
    2027: 2200,
    2028: 4500,
    2029: 9000,
    2030: 13000,
    2031: 18000,
  },
  high: {
    2026: 2000,
    2027: 5000,
    2028: 9500,
    2029: 20000,
    2030: 30000,
    2031: 42000,
  },
};

// Tier breakdown for 2029 base scenario (from 06-sammanfattning.md & 03-berakningsmodell.md)
// These scale proportionally for other scenarios and years
export const tierBreakdown2029Base = {
  tier1: 2200, // Copilots & agents
  tier2: 1600, // Specialized inference (incl. healthcare)
  tier3: 500, // Fine-tuning
  tier4: 4500, // Sovereign training
  // Note: tier4 is a policy choice, not demand-driven
};

// Cost per H100-eq per year in MSEK (operational cost including lease/depreciation, power, cooling)
// Derived from 06-sammanfattning.md: 9000 H100-eq ≈ 2000 MSEK/year → ~0.222 MSEK per H100-eq
const costPerH100PerYear = 0.222;

// Power per H100 in MW (facility power including cooling overhead)
// Derived from 06-sammanfattning.md: 9000 H100-eq ≈ 6.3 MW → ~0.0007 MW per H100-eq
const powerPerH100 = 0.0007;

export function getComputeNeed(scenario: Scenario, year: Year): number {
  return scenarioData[scenario][year];
}

export function getAnnualCost(gpus: number): number {
  return Math.round(gpus * costPerH100PerYear);
}

export function getPowerMW(gpus: number): number {
  return parseFloat((gpus * powerPerH100).toFixed(1));
}

export function getTierBreakdown(scenario: Scenario, year: Year) {
  const total = scenarioData[scenario][year];
  const baseTotal = scenarioData.base[2029]; // 9000
  const scale = total / baseTotal;

  // For low scenario, tier4 (sovereign training) is minimal
  const tier4Scale =
    scenario === "low" ? scale * 0.3 : scenario === "high" ? scale * 1.1 : scale;
  const operationalScale =
    scenario === "low" ? scale * 1.3 : scenario === "high" ? scale * 0.95 : scale;

  const tier4 = Math.round(tierBreakdown2029Base.tier4 * tier4Scale);
  const tier1 = Math.round(tierBreakdown2029Base.tier1 * operationalScale);
  const tier2 = Math.round(tierBreakdown2029Base.tier2 * operationalScale);
  const tier3 = Math.round(tierBreakdown2029Base.tier3 * operationalScale);

  // Normalize to match total
  const rawTotal = tier1 + tier2 + tier3 + tier4;
  const factor = total / rawTotal;

  return {
    tier1: Math.round(tier1 * factor),
    tier2: Math.round(tier2 * factor),
    tier3: Math.round(tier3 * factor),
    tier4: Math.round(tier4 * factor),
  };
}

export function formatNumber(n: number): string {
  if (n >= 1000) {
    return n.toLocaleString("sv-SE");
  }
  return String(n);
}

// GitHub repo URL
export const REPO_URL =
  "https://github.com/niklasingvar/compute-analysis";
