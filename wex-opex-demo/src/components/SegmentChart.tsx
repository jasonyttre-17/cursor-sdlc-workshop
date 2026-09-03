"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  benefitsPlusFeesH1,
  formatMillions,
  segmentPeriods,
  type PeriodKey,
  type SegmentId,
} from "@/data/wex";

const barColor: Record<SegmentId, string> = {
  mobility: "bg-mobility",
  benefits: "bg-gold",
  corpPayments: "bg-cp",
};

export function SegmentChart() {
  const [period, setPeriod] = useState<PeriodKey>("h1_2026");
  const reduce = useReducedMotion();
  const data = segmentPeriods[period];
  const maxRevenue = Math.max(...data.rows.map((row) => row.revenue));

  return (
    <section id="segments" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Segment processing
            </p>
            <h2 className="display mt-3 text-[32px] leading-tight text-ink md:text-[36px]">
              Adjusted processing inside each segment.
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-6 text-muted">
              Track length is segment revenue. Fill is adjusted processing. Benefits
              is the intensity call. Corporate Payments is greyed for OpEx.
            </p>
          </div>
          <div
            className="inline-flex rounded-full border border-line bg-surface p-1"
            role="tablist"
            aria-label="Reporting period"
          >
            {(
              [
                ["h1_2026", "H1 2026"],
                ["fy2025", "FY 2025"],
              ] as const
            ).map(([key, label]) => {
              const active = period === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setPeriod(key)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-ink text-bg"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 space-y-5">
          {data.rows.map((row) => {
            const trackPct = (row.revenue / maxRevenue) * 100;
            const fillPct = (row.processing / row.revenue) * 100;
            const muted = !row.opexInScope;

            return (
              <div
                key={row.id}
                className={`rounded-2xl border px-5 py-5 ${
                  muted
                    ? "border-line/70 bg-bg-elevated/50 opacity-70"
                    : "border-line bg-surface"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-medium text-ink">{row.label}</h3>
                    {muted ? (
                      <span className="rounded-full border border-line px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-faint">
                        Grey for OpEx
                      </span>
                    ) : row.id === "benefits" ? (
                      <span className="rounded-full border border-gold/25 bg-gold/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-gold">
                        Highest intensity
                      </span>
                    ) : (
                      <span className="rounded-full border border-mobility/25 bg-mobility/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-mobility">
                        Largest processing $
                      </span>
                    )}
                  </div>
                  <p className="tabular text-[13px] text-muted">
                    {formatMillions(row.processing)}
                    <span className="text-faint"> / </span>
                    {formatMillions(row.revenue)}
                    <span className="ml-2 text-ink">{row.intensity}</span>
                  </p>
                </div>
                <div className="mt-3 h-8 w-full">
                  <div
                    className="h-full rounded-lg bg-white/[0.04]"
                    style={{ width: `${trackPct}%` }}
                  >
                    <motion.div
                      className={`h-full rounded-lg ${barColor[row.id]} ${
                        muted ? "opacity-50" : ""
                      }`}
                      initial={false}
                      animate={{ width: `${fillPct}%` }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-[13px] leading-6 text-muted">{data.caption}</p>

        {period === "h1_2026" ? (
          <div className="mt-4 rounded-xl border border-gold/20 bg-gold/8 px-5 py-4 text-[13.5px] leading-6 text-gold-soft">
            Benefits + service fees: {formatMillions(benefitsPlusFeesH1.processing)} processing
            + {formatMillions(benefitsPlusFeesH1.serviceFees)} service fees →{" "}
            {benefitsPlusFeesH1.combined} / {benefitsPlusFeesH1.intensity} of Benefits
            revenue ({formatMillions(benefitsPlusFeesH1.revenue)}).
          </div>
        ) : null}
      </div>
    </section>
  );
}
