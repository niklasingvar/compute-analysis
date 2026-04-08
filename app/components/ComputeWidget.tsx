"use client";

import { useState, useCallback } from "react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import {
  years,
  computeFromAssumptions,
  getAnnualCost,
  getPowerMW,
  formatNumber,
  defaultAssumptions,
  presets,
  leverRanges,
  type Assumptions,
  type Preset,
  REPO_URL,
} from "@/lib/data";

export default function ComputeWidget({ locale }: { locale: Locale }) {
  const [assumptions, setAssumptions] = useState<Assumptions>({
    ...defaultAssumptions,
  });
  const [yearIndex, setYearIndex] = useState(3); // 2029
  const [slidersOpen, setSlidersOpen] = useState(false);
  const [activeSlider, setActiveSlider] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<Preset | null>("base");
  const [presetPopover, setPresetPopover] = useState<Preset | null>(null);

  const year = years[yearIndex];
  const result = computeFromAssumptions(assumptions, year);
  const cost = getAnnualCost(result.total);
  const power = getPowerMW(result.total);

  const updateAssumption = useCallback(
    <K extends keyof Assumptions>(key: K, value: Assumptions[K]) => {
      setAssumptions((prev) => ({ ...prev, [key]: value }));
      setActivePreset(null); // custom configuration
    },
    []
  );

  const applyPreset = useCallback((key: Preset) => {
    setAssumptions({ ...presets[key] });
    setActivePreset(key);
    setPresetPopover(null);
  }, []);

  const tierColors = {
    tier1: "bg-tier1",
    tier2: "bg-tier2",
    tier3: "bg-tier3",
    tier4: assumptions.sovereignty ? "bg-tier4" : "bg-tier4-off",
  };

  const tierLabels = {
    tier1: t(locale, "tier1"),
    tier2: t(locale, "tier2"),
    tier3: t(locale, "tier3"),
    tier4: t(locale, "tier4"),
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* === SOVEREIGNTY TOGGLE === */}
      <div
        className={`rounded-2xl border-2 p-5 transition-all duration-500 ${
          assumptions.sovereignty
            ? "border-accent-gold/30 bg-bg-surface"
            : "border-accent-danger sovereignty-warning bg-accent-danger/5"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="font-semibold text-text-primary text-lg">
              {t(locale, "sovereigntyLabel")}
            </div>
            <div className="text-sm text-text-secondary mt-0.5">
              {t(locale, "sovereigntySubtitle")}
            </div>
          </div>
          <button
            role="switch"
            aria-checked={assumptions.sovereignty}
            onClick={() =>
              updateAssumption("sovereignty", !assumptions.sovereignty)
            }
            className={`relative w-16 h-9 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue ${
              assumptions.sovereignty ? "bg-accent-gold" : "bg-border-light"
            }`}
          >
            <span
              className={`absolute top-1 w-7 h-7 rounded-full bg-white shadow-md transition-all duration-300 ${
                assumptions.sovereignty ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>

        {/* Sovereignty badge */}
        <div className="mt-3">
          {assumptions.sovereignty ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold/15 text-accent-gold text-sm font-medium">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              {t(locale, "sovereigntyOnBadge")}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-danger/15 text-accent-danger text-sm font-medium">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              {t(locale, "sovereigntyOffBadge")}
            </span>
          )}
        </div>

        {/* Sovereignty warning */}
        {!assumptions.sovereignty && (
          <div className="mt-4 p-4 rounded-xl bg-accent-danger/10 border border-accent-danger/30 section-fade">
            <p className="text-sm text-text-primary leading-relaxed">
              {t(locale, "sovereigntyOffWarning")}
            </p>
            <a
              href={`${REPO_URL}/blob/main/08-suveranitet.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-accent-danger hover:text-accent-danger/80 font-medium"
            >
              {t(locale, "sovereigntyOffCta")}
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* === YEAR CHIPS === */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-text-secondary font-medium mr-1">
          {t(locale, "yearLabel")}
        </span>
        {years.map((y, i) => (
          <button
            key={y}
            onClick={() => setYearIndex(i)}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono font-semibold transition-all ${
              y === year
                ? "bg-accent-blue text-white"
                : "bg-bg-surface text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* === BIG NUMBER === */}
      <div className="text-center py-6">
        <div className="text-sm font-medium text-text-secondary mb-2 tracking-wide uppercase font-mono">
          {t(locale, "computeNeed")} {year}
        </div>
        <div
          className={`text-7xl md:text-8xl lg:text-9xl font-black tabular-nums tracking-tighter number-transition ${
            assumptions.sovereignty ? "text-accent-gold" : "text-text-secondary"
          }`}
        >
          {formatNumber(result.total)}
        </div>
        <div className="text-sm text-text-muted mt-2">{t(locale, "unit")}</div>

        {/* Cost + Power stats */}
        <div className="flex justify-center gap-8 mt-6">
          <div>
            <div className="text-2xl font-bold tabular-nums text-text-primary">
              ~{formatNumber(cost)}
            </div>
            <div className="text-xs text-text-muted uppercase tracking-wide font-mono">
              MSEK / {t(locale, "annualCost").toLowerCase()}
            </div>
          </div>
          <div className="w-px bg-border" />
          <div>
            <div className="text-2xl font-bold tabular-nums text-text-primary">
              ~{power}
            </div>
            <div className="text-xs text-text-muted uppercase tracking-wide font-mono">
              MW / {t(locale, "powerNeed").toLowerCase()}
            </div>
          </div>
        </div>
      </div>

      {/* === STACKED TIER BAR === */}
      <div className="space-y-3">
        <div className="h-8 rounded-lg overflow-hidden flex">
          {(["tier1", "tier2", "tier3", "tier4"] as const).map((tier) => {
            const val = result[tier];
            const pct = result.total > 0 ? (val / result.total) * 100 : 0;
            if (pct < 0.5) return null;
            return (
              <div
                key={tier}
                className={`${tierColors[tier]} transition-all duration-500 ease-out`}
                style={{ width: `${pct}%` }}
                title={`${tierLabels[tier]}: ${formatNumber(val)}`}
              />
            );
          })}
        </div>

        {/* Tier legend */}
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {(["tier1", "tier2", "tier3", "tier4"] as const).map((tier) => {
            const val = result[tier];
            const dimmed = tier === "tier4" && !assumptions.sovereignty;
            return (
              <div
                key={tier}
                className={`flex items-center gap-2 transition-opacity duration-300 ${
                  dimmed ? "opacity-30" : ""
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-sm ${tierColors[tier]}`}
                />
                <span className="text-xs text-text-secondary">
                  {tierLabels[tier]}
                </span>
                <span className="text-xs font-mono font-semibold text-text-primary tabular-nums">
                  {formatNumber(val)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* === PRESETS === */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-text-secondary font-medium mr-1">
          {t(locale, "presetLabel")}
        </span>
        {(["low", "base", "high"] as const).map((key) => (
          <div key={key} className="relative">
            <button
              onClick={() => applyPreset(key)}
              onMouseEnter={() => setPresetPopover(key)}
              onMouseLeave={() => setPresetPopover(null)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activePreset === key
                  ? "bg-accent-blue text-white"
                  : "bg-bg-surface text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
              }`}
            >
              {t(locale, key === "low" ? "presetLow" : key === "base" ? "presetBase" : "presetHigh")}
            </button>
            {/* Consequence popover */}
            {presetPopover === key && (
              <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 rounded-xl bg-bg-elevated border border-border-light shadow-2xl section-fade">
                <p className="text-xs text-text-secondary leading-relaxed">
                  {t(
                    locale,
                    key === "low"
                      ? "presetLowConsequence"
                      : key === "base"
                        ? "presetBaseConsequence"
                        : "presetHighConsequence"
                  )}
                </p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                  <div className="w-2.5 h-2.5 rotate-45 bg-bg-elevated border-r border-b border-border-light" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* === ASSUMPTION SLIDERS === */}
      <div className="rounded-2xl border border-border bg-bg-surface overflow-hidden">
        <button
          onClick={() => setSlidersOpen(!slidersOpen)}
          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-bg-elevated/50 transition-colors"
        >
          <span className="font-semibold text-text-primary">
            {t(locale, slidersOpen ? "assumptionsLabel" : "assumptionsCollapsed")}
          </span>
          <svg
            className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${
              slidersOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {slidersOpen && (
          <div className="px-5 pb-5 space-y-5 section-fade">
            <SliderRow
              id="adoptionRate"
              label={t(locale, "sliderAdoptionLabel")}
              explainer={t(locale, "sliderAdoptionExplainer")}
              value={assumptions.adoptionRate}
              range={leverRanges.adoptionRate}
              format={(v) => `${Math.round(v * 100)}%`}
              onChange={(v) => updateAssumption("adoptionRate", v)}
              active={activeSlider === "adoptionRate"}
              onFocus={() => setActiveSlider("adoptionRate")}
            />
            <SliderRow
              id="agentShare"
              label={t(locale, "sliderAgentLabel")}
              explainer={t(locale, "sliderAgentExplainer")}
              value={assumptions.agentShare}
              range={leverRanges.agentShare}
              format={(v) => `${Math.round(v * 100)}%`}
              onChange={(v) => updateAssumption("agentShare", v)}
              active={activeSlider === "agentShare"}
              onFocus={() => setActiveSlider("agentShare")}
            />
            <SliderRow
              id="healthcareAdoption"
              label={t(locale, "sliderHealthcareLabel")}
              explainer={t(locale, "sliderHealthcareExplainer")}
              value={assumptions.healthcareAdoption}
              range={leverRanges.healthcareAdoption}
              format={(v) => `${Math.round(v * 100)}%`}
              onChange={(v) => updateAssumption("healthcareAdoption", v)}
              active={activeSlider === "healthcareAdoption"}
              onFocus={() => setActiveSlider("healthcareAdoption")}
            />
            <SliderRow
              id="fineTuningOrgs"
              label={t(locale, "sliderFineTuningLabel")}
              explainer={t(locale, "sliderFineTuningExplainer")}
              value={assumptions.fineTuningOrgs}
              range={leverRanges.fineTuningOrgs}
              format={(v) => `${Math.round(v)}`}
              onChange={(v) => updateAssumption("fineTuningOrgs", v)}
              active={activeSlider === "fineTuningOrgs"}
              onFocus={() => setActiveSlider("fineTuningOrgs")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// --- Slider sub-component ---

function SliderRow({
  id,
  label,
  explainer,
  value,
  range,
  format,
  onChange,
  active,
  onFocus,
}: {
  id: string;
  label: string;
  explainer: string;
  value: number;
  range: { min: number; max: number; step: number };
  format: (v: number) => string;
  onChange: (v: number) => void;
  active: boolean;
  onFocus: () => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label
          htmlFor={id}
          className="text-sm font-medium text-text-primary"
        >
          {label}
        </label>
        <span className="text-sm font-mono font-bold text-accent-blue tabular-nums">
          {format(value)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={range.min}
        max={range.max}
        step={range.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onFocus={onFocus}
        onMouseDown={onFocus}
        onTouchStart={onFocus}
      />
      {active && (
        <div className="mt-2 pl-3 border-l-2 border-accent-blue/50 section-fade">
          <p className="text-xs text-text-secondary leading-relaxed">
            {explainer}
          </p>
        </div>
      )}
    </div>
  );
}
