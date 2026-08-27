"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, CheckCircle2, Globe } from "lucide-react";
import { HERO_DATA, CLIENTS_DATA, type StatItem } from "@/lib/site-data";

// ── CountUp hook for Stats ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 1500) {
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

function StatItemCard({ stat, index }: { stat: StatItem; index: number }) {
  const { count, ref } = useCountUp(stat.value);
  const Icon = ICON_MAP[stat.iconName] || Calendar;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.12 + index * 0.06 }}
      className="flex flex-col items-center text-center px-4 py-5"
    >
      <div className="flex items-center gap-2 mb-2 text-sm font-bold text-primary">
        <Icon size={16} className="text-primary shrink-0" />
        <span>{stat.highlight}</span>
      </div>
      <p className="text-4xl 3xl:text-5xl font-extrabold tracking-tight text-foreground font-display leading-none">
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        {stat.label}
      </p>
    </motion.div>
  );
}

// Triple the list for an infinite smooth loop
const CLIENT_LOGOS = [
  ...CLIENTS_DATA.clients,
  ...CLIENTS_DATA.clients,
  ...CLIENTS_DATA.clients,
];

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
      className="relative flex min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-5rem)] flex-col justify-center items-center overflow-hidden bg-subtle-gradient py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-full max-w-content px-6 text-center lg:px-8 xl:px-12 2xl:px-16 my-auto">
        {/* ── Headline with Cycling Words (3-Line Structure) ────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.04 }}
          className="mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-[100rem] text-[1.85rem] sm:text-[2.25rem] md:text-[2.65rem] lg:text-[3rem] xl:text-[3.35rem] 2xl:text-[3.85rem] 3xl:text-[5.5rem] font-extrabold leading-[1.12] tracking-tight text-foreground"
        >
          <span className="block">We build digital</span>
          <span className="block">products for</span>
          <span className="block mt-1 sm:mt-1.5 text-primary">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                {HERO_DATA.headlineCycling[wordIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="ml-1.5 inline-block w-1.5 sm:w-2 3xl:w-2.5 h-[0.85em] bg-primary animate-pulse align-middle" />
          </span>
        </motion.h1>

        {/* ── Subtitle / Description ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto mt-4 sm:mt-5 lg:mt-6 3xl:mt-10 max-w-xl sm:max-w-2xl lg:max-w-3xl 3xl:max-w-5xl text-sm sm:text-base lg:text-lg 3xl:text-2xl text-muted-foreground leading-relaxed font-normal"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* ── 3840px+ (4K / 50% Zoom) Stats Dock (Displayed ONLY on 3840px+ screens) ── */}
        <div className="hero-4k-element mt-10 mx-auto w-full max-w-6xl">
          <div className="rounded-3xl border border-border bg-white shadow-dock overflow-hidden">
            <div className="grid grid-cols-4 divide-x divide-border/70">
              {HERO_DATA.stats.map((stat, index) => (
                <StatItemCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* ── 3840px+ (4K / 50% Zoom) Client Logos (Displayed ONLY on 3840px+ screens) ── */}
        <div className="hero-4k-element mt-8 w-full max-w-6xl mx-auto">
          <div className="rounded-3xl border border-border/80 bg-white/90 backdrop-blur-md py-5 px-6 shadow-xs">
            <div className="marquee-fade-x overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-16">
                {CLIENT_LOGOS.map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex items-center justify-center grayscale opacity-65 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="h-10 w-auto shrink-0 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
              {CLIENTS_DATA.eyebrow}
            </p>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
