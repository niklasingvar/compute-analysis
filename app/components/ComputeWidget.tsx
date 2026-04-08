"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import {
  years,
  getComputeNeed,
  getAnnualCost,
  getPowerMW,
  getTierBreakdown,
  formatNumber,
  type Scenario,
} from "@/lib/data";

const SCENARIO_COLORS = {
  low: { bg: "bg-blue-100 dark:bg-blue-900/30", bar: "bg-blue-500", text: "text-blue-700 dark:text-blue-300" },
  base: { bg: "bg-amber-100 dark:bg-amber-900/30", bar: "bg-amber-500", text: "text-amber-700 dark:text-amber-300" },
  high: { bg: "bg-rose-100 dark:bg-rose-900/30", bar: "bg-rose-500", text: "text-rose-700 dark:text-rose-300" },
};

export default function ComputeWidget({ locale }: { locale: Locale }) {
  const [scenario, setScenario] = useState<Scenario>("base");
  const [yearIndex, setYearIndex] = useState(3); // 2029 default
  const year = years[yearIndex];

  const gpus = getComputeNeed(scenario, year);
  const cost = getAnnualCost(gpus);
  const power = getPowerMW(gpus);
  const tiers = getTierBreakdown(scenario, year);
  const tierTotal = tiers.tier1 + tiers.tier2 + tiers.tier3 + tiers.tier4;

  const scenarios: Scenario[] = ["low", "base", "high"];
  const scenarioLabels: Record<Scenario, string> = {
    low: t(locale, "scenarioLow"),
    base: t(locale, "scenarioBase"),
    high: t(locale, "scenarioHigh"),
  };
  const scenarioDescs: Record<Scenario, string> = {
    low: t(locale, "lowDesc"),
    base: t(locale, "baseDesc"),
    high: t(locale, "highDesc"),
  };

  const tierLabels = [
    { key: "tier1" as const, label: t(locale, "tier1"), color: "bg-sky-500" },
    { key: "tier2" as const, label: t(locale, "tier2"), color: "bg-emerald-500" },
    { key: "tier3" as const, label: t(locale, "tier3"), color: "bg-violet-500" },
    { key: "tier4" as const, label: t(locale, "tier4"), color: "bg-orange-500" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Scenario selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          {t(locale, "scenarioLabel")}
        </label>
        <div className="flex gap-2">
          {scenarios.map((s) => (
            <button
              key={s}
              onClick={() => setScenario(s)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                scenario === s
                  ? `${SCENARIO_COLORS[s].bg} ${SCENARIO_COLORS[s].text} ring-2 ring-current`
                  : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {scenarioLabels[s]}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic">
          {scenarioDescs[scenario]}
        </p>
      </div>

      {/* Year slider */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          {t(locale, "yearLabel")}: <span className="text-gray-900 dark:text-gray-100 font-bold text-lg">{year}</span>
        </label>
        <input
          type="range"
          min={0}
          max={years.length - 1}
          value={yearIndex}
          onChange={(e) => setYearIndex(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-gray-900 dark:accent-gray-100"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          {years.map((y) => (
            <span key={y} className={y === year ? "font-bold text-gray-700 dark:text-gray-300" : ""}>
              {y}
            </span>
          ))}
        </div>
      </div>

      {/* Big number display */}
      <div className={`rounded-2xl p-6 mb-6 ${SCENARIO_COLORS[scenario].bg}`}>
        <div className="text-center">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            {t(locale, "computeNeed")} {year}
          </div>
          <div className={`text-5xl md:text-7xl font-black tabular-nums tracking-tight ${SCENARIO_COLORS[scenario].text}`}>
            {formatNumber(gpus)}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {t(locale, "unit")}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ~{formatNumber(cost)} <span className="text-sm font-normal">MSEK</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {t(locale, "annualCost")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ~{power} <span className="text-sm font-normal">MW</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {t(locale, "powerNeed")}
            </div>
          </div>
        </div>
      </div>

      {/* Tier breakdown */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          {t(locale, "tierExplainer")}
        </p>
        <div className="space-y-2">
          {tierLabels.map(({ key, label, color }) => {
            const value = tiers[key];
            const pct = tierTotal > 0 ? (value / tierTotal) * 100 : 0;
            return (
              <div key={key} className="flex items-center gap-3">
                <div className="w-36 text-xs text-gray-600 dark:text-gray-400 shrink-0">
                  {label}
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-5 overflow-hidden">
                  <div
                    className={`${color} h-full rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${Math.max(pct, 2)}%` }}
                  />
                </div>
                <div className="w-20 text-right text-xs tabular-nums text-gray-600 dark:text-gray-400">
                  {formatNumber(value)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline mini-chart */}
      <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-end justify-between gap-1 h-32">
          {years.map((y) => {
            const val = getComputeNeed(scenario, y);
            const maxVal = getComputeNeed("high", 2031);
            const height = (val / maxVal) * 100;
            const isActive = y === year;
            return (
              <button
                key={y}
                onClick={() => setYearIndex(years.indexOf(y))}
                className="flex-1 flex flex-col items-center gap-1 group cursor-pointer"
              >
                <span className={`text-xs tabular-nums transition-all ${
                  isActive ? "font-bold text-gray-900 dark:text-gray-100" : "text-gray-400 opacity-0 group-hover:opacity-100"
                }`}>
                  {formatNumber(val)}
                </span>
                <div
                  className={`w-full rounded-t transition-all duration-300 ${
                    isActive ? SCENARIO_COLORS[scenario].bar : "bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600"
                  }`}
                  style={{ height: `${Math.max(height, 3)}%` }}
                />
                <span className={`text-xs ${isActive ? "font-bold text-gray-900 dark:text-gray-100" : "text-gray-400"}`}>
                  {y}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
