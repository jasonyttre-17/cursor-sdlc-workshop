import { FadeIn } from "./FadeIn";
import {
  benefitsPlusFeesH1,
  formatMillions,
  gaapProcessing,
  publicProgram,
  segmentPeriods,
} from "@/data/wex";

const fy = segmentPeriods.fy2025.rows;
const h1 = segmentPeriods.h1_2026.rows;
const fyMobility = fy.find((r) => r.id === "mobility")!;
const fyBenefits = fy.find((r) => r.id === "benefits")!;
const h1Mobility = h1.find((r) => r.id === "mobility")!;
const h1Benefits = h1.find((r) => r.id === "benefits")!;

const lenses = [
  {
    kicker: "Largest $",
    title: "Processing",
    accent: "mobility" as const,
    body: `GAAP processing is the fat pool: ${formatMillions(gaapProcessing.fy2025)} in FY2025, ${formatMillions(gaapProcessing.h1_2026)} in H1 2026. Inside adjusted figures, Mobility is the biggest dollar — ${formatMillions(fyMobility.processing)} / ${formatMillions(fyMobility.revenue)} FY25, ${formatMillions(h1Mobility.processing)} / ${formatMillions(h1Mobility.revenue)} H1’26.`,
    meta: "Dollar lens · Mobility leads",
  },
  {
    kicker: "Highest intensity",
    title: "Benefits",
    accent: "benefits" as const,
    body: `Benefits is the rate story: ${fyBenefits.intensity} of segment revenue in FY2025 (${formatMillions(fyBenefits.processing)} / ${formatMillions(fyBenefits.revenue)}), ${h1Benefits.intensity} in H1 2026. Add ${formatMillions(benefitsPlusFeesH1.serviceFees)} of H1 service fees and the stack is ${benefitsPlusFeesH1.combined} / ${benefitsPlusFeesH1.intensity} of Benefits revenue.`,
    meta: "Intensity lens · ~31% → ~40% w/ fees",
  },
  {
    kicker: "Most Cursor-addressable",
    title: "Eng first, Benefits ops second",
    accent: "cyan" as const,
    body: `Start in the technology organization — productivity against ${publicProgram.aiAutomation2026} of 2026 AI/automation, ${publicProgram.aoiMarginBps} AOI, and ${publicProgram.productVelocity2025} product velocity in 2025. Then Benefits operations (claims ${publicProgram.claimsFrom} → ${publicProgram.claimsTo} is the tip of the iceberg). Mobility processing follows. Grey Corporate Payments for OpEx.`,
    meta: "Addressability lens · sequence, not spray",
  },
];

const accentClass = {
  mobility: "text-mobility border-mobility/25 bg-mobility/10",
  benefits: "text-gold border-gold/25 bg-gold/10",
  cyan: "text-cyan border-cyan/25 bg-cyan/10",
};

export function LensGrid() {
  return (
    <section id="lenses" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Three lenses
          </p>
          <h2 className="display mt-3 max-w-2xl text-[32px] leading-tight text-ink md:text-[36px]">
            Same public numbers. Three ways to choose where Cursor lands first.
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {lenses.map((lens, i) => (
            <FadeIn key={lens.title} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <span
                  className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${accentClass[lens.accent]}`}
                >
                  {lens.kicker}
                </span>
                <h3 className="display mt-4 text-[26px] leading-snug text-ink">
                  {lens.title}
                </h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-6 text-muted">{lens.body}</p>
                <p className="mt-5 border-t border-line pt-4 text-[12px] text-faint">
                  {lens.meta}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
