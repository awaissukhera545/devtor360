"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { FAQS_DATA } from "@/lib/site-data";

export default function FAQs() {
  const { eyebrow, headline, description, faqs, helpBox } = FAQS_DATA;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" aria-label="Frequently asked questions" className="py-8 sm:py-12 lg:py-14 border-t border-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs font-bold tracking-wider text-primary uppercase">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-2 text-center text-[1.5rem] font-bold leading-tight text-foreground sm:text-[1.875rem] lg:text-[2.15rem]">
          {headline}
        </h2>
        <p className="mx-auto mt-1.5 max-w-xl text-center text-xs sm:text-sm text-muted-foreground">
          {description}
        </p>

        {/* ── FAQ Accordion ─────────────────────────────────────────── */}
        <div className="mx-auto mt-6 max-w-3xl divide-y divide-border border-t border-border sm:mt-7">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question} className="py-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left sm:py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-bold text-foreground sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-muted-foreground"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-3.5 pl-9 text-xs leading-relaxed text-muted-foreground sm:pl-10 sm:text-sm">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── Help Box ──────────────────────────────────────────────── */}
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border/80 bg-muted/40 p-4 text-center sm:p-5">
          <h3 className="text-base font-bold text-foreground">
            {helpBox.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {helpBox.description}
          </p>
          <div className="mt-3.5">
            <a
              href={helpBox.ctaHref}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-brand transition-all hover:bg-brand-600 sm:text-sm"
            >
              <span>{helpBox.ctaText}</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
