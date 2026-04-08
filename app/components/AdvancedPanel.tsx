"use client";

import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import type { AdvancedParams } from "@/lib/simulation";

interface Props {
  locale: Locale;
  params: AdvancedParams;
  onChange: <K extends keyof AdvancedParams>(key: K, value: AdvancedParams[K]) => void;
}

export default function AdvancedPanel({ locale, params, onChange }: Props) {
  return (
    <div className="space-y-4 section-fade">
      {/* Uncertainty scale */}
      <Slider
        id="uncertaintyScale"
        label={t(locale, "uncertaintyLabel")}
        value={params.uncertaintyScale}
        min={0.2} max={2.0} step={0.1}
        format={(v) => `${Math.round(v * 100)}%`}
        onChange={(v) => onChange("uncertaintyScale", v)}
        explainer={t(locale, "uncertaintyExplainer")}
      />

      {/* Model ambition */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="advanced-model-ambition" className="text-xs font-medium text-text-primary">
            {t(locale, "modelAmbitionLabel")}
          </label>
          <span className="text-xs font-mono font-bold text-accent-blue">
            {params.modelAmbition.toUpperCase()}
          </span>
        </div>
        <select
          id="advanced-model-ambition"
          name="modelAmbition"
          aria-label={t(locale, "modelAmbitionLabel")}
          value={params.modelAmbition}
          onChange={(e) => onChange("modelAmbition", e.target.value as AdvancedParams["modelAmbition"])}
          className="w-full rounded-lg border border-border bg-bg-elevated text-text-primary text-xs font-semibold px-3 py-2 transition-colors focus:border-accent-blue focus:outline-none"
        >
          {(["none", "70b", "200b", "400b"] as const).map((opt) => (
            <option key={opt} value={opt}>
              {t(locale, `modelAmbition_${opt}` as Parameters<typeof t>[1])}
            </option>
          ))}
        </select>
      </div>

      {/* RL tuning budget */}
      <Slider
        id="rlBudget"
        label={t(locale, "rlBudgetLabel")}
        value={params.rlBudget}
        min={0} max={2.0} step={0.05}
        format={(v) => `${Math.round(v * 100)}%`}
        onChange={(v) => onChange("rlBudget", v)}
        explainer={t(locale, "rlBudgetExplainer")}
      />

      {/* Background agents */}
      <Slider
        id="bgAgents"
        label={t(locale, "bgAgentsLabel")}
        value={params.bgAgentsNational}
        min={500} max={10000} step={500}
        format={(v) => String(Math.round(v))}
        onChange={(v) => onChange("bgAgentsNational", v)}
        explainer={t(locale, "bgAgentsExplainer")}
      />

      {/* Overhead */}
      <Slider
        id="overhead"
        label={t(locale, "overheadLabel")}
        value={params.overheadMultiplier}
        min={2.0} max={8.0} step={0.1}
        format={(v) => `${v.toFixed(1)}×`}
        onChange={(v) => onChange("overheadMultiplier", v)}
        explainer={t(locale, "overheadExplainer")}
      />

      {/* Demand growth */}
      <Slider
        id="demandGrowth"
        label={t(locale, "demandGrowthLabel")}
        value={params.demandGrowth}
        min={0} max={0.5} step={0.01}
        format={(v) => `${Math.round(v * 100)}%/yr`}
        onChange={(v) => onChange("demandGrowth", v)}
        explainer={t(locale, "demandGrowthExplainer")}
      />

      {/* Iterations */}
      <Slider
        id="iterations"
        label={t(locale, "iterationsLabel")}
        value={params.iterations}
        min={200} max={5000} step={100}
        format={(v) => String(Math.round(v))}
        onChange={(v) => onChange("iterations", v)}
        explainer={t(locale, "iterationsExplainer")}
      />
    </div>
  );
}

function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
  explainer,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
  explainer: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={id} className="text-xs font-medium text-text-primary">{label}</label>
        <span className="text-xs font-mono font-bold text-accent-blue tabular-nums">{format(value)}</span>
      </div>
      <input id={id} name={id} aria-label={label} type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <p className="text-[10px] text-text-muted mt-1 leading-relaxed">{explainer}</p>
    </div>
  );
}
