"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Calendar, Users, CheckCircle2, Globe } from "lucide-react";
import { HERO_DATA, type StatItem } from "@/lib/site-data";

// ── Mobile-only CountUp hook ──────────────────────────────────────────────────
function useMobileCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const ICON_MAP = { Calendar, Users, CheckCircle2, Globe };

function MobileStatItem({ stat, index }: { stat: StatItem; index: number }) {
  const { count, ref } = useMobileCountUp(stat.value);
  const Icon = ICON_MAP[stat.iconName] || Calendar;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.28 + index * 0.07 }}
      className="flex flex-col items-center text-center px-3 py-4"
    >
      <div className="flex items-center gap-1 mb-1 text-[10px] font-semibold text-primary">
        <Icon size={11} className="text-primary" />
        <span>{stat.highlight}</span>
      </div>
      <p className="text-xl font-extrabold tracking-tight text-foreground leading-none">
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="mt-1 text-[11px] font-medium text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}

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

        {/* ── Mobile-only Stats Grid (hidden on sm+) ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-8 sm:hidden"
        >
          <div className="mx-auto max-w-xs rounded-2xl border border-border bg-white shadow-dock overflow-hidden">
            <div className="grid grid-cols-2 divide-y divide-border/70">
              {HERO_DATA.stats.map((stat, index) => (
                <MobileStatItem key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

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
