import { sources } from "@/data/wex";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Internal — deal prep
            </p>
            <p className="mt-2 max-w-md text-[13.5px] leading-6 text-muted">
              Built for Jason, VP Global Strategics, Cursor / Anysphere. Screen-share
              only. Figures are WEX public filings — no modeled savings, no invented
              metrics.
            </p>
          </div>
          <div className="max-w-lg">
            <p className="text-[11px] uppercase tracking-[0.16em] text-faint">Sources</p>
            <ul className="mt-3 space-y-2">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] leading-5 text-ink underline decoration-line-strong underline-offset-4 hover:text-gold-soft"
                  >
                    {source.label}
                  </a>
                  <p className="text-[12px] text-faint">{source.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
