"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { HERO_DATA, type StatItem } from "@/lib/site-data";

// ─── CountUp hook for Stats ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 1600) {
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const ICON_MAP = {
  Calendar,
  Users,
  CheckCircle2,
  Globe,
};

function StatDockItem({
  stat,
  index,
}: {
  stat: StatItem;
  index: number;
}) {
  const { count, ref } = useCountUp(stat.value);
  const Icon = ICON_MAP[stat.iconName] || Calendar;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
      className="flex flex-col items-center text-center px-4 py-5 sm:py-6"
    >
      <div className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-primary">
        <Icon size={14} className="text-primary" />
        <span>{stat.highlight}</span>
      </div>
      <p className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl leading-none">
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="mt-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsDock() {
  return (
    <section aria-label="Key performance metrics" className="hidden sm:block py-6 sm:py-8 bg-transparent">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-5xl rounded-2xl border border-border bg-white shadow-dock overflow-hidden"
        >
          <div className="grid grid-cols-2 divide-y divide-border/70 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
            {HERO_DATA.stats.map((stat, index) => (
              <StatDockItem key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
