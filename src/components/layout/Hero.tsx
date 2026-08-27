"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { HERO_DATA } from "@/lib/site-data";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % HERO_DATA.headlineCycling.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col justify-center overflow-hidden py-8 sm:py-10 lg:py-12 bg-subtle-gradient"
    >
      <div className="mx-auto max-w-content px-6 text-center lg:px-8">
       

        {/* ── Clean Headline with Cycling Audience Phrase ─────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto max-w-4xl text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[3.5rem] lg:text-[4.25rem]"
        >
          <span>{HERO_DATA.headlinePrefix}</span>
          <span className="block mt-1 sm:mt-2 text-primary">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {HERO_DATA.headlineCycling[wordIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="ml-1.5 inline-block w-0.75 h-[0.85em] bg-primary animate-pulse align-middle" />
          </span>
        </motion.h1>

        {/* ── Subtitle / Description ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* ── CTA Action Buttons ──────────────────────────────────────── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href={HERO_DATA.ctaPrimary.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-brand hover:bg-brand-600 transition-all sm:w-auto"
          >
            <span>{HERO_DATA.ctaPrimary.label}</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href={HERO_DATA.ctaSecondary.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xs hover:border-primary hover:text-primary transition-all sm:w-auto"
          >
            <span>{HERO_DATA.ctaSecondary.label}</span>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
