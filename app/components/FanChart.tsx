"use client";

import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { formatNumber, type Year } from "@/lib/data";
import type { PercentileTimeline } from "@/lib/simulation";

// Reference lines: repo base scenario and Metod C budget ceiling
const repoBase: Record<Year, number> = {
  2026: 900, 2027: 2200, 2028: 4500, 2029: 9000, 2030: 13000, 2031: 18000,
};
const metodC: Record<Year, number> = {
  2026: 350, 2027: 700, 2028: 1200, 2029: 1750, 2030: 2200, 2031: 3250,
};

interface FanData {
  year: number;
  p10: number;
  band_lo: number; // p25 - p10
  band_mid_lo: number; // p50 - p25
  band_mid_hi: number; // p75 - p50
  band_hi: number; // p90 - p75
  median: number;
  repoBase: number;
  metodC: number;
}

export default function FanChart({
  data,
  selectedYear,
}: {
  data: PercentileTimeline;
  selectedYear: Year;
}) {
  const chartData: FanData[] = data.map((d) => ({
    year: d.year,
    p10: d.p10,
    band_lo: d.p25 - d.p10,
    band_mid_lo: d.p50 - d.p25,
    band_mid_hi: d.p75 - d.p50,
    band_hi: d.p90 - d.p75,
    median: d.p50,
    repoBase: repoBase[d.year],
    metodC: metodC[d.year],
  }));

  return (
    <div className="w-full h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="fanOuter" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FECC02" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#FECC02" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="fanInner" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FECC02" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#FECC02" stopOpacity={0.12} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1A2635" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fill: "#8899AA", fontSize: 12, fontFamily: "monospace" }}
            axisLine={{ stroke: "#1A2635" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#8899AA", fontSize: 11, fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => v >= 1000 ? `${Math.round(v / 1000)}k` : String(v)}
            width={45}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0F1923",
              border: "1px solid #1A2635",
              borderRadius: "8px",
              fontSize: "11px",
              fontFamily: "monospace",
            }}
            labelStyle={{ color: "#F0F4F8", fontWeight: "bold" }}
            formatter={(value: unknown, name: unknown) => {
              const n = String(name);
              if (n === "median") return [formatNumber(Number(value)), "Median (p50)"];
              if (n === "repoBase") return [formatNumber(Number(value)), "Repo bas"];
              if (n === "metodC") return [formatNumber(Number(value)), "IT-budget"];
              return [null, null];
            }}
            labelFormatter={(label: unknown) => String(label)}
          />
          <ReferenceLine x={selectedYear} stroke="#FECC02" strokeWidth={2} strokeDasharray="4 4" />

          {/* Fan bands — stacked from p10 baseline */}
          <Area type="monotone" dataKey="p10" stackId="fan" fill="transparent" stroke="none" />
          <Area type="monotone" dataKey="band_lo" stackId="fan" fill="url(#fanOuter)" stroke="none" />
          <Area type="monotone" dataKey="band_mid_lo" stackId="fan" fill="url(#fanInner)" stroke="none" />
          <Area type="monotone" dataKey="band_mid_hi" stackId="fan" fill="url(#fanInner)" stroke="none" />
          <Area type="monotone" dataKey="band_hi" stackId="fan" fill="url(#fanOuter)" stroke="none" />

          {/* Median line */}
          <Line type="monotone" dataKey="median" stroke="#FECC02" strokeWidth={2.5} dot={false} />

          {/* Reference lines */}
          <Line type="monotone" dataKey="repoBase" stroke="#006AA7" strokeWidth={1.5} strokeDasharray="6 3" dot={false} />
          <Line type="monotone" dataKey="metodC" stroke="#FF3B3B" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
