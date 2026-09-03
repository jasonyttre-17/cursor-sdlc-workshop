const links = [
  { href: "#lenses", label: "Lenses" },
  { href: "#segments", label: "Segments" },
  { href: "#kill-chain", label: "Kill chain" },
  { href: "#talk-track", label: "Talk track" },
  { href: "#objections", label: "Objections" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-3.5">
        <a href="#thesis" className="flex items-center gap-3 min-w-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-[11px] font-semibold tracking-[0.14em] text-gold">
            W
          </span>
          <span className="truncate text-[13px] font-medium tracking-wide text-ink">
            WEX <span className="text-faint">×</span> Cursor
            <span className="ml-2 hidden text-muted sm:inline">OpEx takeout</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-[12px] text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <span className="shrink-0 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-gold-soft">
          Internal — deal prep
        </span>
      </div>
      <div className="hairline h-px w-full" />
    </header>
  );
}
