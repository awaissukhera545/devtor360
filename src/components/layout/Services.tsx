"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Smartphone,
  ShieldCheck,
  Rocket,
  Palette,
  Cloud,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES_SECTION_DATA } from "@/lib/site-data";

const ICON_MAP: Record<string, React.ElementType> = {
  "web-platforms": Code2,
  "cyber-security": ShieldCheck,
  "ai-systems": Cpu,
  "mobile-apps": Smartphone,
  "cloud-devops": Cloud,
  "rapid-mvp": Rocket,
  "ui-ux-design": Palette,
};

export default function Services() {
  const { services, eyebrow, ctaButtonPrefix, ctaHref } = SERVICES_SECTION_DATA;
  const [selectedId, setSelectedId] = useState<string>(services[0]?.id || "web-platforms");

  const activeService =
    services.find((s) => s.id === selectedId) || services[0];

  return (
    <section id="services" aria-label="Services and capabilities" className="bg-[#f8fafc] py-10 sm:py-14">
      <div className="mx-auto max-w-content px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* ── Services Header & Tabs ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/80 pb-4 sm:pb-5 2xl:pb-6">
          <div className="flex items-center shrink-0">
            <span className="text-xs sm:text-sm 2xl:text-base font-bold tracking-wider text-primary uppercase">
              {eyebrow}
            </span>
          </div>

          {/* ── Service Tabs Navigation (Two Rows, Three Columns) ──────── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 2xl:gap-3">
            {services.map((item) => {
              const isSelected = item.id === selectedId;
              const Icon = ICON_MAP[item.id] || Code2;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-brand"
                      : "border border-border bg-white text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  <Icon size={14} className="shrink-0" />
                  <span className="whitespace-nowrap">{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Dynamic Featured Service Card ───────────────────────────── */}
        <div className="mt-5 sm:mt-6 2xl:mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl 2xl:rounded-3xl border border-border bg-slate-50/70 p-5 sm:p-7 lg:p-8 2xl:p-12 shadow-sm"
            >
              <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] 2xl:grid-cols-[1.3fr_1fr] lg:gap-8 2xl:gap-12 lg:items-stretch">
                {/* Left Column: Overview & Deliverables */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 2xl:px-3.5 2xl:py-1 text-xs 2xl:text-sm font-bold text-primary">
                        {activeService.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl lg:text-[1.75rem] leading-tight">
                      {activeService.title}
                    </h3>

                    {/* Deliverables Checklist */}
                    <div className="mt-4 2xl:mt-6 space-y-2 pt-3.5 2xl:pt-5 border-t border-border/80">
                      {activeService.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm 2xl:text-base text-foreground/85">
                          <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5 2xl:w-5 2xl:h-5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 2xl:mt-8 flex flex-wrap items-center gap-1.5 2xl:gap-2.5 pt-3 2xl:pt-5 border-t border-border/80">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-white px-2.5 py-0.5 2xl:px-3.5 2xl:py-1 text-xs 2xl:text-sm font-semibold text-foreground shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Features & Outcome Metrics */}
                <div className="flex flex-col justify-between h-full rounded-2xl 2xl:rounded-3xl border border-border bg-white p-4 sm:p-5 2xl:p-8 shadow-xs">
                  <div>
                    <ul className="space-y-2 2xl:space-y-3 text-xs sm:text-sm 2xl:text-base text-muted-foreground">
                      {activeService.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                          <span className="h-1.5 w-1.5 2xl:h-2 2xl:w-2 rounded-full bg-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 2xl:mt-8 space-y-3 2xl:space-y-4 pt-3 2xl:pt-5 border-t border-border">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 2xl:gap-3">
                      {activeService.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg 2xl:rounded-xl border border-border bg-slate-50 p-2 2xl:p-3.5 text-center"
                        >
                          <p className="text-[10px] 2xl:text-xs font-medium text-muted-foreground">{m.label}</p>
                          <p className="mt-0.5 text-xs sm:text-sm 2xl:text-base font-bold text-primary">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Direct Action Link */}
                    <Link
                      href={ctaHref}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl 2xl:rounded-2xl bg-primary px-4 py-2.5 2xl:py-3.5 text-xs sm:text-sm 2xl:text-base font-bold text-white shadow-brand hover:bg-brand-600 transition-all text-center"
                    >
                      <span>{ctaButtonPrefix} {activeService.tabLabel}</span>
                      <ArrowUpRight size={15} className="2xl:w-5 2xl:h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
