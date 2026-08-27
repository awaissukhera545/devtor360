"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Code2,
  Users2,
} from "lucide-react";
import { WHY_US_DATA } from "@/lib/site-data";

const PILLAR_ICONS = [Zap, Users2, Code2, ShieldCheck];

export default function WhyChooseUs() {
  const { eyebrow, headline, description, qualityBadge, pillars, methodology } = WHY_US_DATA;

  return (
    <section id="why-us" aria-label="Why choose Devtor360" className="py-8 sm:py-12 lg:py-14 bg-slate-50/60 border-t border-border/70">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* ── Eyebrow & Headline ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              {eyebrow}
            </span>
          </div>

          <h2 className="mt-2 text-[1.75rem] font-extrabold leading-tight text-foreground sm:text-[2.25rem] lg:text-[2.65rem]">
            {headline}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>

        {/* ── 4 Core Value Pillars ─────────────────────────────────────── */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:mt-7 sm:gap-5">
          {pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i % PILLAR_ICONS.length];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} className="stroke-[2.2]" />
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-border/50 flex items-center gap-1.5 text-xs font-bold text-primary">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>{qualityBadge}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── 4-Phase Agile Process ────────────────────────────────────── */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-border">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {methodology.eyebrow}
            </span>
            <h3 className="mt-1.5 text-xl font-bold text-foreground sm:text-2xl">
              {methodology.headline}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {methodology.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {methodology.process.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-extrabold text-primary font-display">
                      {step.step}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-700">
                      {step.timeline}
                    </span>
                  </div>

                  <h4 className="mt-2.5 text-base font-bold text-foreground">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>{methodology.deliverableLabel}</span>
                  <span className="text-emerald-600 font-bold">{methodology.verifiedLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
