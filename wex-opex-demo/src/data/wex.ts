/** Public WEX figures only. Do not invent metrics in the UI. */

export const gaapProcessing = {
  fy2025: 665.2,
  q2_2026: 161.0,
  h1_2026: 325.9,
} as const;

export type PeriodKey = "h1_2026" | "fy2025";

export type SegmentId = "mobility" | "benefits" | "corpPayments";

export type SegmentRow = {
  id: SegmentId;
  label: string;
  short: string;
  processing: number;
  revenue: number;
  intensity: string;
  opexInScope: boolean;
};

export const segmentPeriods: Record<
  PeriodKey,
  { label: string; caption: string; rows: SegmentRow[] }
> = {
  h1_2026: {
    label: "H1 2026",
    caption: "Adjusted processing vs. segment revenue, six months ended June 30, 2026.",
    rows: [
      {
        id: "mobility",
        label: "Mobility",
        short: "Mobility",
        processing: 142.4,
        revenue: 767.0,
        intensity: "~18.6%",
        opexInScope: true,
      },
      {
        id: "benefits",
        label: "Benefits",
        short: "Benefits",
        processing: 129.7,
        revenue: 422.1,
        intensity: "~30.7%",
        opexInScope: true,
      },
      {
        id: "corpPayments",
        label: "Corporate Payments",
        short: "Corp Payments",
        processing: 34.6,
        revenue: 238.2,
        intensity: "~14.5%",
        opexInScope: false,
      },
    ],
  },
  fy2025: {
    label: "FY 2025",
    caption: "Adjusted processing vs. segment revenue, year ended December 31, 2025.",
    rows: [
      {
        id: "mobility",
        label: "Mobility",
        short: "Mobility",
        processing: 289.0,
        revenue: 1386.0,
        intensity: "~21%",
        opexInScope: true,
      },
      {
        id: "benefits",
        label: "Benefits",
        short: "Benefits",
        processing: 260.1,
        revenue: 797.4,
        intensity: "~33%",
        opexInScope: true,
      },
      {
        id: "corpPayments",
        label: "Corporate Payments",
        short: "Corp Payments",
        processing: 70.0,
        revenue: 477.4,
        intensity: "~15%",
        opexInScope: false,
      },
    ],
  },
};

export const benefitsPlusFeesH1 = {
  processing: 129.7,
  serviceFees: 40.3,
  combined: "~$170M",
  intensity: "~40%",
  revenue: 422.1,
} as const;

export const publicProgram = {
  aiAutomation2026: "$50M",
  aoiMarginBps: "~75bps",
  productVelocity2025: "+50%",
  claimsFrom: "2 days",
  claimsTo: "~2 min",
} as const;

export const talkTrack = [
  {
    n: "01",
    title: "Processing fat pool",
    line: "Processing fat pool — $665M FY25, ~$161M/qtr H1’26",
    detail:
      "GAAP processing is $665.2M in FY2025, $161.0M in Q2 2026, and $325.9M in H1 2026. That is the cost pool, not a modeled Cursor savings number.",
  },
  {
    n: "02",
    title: "Benefits intensity",
    line: "Benefits intensity ~31% (~40% w/ service fees)",
    detail:
      "H1 2026 adjusted processing is $129.7M / $422.1M (~30.7%). Add $40.3M of Benefits service fees and the stack is ~$170M / ~40% of Benefits revenue. FY2025 was $260.1M / $797.4M (~33%).",
  },
  {
    n: "03",
    title: "Their public targets",
    line: "Their $50M AI/automation + 75bps — Cursor compounds via tech org",
    detail:
      "Anchor to WEX’s own 2026 AI/automation cost actions ($50M) and ~75bps of macro-neutral AOI margin. Cursor compounds those targets through the technology organization.",
  },
  {
    n: "04",
    title: "Sequence",
    line: "Eng first; Benefits processing then Mobility second",
    detail:
      "Most Cursor-addressable work is engineering productivity first. Secondary is ops software against Benefits processing, then Mobility. Grey Corporate Payments for OpEx.",
  },
  {
    n: "05",
    title: "Extend the claims win",
    line: "Extend claims win from tip of iceberg across cost stack",
    detail:
      "Benefits claims AI (2 days → ~2 min) is the proof point, not the ceiling. Use it to walk the rest of the processing and service-fee stack.",
  },
] as const;

export const talkTrackCopy = talkTrack.map((item, i) => `${i + 1}. ${item.line}`).join("\n");

export const objections = [
  {
    id: "copilot",
    objection: "We already have Copilot.",
    response:
      "Assistive is not agentic. Copilot helps a developer write a function. Cursor runs across the repo, the ticket, the PR, and the agent loop. WEX’s $50M 2026 AI/automation cost actions, ~75bps of macro-neutral AOI margin, and +50% product velocity in 2025 are org-level outcomes. Those compound through an agentic software factory, not another autocomplete seat.",
  },
  {
    id: "claims",
    objection: "Claims AI is already done.",
    response:
      "2 days → ~2 min is the tip of the iceberg. Benefits adjusted processing is still $129.7M in H1 2026 and $260.1M in FY2025 — ~30.7% / ~33% of segment revenue, or ~40% of Benefits revenue once H1 service fees ($40.3M) are included. The claims win proves the pattern. The cost stack is still open.",
  },
  {
    id: "roi",
    objection: "Show ROI first.",
    response:
      "Do not invent a Cursor ROI model. Anchor to their public targets: $50M of 2026 AI/automation cost actions and ~75bps of macro-neutral AOI margin, against a $665.2M FY2025 GAAP processing pool that is still $161.0M a quarter in Q2 2026. Start from numbers they already filed.",
  },
  {
    id: "regulated",
    objection: "We are regulated.",
    response:
      "Agreed — Benefits and payments are regulated businesses. That is an offer-review conversation, not a dead end. Lead with enterprise controls: SSO, auditability, admin policy, and deployment options the security and compliance teams can review. Cursor is a controlled software factory, not a shadow-IT chatbot.",
  },
  {
    id: "cp",
    objection: "Corporate Payments is the growth engine.",
    response:
      "Growth is not OpEx takeout. Corporate Payments is greyed for this conversation. H1 2026 adj. processing there is $34.6M / $238.2M (~14.5%); FY2025 was $70.0M / $477.4M (~15%). The fat pool and the intensity sit in Mobility dollars and Benefits rate. Do not let a growth narrative relocate the cost discussion.",
  },
] as const;

export const sources = [
  {
    label: "WEX Inc. Reports Fourth Quarter and Full Year 2025 Financial Results",
    href: "https://ir.wexinc.com/news/news-details/2026/WEX-Inc--Reports-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx",
    note: "FY2025 earnings release — GAAP processing $665.2M",
  },
  {
    label: "WEX Inc. Reports Second Quarter 2026 Financial Results",
    href: "https://ir.wexinc.com/news/news-details/2026/WEX-Inc--Reports-Second-Quarter-2026-Financial-Results/default.aspx",
    note: "Q2 / H1 2026 earnings — GAAP processing $161.0M / $325.9M",
  },
  {
    label: "WEX Inc. Form 10-Q for the quarter ended June 30, 2026",
    href: "https://www.sec.gov/Archives/edgar/data/1309108/000130910826000029/wex-20260630.htm",
    note: "Q2 / H1 2026 10-Q",
  },
] as const;

export function formatMillions(n: number): string {
  return `$${n.toLocaleString("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}M`;
}
