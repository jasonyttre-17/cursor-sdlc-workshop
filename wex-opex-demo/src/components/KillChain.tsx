import { FadeIn } from "./FadeIn";
import { publicProgram } from "@/data/wex";

const primary = [
  {
    title: "Eng productivity",
    body: `Primary motion. Cursor vs. their ${publicProgram.aiAutomation2026} 2026 AI/automation cost actions and ${publicProgram.aoiMarginBps} macro-neutral AOI margin.`,
  },
  {
    title: "Benefits claims AI",
    body: `${publicProgram.claimsFrom} → ${publicProgram.claimsTo}. Proof that ops AI works — and the tip of the iceberg, not the whole stack.`,
  },
  {
    title: "Product velocity",
    body: `${publicProgram.productVelocity2025} in 2025. Use their own speed-up as the compounding argument for an agentic engineering system.`,
  },
];

const secondary = [
  {
    title: "Ops software",
    body: "After the tech org: software that attacks processing cost, not another Copilot seat.",
  },
  {
    title: "Benefits processing",
    body: "Highest intensity. Walk from claims into the rest of the Benefits processing and service-fee stack.",
  },
  {
    title: "Then Mobility",
    body: "Largest processing dollars. Second in the ops sequence, after Benefits.",
  },
];

export function KillChain() {
  return (
    <section id="kill-chain" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Kill chain
          </p>
          <h2 className="display mt-3 max-w-2xl text-[32px] leading-tight text-ink md:text-[36px]">
            Primary through engineering. Secondary through Benefits, then Mobility.
          </h2>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-8">
          <div className="rounded-2xl border border-cyan/20 bg-cyan/[0.04] p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan">
              Primary · technology organization
            </p>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {primary.map((node, i) => (
                <div key={node.title} className="relative">
                  <div className="rounded-xl border border-line bg-bg-elevated p-5">
                    <p className="tabular text-[11px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-[16px] font-medium text-ink">{node.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-6 text-muted">{node.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-4">
          <div className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Secondary · ops software
            </p>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
              {secondary.map((node, i) => (
                <div key={node.title} className="contents">
                  <div className="rounded-xl border border-line bg-bg-elevated p-5">
                    <p className="tabular text-[11px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-[16px] font-medium text-ink">{node.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-6 text-muted">{node.body}</p>
                  </div>
                  {i < secondary.length - 1 ? (
                    <div
                      aria-hidden
                      className="hidden items-center justify-center text-gold/70 lg:flex"
                    >
                      →
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-4">
          <div className="rounded-2xl border border-dashed border-line bg-white/[0.02] px-6 py-5 opacity-70">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
              Out of scope for OpEx
            </p>
            <h3 className="mt-2 text-[16px] font-medium text-muted">
              Corporate Payments — greyed
            </h3>
            <p className="mt-2 max-w-3xl text-[13.5px] leading-6 text-faint">
              Growth narrative is real. It is not the takeout conversation. Leave CP
              on the board as a growth engine and keep OpEx on Mobility dollars and
              Benefits intensity.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
