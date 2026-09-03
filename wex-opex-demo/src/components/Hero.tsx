import { FadeIn } from "./FadeIn";
import { formatMillions, gaapProcessing, publicProgram } from "@/data/wex";

const gaapCards = [
  {
    label: "FY2025 GAAP processing",
    value: formatMillions(gaapProcessing.fy2025),
    hint: "Cost pool, full year",
  },
  {
    label: "Q2 2026 GAAP processing",
    value: formatMillions(gaapProcessing.q2_2026),
    hint: "Still ~$161M a quarter",
  },
  {
    label: "H1 2026 GAAP processing",
    value: formatMillions(gaapProcessing.h1_2026),
    hint: "Six months ended June 30",
  },
];

export function Hero() {
  return (
    <section id="thesis" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-16 md:pt-20">
        <FadeIn>
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Thesis · live screen-share
          </p>
          <h1 className="display max-w-4xl text-[42px] leading-[1.08] tracking-tight text-ink md:text-[56px]">
            WEX already named the cost program.
            <span className="text-gold-soft"> Cursor compounds it through the tech org.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-7 text-muted">
            The takeout surface is processing — {formatMillions(gaapProcessing.fy2025)} GAAP
            in FY2025, still {formatMillions(gaapProcessing.q2_2026)} in Q2 2026. Primary
            motion is engineering productivity against their{" "}
            {publicProgram.aiAutomation2026} 2026 AI/automation cost actions and{" "}
            {publicProgram.aoiMarginBps} of macro-neutral AOI margin. Secondary is ops
            software: Benefits processing, then Mobility. Corporate Payments stays grey
            for OpEx.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10 grid gap-3 md:grid-cols-3">
          {gaapCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-line bg-surface/70 px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-faint">
                {card.label}
              </p>
              <p className="tabular mt-2 text-[32px] font-semibold tracking-tight text-ink">
                {card.value}
              </p>
              <p className="mt-1 text-[13px] text-muted">{card.hint}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
