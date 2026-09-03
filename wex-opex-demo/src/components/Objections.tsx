"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { objections } from "@/data/wex";

export function Objections() {
  const [open, setOpen] = useState<string | null>("copilot");
  const reduce = useReducedMotion();

  return (
    <section id="objections" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
          Objections
        </p>
        <h2 className="display mt-3 max-w-2xl text-[32px] leading-tight text-ink md:text-[36px]">
          Deal-ready answers. Do not leave the public numbers.
        </h2>

        <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-surface">
          {objections.map((item) => {
            const isOpen = open === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="flex w-full items-start justify-between gap-6 px-5 py-4 text-left hover:bg-surface-hover"
                >
                  <span className="text-[15px] font-medium text-ink">{item.objection}</span>
                  <span className="tabular mt-0.5 text-[12px] text-faint">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="body"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[14px] leading-6 text-muted">
                        {item.response}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
