"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { FAQS_DATA } from "@/lib/site-data";

export default function FAQs() {
  const { eyebrow, headline, description, faqs, helpBox } = FAQS_DATA;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" aria-label="Frequently asked questions" className="bg-[#f8fafc] border-t border-border/60 py-10 sm:py-14">
      <div className="mx-auto max-w-content px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-center">
          <span className="text-xs sm:text-sm 2xl:text-base font-bold tracking-wider text-primary uppercase">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-2 text-center text-[1.5rem] font-bold leading-tight text-foreground sm:text-[1.875rem] lg:text-[2.15rem] xl:text-[2.65rem] 2xl:text-[3rem]">
          {headline}
        </h2>

        {/* ── FAQ Accordion ─────────────────────────────────────────── */}
        <div className="mx-auto mt-6 2xl:mt-10 max-w-3xl 2xl:max-w-4xl divide-y divide-border border-t border-border sm:mt-7">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question} className="py-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-3 sm:py-3.5 2xl:py-5 text-left"
                >
                  <div className="flex items-center gap-3 2xl:gap-4">
                    <span className="flex h-6 w-6 2xl:h-8 2xl:w-8 shrink-0 items-center justify-center rounded-md 2xl:rounded-lg bg-primary/10 text-xs 2xl:text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm sm:text-base 2xl:text-xl font-bold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-muted-foreground"
                  >
                    <ChevronDown size={18} className="2xl:w-6 2xl:h-6" />
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
                      <p className="pb-3.5 2xl:pb-5 pl-9 sm:pl-10 2xl:pl-12 text-xs sm:text-sm 2xl:text-base leading-relaxed text-muted-foreground">
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
        <div className="mx-auto mt-6 2xl:mt-10 max-w-2xl 2xl:max-w-3xl rounded-2xl 2xl:rounded-3xl border border-border/80 bg-muted/40 p-4 sm:p-5 2xl:p-8 text-center">
          <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-foreground">
            {helpBox.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm 2xl:text-base text-muted-foreground">
            {helpBox.description}
          </p>
          <div className="mt-3.5 2xl:mt-5">
            <Link
              href={helpBox.ctaHref}
              className="inline-flex items-center gap-1.5 rounded-xl 2xl:rounded-2xl bg-primary px-5 py-2.5 2xl:px-7 2xl:py-3.5 text-xs sm:text-sm 2xl:text-base font-semibold text-primary-foreground shadow-brand transition-all hover:bg-brand-600"
            >
              <span>{helpBox.ctaText}</span>
              <ArrowUpRight size={15} className="2xl:w-5 2xl:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
