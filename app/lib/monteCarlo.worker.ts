/// <reference lib="webworker" />

import {
  sampleOnce,
  percentile,
  type SimWorkerInput,
  type SimWorkerOutput,
  type PercentileTimeline,
  type ExceedanceResult,
} from "./simulation";
import type { Year } from "./data";

const years: Year[] = [2026, 2027, 2028, 2029, 2030, 2031];

self.onmessage = (e: MessageEvent<SimWorkerInput>) => {
  const { assumptions, advanced, sectors } = e.data;
  const N = advanced.iterations;

  // Accumulate results per year
  const totals: Record<Year, number[]> = {} as Record<Year, number[]>;
  const publicCores: Record<Year, number[]> = {} as Record<Year, number[]>;
  const healthcares: Record<Year, number[]> = {} as Record<Year, number[]>;
  const defenses: Record<Year, number[]> = {} as Record<Year, number[]>;
  const privates: Record<Year, number[]> = {} as Record<Year, number[]>;
  const energies: Record<Year, number[]> = {} as Record<Year, number[]>;

  for (const y of years) {
    totals[y] = [];
    publicCores[y] = [];
    healthcares[y] = [];
    defenses[y] = [];
    privates[y] = [];
    energies[y] = [];
  }

  // Run simulation
  for (let i = 0; i < N; i++) {
    for (const y of years) {
      const r = sampleOnce(assumptions, advanced, sectors, y);
      totals[y].push(r.total);
      publicCores[y].push(r.publicCore);
      healthcares[y].push(r.healthcare);
      defenses[y].push(r.defense);
      privates[y].push(r.privateSector);
      energies[y].push(r.energyMW);
    }
  }

  // Sort and extract percentiles
  const timeline: PercentileTimeline = years.map((y) => {
    totals[y].sort((a, b) => a - b);
    publicCores[y].sort((a, b) => a - b);
    healthcares[y].sort((a, b) => a - b);
    defenses[y].sort((a, b) => a - b);
    privates[y].sort((a, b) => a - b);
    energies[y].sort((a, b) => a - b);

    return {
      year: y,
      p10: Math.round(percentile(totals[y], 10)),
      p25: Math.round(percentile(totals[y], 25)),
      p50: Math.round(percentile(totals[y], 50)),
      p75: Math.round(percentile(totals[y], 75)),
      p90: Math.round(percentile(totals[y], 90)),
      publicCore_p50: Math.round(percentile(publicCores[y], 50)),
      healthcare_p50: Math.round(percentile(healthcares[y], 50)),
      defense_p50: Math.round(percentile(defenses[y], 50)),
      privateSector_p50: Math.round(percentile(privates[y], 50)),
      energyMW_p50: parseFloat(percentile(energies[y], 50).toFixed(1)),
    };
  });

  // Budget exceedance probability for 2029
  const threshold = advanced.budgetThreshold;
  const total2029 = totals[2029];
  const exceedCount = total2029.filter((v) => v > threshold).length;
  const exceedance: ExceedanceResult = {
    threshold,
    year2029Probability: exceedCount / N,
  };

  const output: SimWorkerOutput = {
    type: "result",
    percentiles: timeline,
    exceedance,
  };

  self.postMessage(output);
};
