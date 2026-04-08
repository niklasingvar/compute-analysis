"use client";

import { useState, useCallback, useMemo } from "react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import {
  years,
  computeAll,
  computeTimeline,
  getAnnualCost,
  getEnergyMW,
  formatNumber,
  defaultAssumptions,
  defaultSectors,
  presets,
  leverRanges,
  sectorDataQuality,
  euComparisons,
  type Assumptions,
  type SectorToggles,
  type SectorKey,
  type Preset,
  REPO_URL,
} from "@/lib/data";
import ComputeChart from "./ComputeChart";

// Sector colors
const SECTOR_COLORS: Record<SectorKey, string> = {
  publicCore: "#006AA7",
  healthcare: "#34D399",
  defense: "#64748B",
  privateSector: "#FBBF24",
};

export default function ComputeWidget({ locale }: { locale: Locale }) {
  const [assumptions, setAssumptions] = useState<Assumptions>({ ...defaultAssumptions });
  const [sectors, setSectors] = useState<SectorToggles>({ ...defaultSectors });
  const [yearIndex, setYearIndex] = useState(3); // 2029
  const [slidersOpen, setSlidersOpen] = useState(true);
  const [activeSlider, setActiveSlider] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<Preset | null>("base");
  const [presetPopover, setPresetPopover] = useState<Preset | null>(null);
  const [sectorPopover, setSectorPopover] = useState<SectorKey | null>(null);

  const year = years[yearIndex];
  const result = computeAll(assumptions, sectors, year);
  const timeline = useMemo(
    () => computeTimeline(assumptions, sectors),
    [assumptions, sectors]
  );
  const cost = getAnnualCost(result.total);
  const energy = getEnergyMW(result.total, year);

  const updateAssumption = useCallback(
    <K extends keyof Assumptions>(key: K, value: Assumptions[K]) => {
      setAssumptions((prev) => ({ ...prev, [key]: value }));
      setActivePreset(null);
    },
    []
  );

  const toggleSector = useCallback((key: SectorKey) => {
    setSectors((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const applyPreset = useCallback((key: Preset) => {
    setAssumptions({ ...presets[key] });
    setActivePreset(key);
    setPresetPopover(null);
  }, []);

  const sectorLabels: Record<SectorKey, { name: string; desc: string }> = {
    publicCore: { name: t(locale, "sectorPublicCore"), desc: t(locale, "sectorPublicCoreDesc") },
    healthcare: { name: t(locale, "sectorHealthcare"), desc: t(locale, "sectorHealthcareDesc") },
    defense: { name: t(locale, "sectorDefense"), desc: t(locale, "sectorDefenseDesc") },
    privateSector: { name: t(locale, "sectorPrivate"), desc: t(locale, "sectorPrivateDesc") },
  };

  const qualityLabels: Record<string, string> = {
    strong: t(locale, "dataQualityStrong"),
    good: t(locale, "dataQualityGood"),
    rough: t(locale, "dataQualityRough"),
    none: t(locale, "dataQualityNone"),
  };

  // Contextual slider explainer based on value
  function getSliderContext(
    id: string,
    value: number
  ): string | null {
    const thresholds: Record<string, { low: number; high: number; lowKey: string; highKey: string }> = {
      adoptionRate: { low: 0.4, high: 0.7, lowKey: "sliderAdoptionLow", highKey: "sliderAdoptionHigh" },
      agentShare: { low: 0.15, high: 0.35, lowKey: "sliderAgentLow", highKey: "sliderAgentHigh" },
      healthcareAdoption: { low: 0.35, high: 0.7, lowKey: "sliderHealthcareLow", highKey: "sliderHealthcareHigh" },
      fineTuningOrgs: { low: 40, high: 150, lowKey: "sliderFineTuningLow", highKey: "sliderFineTuningHigh" },
    };
    const cfg = thresholds[id];
    if (!cfg) return null;
    if (value <= cfg.low) return t(locale, cfg.lowKey as Parameters<typeof t>[1]);
    if (value >= cfg.high) return t(locale, cfg.highKey as Parameters<typeof t>[1]);
    return null;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* === LEFT PANEL: Controls === */}
      <div className="w-full lg:w-[400px] lg:shrink-0 space-y-5 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-2">
        {/* Sovereignty toggle */}
        <div
          className={`rounded-xl border-2 p-4 transition-all duration-500 ${
            assumptions.sovereignty
              ? "border-accent-gold/30 bg-bg-surface"
              : "border-accent-danger sovereignty-warning bg-accent-danger/5"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="font-semibold text-text-primary text-sm">
                {t(locale, "sovereigntyLabel")}
              </div>
              <div className="text-xs text-text-secondary">
                {t(locale, "sovereigntySubtitle")}
              </div>
            </div>
            <button
              role="switch"
              aria-checked={assumptions.sovereignty}
              onClick={() => updateAssumption("sovereignty", !assumptions.sovereignty)}
              className={`relative w-14 h-8 rounded-full transition-all duration-300 shrink-0 ${
                assumptions.sovereignty ? "bg-accent-gold" : "bg-border-light"
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-all duration-300 ${
                  assumptions.sovereignty ? "left-7" : "left-1"
                }`}
              />
            </button>
          </div>
          {!assumptions.sovereignty && (
            <div className="mt-3 p-3 rounded-lg bg-accent-danger/10 border border-accent-danger/30 section-fade">
              <p className="text-xs text-text-primary leading-relaxed">
                {t(locale, "sovereigntyOffWarning")}
              </p>
              <a
                href={`${REPO_URL}/blob/main/08-suveranitet.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs text-accent-danger hover:underline font-medium"
              >
                {t(locale, "sovereigntyOffCta")} →
              </a>
            </div>
          )}
        </div>

        {/* Sector toggles */}
        <div className="rounded-xl border border-border bg-bg-surface p-4 space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
            {t(locale, "sectorsLabel")}
          </div>
          {(["publicCore", "healthcare", "defense", "privateSector"] as const).map(
            (key) => {
              const quality = sectorDataQuality[key];
              const hasDisclaimer = key === "defense" || key === "privateSector";
              return (
                <div key={key} className="relative">
                  <button
                    onClick={() => toggleSector(key)}
                    onMouseEnter={() => hasDisclaimer && setSectorPopover(key)}
                    onMouseLeave={() => setSectorPopover(null)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                      sectors[key]
                        ? "bg-bg-elevated"
                        : "opacity-50 hover:opacity-70"
                    }`}
                  >
                    <div
                      className="w-3 h-3 rounded-sm shrink-0"
                      style={{
                        backgroundColor: sectors[key]
                          ? SECTOR_COLORS[key]
                          : "transparent",
                        border: sectors[key]
                          ? "none"
                          : `2px solid ${SECTOR_COLORS[key]}`,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-text-primary truncate">
                        {sectorLabels[key].name}
                      </div>
                      <div className="text-xs text-text-muted truncate">
                        {sectorLabels[key].desc}
                      </div>
                    </div>
                    {(quality === "rough" || quality === "none") && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-gold/15 text-accent-gold font-medium shrink-0">
                        ~
                      </span>
                    )}
                  </button>
                  {sectorPopover === key && hasDisclaimer && (
                    <div className="absolute z-50 left-0 right-0 top-full mt-1 p-3 rounded-lg bg-bg-elevated border border-border-light shadow-xl section-fade">
                      <div className="text-[10px] font-mono uppercase text-accent-gold mb-1">
                        {qualityLabels[quality]}
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {t(
                          locale,
                          key === "defense"
                            ? "sectorDefenseDisclaimer"
                            : "sectorPrivateDisclaimer"
                        )}
                      </p>
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>

        {/* Presets */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-text-muted mr-1">
            {t(locale, "presetLabel")}
          </span>
          {(["low", "base", "high"] as const).map((key) => (
            <div key={key} className="relative">
              <button
                onClick={() => applyPreset(key)}
                onMouseEnter={() => setPresetPopover(key)}
                onMouseLeave={() => setPresetPopover(null)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activePreset === key
                    ? "bg-accent-blue text-white"
                    : "bg-bg-surface text-text-secondary hover:bg-bg-elevated"
                }`}
              >
                {t(locale, key === "low" ? "presetLow" : key === "base" ? "presetBase" : "presetHigh")}
              </button>
              {presetPopover === key && (
                <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-lg bg-bg-elevated border border-border-light shadow-xl section-fade">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t(
                      locale,
                      key === "low" ? "presetLowConsequence" : key === "base" ? "presetBaseConsequence" : "presetHighConsequence"
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Assumption sliders */}
        <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
          <button
            onClick={() => setSlidersOpen(!slidersOpen)}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-bg-elevated/50 transition-colors"
          >
            <span className="text-sm font-semibold text-text-primary">
              {t(locale, slidersOpen ? "assumptionsLabel" : "assumptionsCollapsed")}
            </span>
            <svg
              className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${slidersOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {slidersOpen && (
            <div className="px-4 pb-4 space-y-4 section-fade">
              {([
                { id: "adoptionRate", label: "sliderAdoptionLabel", explainer: "sliderAdoptionExplainer", format: (v: number) => `${Math.round(v * 100)}%`, range: leverRanges.adoptionRate },
                { id: "agentShare", label: "sliderAgentLabel", explainer: "sliderAgentExplainer", format: (v: number) => `${Math.round(v * 100)}%`, range: leverRanges.agentShare },
                { id: "healthcareAdoption", label: "sliderHealthcareLabel", explainer: "sliderHealthcareExplainer", format: (v: number) => `${Math.round(v * 100)}%`, range: leverRanges.healthcareAdoption },
                { id: "fineTuningOrgs", label: "sliderFineTuningLabel", explainer: "sliderFineTuningExplainer", format: (v: number) => `${Math.round(v)}`, range: leverRanges.fineTuningOrgs },
              ] as const).map((slider) => {
                const value = assumptions[slider.id as keyof Assumptions] as number;
                const isActive = activeSlider === slider.id;
                const context = getSliderContext(slider.id, value);
                return (
                  <div key={slider.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor={slider.id} className="text-xs font-medium text-text-primary">
                        {t(locale, slider.label as Parameters<typeof t>[1])}
                      </label>
                      <span className="text-xs font-mono font-bold text-accent-blue tabular-nums">
                        {slider.format(value)}
                      </span>
                    </div>
                    <input
                      id={slider.id}
                      type="range"
                      min={slider.range.min}
                      max={slider.range.max}
                      step={slider.range.step}
                      value={value}
                      onChange={(e) =>
                        updateAssumption(
                          slider.id as keyof Assumptions,
                          Number(e.target.value) as never
                        )
                      }
                      onFocus={() => setActiveSlider(slider.id)}
                      onMouseDown={() => setActiveSlider(slider.id)}
                    />
                    {isActive && (
                      <div className="mt-1.5 pl-3 border-l-2 border-accent-blue/40 section-fade">
                        <p className="text-[11px] text-text-secondary leading-relaxed">
                          {t(locale, slider.explainer as Parameters<typeof t>[1])}
                        </p>
                        {context && (
                          <p className="text-[11px] text-accent-gold mt-1 font-medium">
                            {context}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* === RIGHT PANEL: Results === */}
      <div className="flex-1 min-w-0 space-y-5">
        {/* Year chips */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-text-muted mr-1">
            {t(locale, "yearLabel")}
          </span>
          {years.map((y, i) => (
            <button
              key={y}
              onClick={() => setYearIndex(i)}
              className={`px-3 py-1.5 rounded-lg text-sm font-mono font-semibold transition-all ${
                y === year
                  ? "bg-accent-blue text-white"
                  : "bg-bg-surface text-text-secondary hover:bg-bg-elevated"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Big number + stats */}
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-text-muted">
              {t(locale, "computeNeed")} {year}
            </div>
            <div
              className={`text-5xl md:text-6xl font-black tabular-nums tracking-tighter number-transition ${
                assumptions.sovereignty ? "text-accent-gold" : "text-text-secondary"
              }`}
            >
              {formatNumber(result.total)}
            </div>
            <div className="text-xs text-text-muted">{t(locale, "unit")}</div>
          </div>
          <div className="flex gap-6 pb-2">
            <div>
              <div className="text-lg font-bold tabular-nums text-text-primary">
                ~{formatNumber(cost)}
              </div>
              <div className="text-[10px] font-mono uppercase text-text-muted">
                MSEK/{locale === "sv" ? "år" : "yr"}
              </div>
            </div>
            <div>
              <div className="text-lg font-bold tabular-nums text-text-primary">
                ~{energy}
              </div>
              <div className="text-[10px] font-mono uppercase text-text-muted">
                MW
              </div>
            </div>
          </div>
        </div>

        {/* Stacked area chart */}
        <div className="rounded-xl border border-border bg-bg-surface p-4">
          <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
            {t(locale, "chartTitle")}
          </div>
          <ComputeChart
            data={timeline}
            sectors={sectors}
            selectedYear={year}
            locale={locale}
          />
          {/* Sector legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
            {(["publicCore", "healthcare", "defense", "privateSector"] as const).map(
              (key) => {
                if (!sectors[key]) return null;
                return (
                  <div key={key} className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: SECTOR_COLORS[key] }}
                    />
                    <span className="text-[11px] text-text-secondary">
                      {sectorLabels[key].name}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-text-primary tabular-nums">
                      {formatNumber(result[key])}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Energy card */}
        <div className="rounded-xl border border-border bg-bg-surface p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-text-muted">
                {t(locale, "energyTitle")} {year}
              </div>
              <div className="text-3xl font-black tabular-nums text-text-primary mt-1">
                ~{energy} <span className="text-lg font-normal text-text-secondary">MW</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono uppercase tracking-widest text-text-muted">
                {t(locale, "costTitle")}
              </div>
              <div className="text-3xl font-black tabular-nums text-text-primary mt-1">
                ~{formatNumber(cost)} <span className="text-lg font-normal text-text-secondary">MSEK</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-text-muted mt-3 italic">
            {t(locale, "energyContext")}
          </p>
        </div>

        {/* EU comparison bar */}
        <div className="rounded-xl border border-border bg-bg-surface p-4">
          <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1">
            {t(locale, "euTitle")}
          </div>
          <p className="text-xs text-text-secondary mb-4">
            {t(locale, "euSubtitle")}
          </p>
          <div className="space-y-2">
            {/* Sweden current */}
            <EUBar
              label={t(locale, "euSweden")}
              value={result.publicCore + result.healthcare}
              maxValue={50000}
              color="#006AA7"
            />
            {/* Sweden all sectors */}
            {result.total > result.publicCore + result.healthcare && (
              <EUBar
                label={t(locale, "euSwedenFull")}
                value={result.total}
                maxValue={50000}
                color="#FECC02"
              />
            )}
            {/* EU comparisons */}
            {euComparisons.map((c) => (
              <EUBar
                key={c.key}
                label={`${c.label} (${c.country})`}
                value={c.h100eq}
                maxValue={50000}
                color="#64748B"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EUBar({
  label,
  value,
  maxValue,
  color,
}: {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}) {
  const pct = Math.min((value / maxValue) * 100, 100);
  return (
    <div className="flex items-center gap-3">
      <div className="w-40 text-[11px] text-text-secondary truncate shrink-0">
        {label}
      </div>
      <div className="flex-1 bg-bg-elevated rounded-full h-4 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${Math.max(pct, 1)}%`, backgroundColor: color }}
        />
      </div>
      <div className="w-16 text-right text-[11px] font-mono font-semibold text-text-primary tabular-nums">
        {formatNumber(value)}
      </div>
    </div>
  );
}
