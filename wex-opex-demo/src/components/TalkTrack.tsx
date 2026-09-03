"use client";

import { useState } from "react";
import { talkTrack, talkTrackCopy } from "@/data/wex";

export function TalkTrack() {
  const [copied, setCopied] = useState(false);

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(talkTrackCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="talk-track" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Talk track
            </p>
            <h2 className="display mt-3 text-[32px] leading-tight text-ink md:text-[36px]">
              Five beats. Stay on their numbers.
            </h2>
          </div>
          <button
            type="button"
            onClick={copyAll}
            className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-surface-hover"
          >
            {copied ? "Copied" : "Copy all"}
          </button>
        </div>

        <ol className="mt-8 space-y-3">
          {talkTrack.map((item) => (
            <li
              key={item.n}
              className="grid gap-4 rounded-2xl border border-line bg-surface px-5 py-5 md:grid-cols-[56px_1fr]"
            >
              <p className="tabular text-[22px] font-semibold text-gold">{item.n}</p>
              <div>
                <p className="text-[16px] font-medium text-ink">{item.line}</p>
                <p className="mt-2 text-[13.5px] leading-6 text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
