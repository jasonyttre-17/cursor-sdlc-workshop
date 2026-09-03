# WEX OpEx Takeout Demo

Internal, deal-prep one-pager for **Jason (VP Global Strategics, Cursor / Anysphere)** to screen-share in WEX OpEx takeout conversations.

Desktop-first. Dark theme. No login. Every dollar figure on the page is a WEX public number — nothing modeled, nothing invented.

## What’s on the page

- **Hero thesis** — processing is the takeout surface; Cursor compounds WEX’s own AI/automation program through the tech org
- **Three lenses** — largest $ (processing) / highest intensity (Benefits) / most Cursor-addressable (eng first, Benefits ops second)
- **Segment chart** — H1 2026 / FY2025 toggle; Corporate Payments greyed for OpEx
- **Kill chain** — primary engineering path, secondary Benefits → Mobility, CP out of scope
- **Five-beat talk track** with copy-all
- **Objection accordion** — Copilot, claims, ROI, regulated, CP growth
- **Footer** — FY2025 earnings release + Q2 / H1 2026 10-Q / earnings · Internal — deal prep

## Run locally

From this folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a live screen-share, prefer the production server so the page is static and quiet:

```bash
npm run build
npm start
```

## Production build

```bash
npm install
npm run build
npm start
```

`npm run build` must succeed from `wex-opex-demo/`.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Figures (source of truth)

GAAP processing: FY2025 **$665.2M** · Q2 2026 **$161.0M** · H1 2026 **$325.9M**

H1 2026 adj. processing: Mobility $142.4M / $767.0M (~18.6%) · Benefits $129.7M / $422.1M (~30.7%) · Corp Payments $34.6M / $238.2M (~14.5%). Benefits + service fees $40.3M → ~$170M / ~40% of Benefits revenue.

FY2025 adj. processing: Mobility $289.0M / $1,386.0M (~21%) · Benefits $260.1M / $797.4M (~33%) · Corp Payments $70.0M / $477.4M (~15%).

Sources are linked in the footer (WEX IR earnings releases and the Q2 2026 Form 10-Q).
