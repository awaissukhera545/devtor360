"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Smartphone,
  ShieldCheck,
  Rocket,
  Palette,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES_SECTION_DATA } from "@/lib/site-data";

const ICON_MAP: Record<string, React.ElementType> = {
  "web-platforms": Code2,
  "ai-systems": Cpu,
  "mobile-apps": Smartphone,
  "cloud-devops": ShieldCheck,
  "rapid-mvp": Rocket,
  "ui-ux-design": Palette,
};

export default function Services() {
  const { services, eyebrow, badgeSubtitle, deliverablesHeading, advantagesHeading, ctaButtonPrefix, ctaHref } = SERVICES_SECTION_DATA;
  const [selectedId, setSelectedId] = useState<string>(services[0]?.id || "web-platforms");

  const activeService =
    services.find((s) => s.id === selectedId) || services[0];

  return (
    <section id="services" aria-label="Services and capabilities" className="py-8 sm:py-12 lg:py-14 bg-white">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* ── Services Header & Tabs ─────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border/80 pb-3 sm:pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              {eyebrow}
            </span>
          </div>

          {/* ── Service Tabs Navigation ────────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {services.map((item) => {
              const isSelected = item.id === selectedId;
              const Icon = ICON_MAP[item.id] || Code2;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-brand"
                      : "border border-border bg-white text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  <Icon size={14} />
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Dynamic Featured Service Card ───────────────────────────── */}
        <div className="mt-5 sm:mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-slate-50/70 p-5 sm:p-7 lg:p-8 shadow-sm"
            >
              <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8 lg:items-stretch">
                {/* Left Column: Overview & Deliverables */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-bold text-primary">
                        {activeService.badge}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {badgeSubtitle}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl lg:text-[1.75rem] leading-tight">
                      {activeService.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-primary sm:text-base">
                      {activeService.headline}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {activeService.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-4 space-y-1.5 pt-3.5 border-t border-border/80">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                        {deliverablesHeading}
                      </p>
                      {activeService.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85">
                          <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/80">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-white px-2.5 py-0.5 text-xs font-semibold text-foreground shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Features & Outcome Metrics */}
                <div className="flex flex-col justify-between h-full rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-xs">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      {advantagesHeading}
                    </h4>
                    <ul className="mt-2.5 space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {activeService.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 space-y-3 pt-3 border-t border-border">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      {activeService.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg border border-border bg-slate-50 p-2 text-center"
                        >
                          <p className="text-[10px] font-medium text-muted-foreground">{m.label}</p>
                          <p className="mt-0.5 text-xs sm:text-sm font-bold text-primary">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Direct Action Link */}
                    <a
                      href={ctaHref}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-brand hover:bg-brand-600 transition-all text-center sm:text-sm"
                    >
                      <span>{ctaButtonPrefix} {activeService.tabLabel}</span>
                      <ArrowUpRight size={15} />
                    </a>
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
