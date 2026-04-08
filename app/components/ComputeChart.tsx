"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { Locale } from "@/lib/i18n";
import { formatNumber, type SectorToggles, type Year } from "@/lib/data";

interface ChartData {
  year: Year;
  publicCore: number;
  healthcare: number;
  defense: number;
  privateSector: number;
  total: number;
  energyMW: number;
}

const SECTOR_COLORS = {
  publicCore: "#006AA7",
  healthcare: "#34D399",
  defense: "#64748B",
  privateSector: "#FBBF24",
};

const SECTOR_LABELS_SV: Record<string, string> = {
  publicCore: "Offentlig sektor",
  healthcare: "Sjukvård",
  defense: "Försvar",
  privateSector: "Privat sektor",
};

const SECTOR_LABELS_EN: Record<string, string> = {
  publicCore: "Public sector",
  healthcare: "Healthcare",
  defense: "Defense",
  privateSector: "Private sector",
};

export default function ComputeChart({
  data,
  sectors,
  selectedYear,
  locale,
}: {
  data: ChartData[];
  sectors: SectorToggles;
  selectedYear: Year;
  locale: Locale;
}) {
  const labels = locale === "sv" ? SECTOR_LABELS_SV : SECTOR_LABELS_EN;

  // Stack order: bottom to top
  const activeSectors = (
    ["publicCore", "healthcare", "defense", "privateSector"] as const
  ).filter((k) => sectors[k]);

  return (
    <div className="w-full h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            {activeSectors.map((key) => (
              <linearGradient
                key={key}
                id={`grad-${key}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={SECTOR_COLORS[key]}
                  stopOpacity={0.6}
                />
                <stop
                  offset="100%"
                  stopColor={SECTOR_COLORS[key]}
                  stopOpacity={0.1}
                />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1A2635"
            vertical={false}
          />
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
            tickFormatter={(v: number) =>
              v >= 1000 ? `${Math.round(v / 1000)}k` : String(v)
            }
            width={45}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0F1923",
              border: "1px solid #1A2635",
              borderRadius: "8px",
              fontSize: "12px",
              fontFamily: "monospace",
            }}
            labelStyle={{ color: "#F0F4F8", fontWeight: "bold" }}
            itemStyle={{ color: "#8899AA" }}
            formatter={(value: unknown, name: unknown) => [
              formatNumber(Number(value)),
              labels[String(name)] || String(name),
            ]}
            labelFormatter={(label: unknown) => String(label)}
          />
          <ReferenceLine
            x={selectedYear}
            stroke="#FECC02"
            strokeWidth={2}
            strokeDasharray="4 4"
          />
          {activeSectors.map((key) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stackId="1"
              stroke={SECTOR_COLORS[key]}
              fill={`url(#grad-${key})`}
              strokeWidth={2}
              animationDuration={500}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
