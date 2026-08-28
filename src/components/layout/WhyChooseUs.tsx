"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Code2,
  Users2,
  ArrowRight,
  Sparkles,
  Terminal,
} from "lucide-react";
import { WHY_US_DATA } from "@/lib/site-data";

const PILLARS_LIST = [
  {
    id: "velocity",
    step: "01",
    title: "Fast-Track Velocity",
    badge: "Day 14 Staging",
    headline: "Working Builds from Day 14, Not Month 6",
    metric: "2.4x Faster Time-to-Market",
    description:
      "We replace bloated waterfall planning with rapid 2-week agile sprint cycles. You get a working staging environment within your first 14 days and continuous deployments thereafter.",
    icon: Zap,
    keyOutcomes: [
      "Working live staging build delivered on Day 14",
      "Bi-weekly interactive demo & feedback cadence",
      "Zero scope creep with time-boxed agile sprints",
    ],
    accentGradient: "from-blue-600 to-indigo-600",
  },
  {
    id: "senior-pods",
    step: "02",
    title: "Senior Engineering Pods",
    badge: "Top 3% Talent",
    headline: "Direct Senior Access — Zero Junior Handoffs",
    metric: "100% Dedicated Staff Engineers",
    description:
      "Your project is engineered directly by seasoned senior architects and staff engineers with 8+ years of enterprise production experience. No bait-and-switch, no junior delegation.",
    icon: Users2,
    keyOutcomes: [
      "Direct daily communication with lead engineers",
      "Battle-tested enterprise architectural patterns",
      "High-velocity code reviews and daily CI/CD pushes",
    ],
    accentGradient: "from-indigo-600 to-purple-600",
  },
  {
    id: "bespoke-architecture",
    step: "03",
    title: "Bespoke Enterprise Architecture",
    badge: "Zero Cookie-Cutters",
    headline: "Custom-Engineered for 99.99% Uptime & Scale",
    metric: "Enterprise Multi-Region Scalability",
    description:
      "Every application is custom-architected around your unique domain logic, security requirements, and long-term user scale — no restrictive templates or generic themes.",
    icon: Code2,
    keyOutcomes: [
      "Tailored microservices & modern serverless setups",
      "Automated auto-scaling infrastructure on AWS/GCP",
      "Optimized sub-second global response latencies",
    ],
    accentGradient: "from-purple-600 to-pink-600",
  },
  {
    id: "code-ownership",
    step: "04",
    title: "Complete Code Ownership",
    badge: "Day 1 GitHub Access",
    headline: "100% IP Handover — Zero Vendor Lock-In",
    metric: "Unencumbered Full Repository IP",
    description:
      "You own 100% of all intellectual property, source code, CI/CD scripts, and cloud infrastructure from day one with direct GitHub repository access and clean documentation.",
    icon: ShieldCheck,
    keyOutcomes: [
      "Direct GitHub repository access from kickoff day",
      "Comprehensive API documentation & setup guides",
      "Clean, maintainable, TypeScript-first codebase",
    ],
    accentGradient: "from-blue-600 to-cyan-600",
  },
];

export default function WhyChooseUs() {
  const { eyebrow } = WHY_US_DATA;
  const [selectedPillarIndex, setSelectedPillarIndex] = useState<number>(0);

  const currentPillar = PILLARS_LIST[selectedPillarIndex];
  const PillarIcon = currentPillar.icon;

  return (
    <section id="why-us" aria-label="Why choose Devtor360" className="bg-[#f8fafc] border-t border-border/70 py-8 sm:py-10">
      <div className="mx-auto max-w-content px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider mb-2">
            <Sparkles size={13} className="text-primary" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] font-extrabold leading-[1.1] text-foreground tracking-tight">
            <span>Built for Speed,</span>
            <span className="block text-primary mt-0.5">Engineered for Scale.</span>
          </h2>
        </div>

        {/* Interactive Dual-Panel Console */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:gap-8 items-stretch">
          
          {/* Left Column: Interactive Pillar Selectors */}
          <div className="flex flex-col gap-3 justify-between">
            {PILLARS_LIST.map((item, idx) => {
              const isSelected = selectedPillarIndex === idx;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedPillarIndex(idx)}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-white border-primary shadow-md ring-2 ring-primary/15 -translate-y-0.5"
                      : "bg-white/60 border-border/80 hover:bg-white hover:border-primary/40 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isSelected
                          ? "bg-primary text-white shadow-brand scale-105"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon size={17} className="stroke-[2.2]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-primary font-display">
                        {item.step}
                      </span>
                      <h3 className="text-sm font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight
                    size={14}
                    className={`shrink-0 transition-transform duration-300 ${
                      isSelected ? "text-primary translate-x-1" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Feature Spotlight Display Card */}
          <div className="relative rounded-2xl border border-primary/20 bg-white p-5 sm:p-6 shadow-lg flex flex-col justify-between overflow-hidden">
            {/* Top Right Decorative Pill */}
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Badge & Metric Ribbon */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <PillarIcon size={18} className="stroke-[2.2]" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-black tracking-wider text-primary uppercase font-display">
                        <Terminal size={12} />
                        <span>{currentPillar.badge}</span>
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span>{currentPillar.metric}</span>
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-foreground leading-snug">
                    {currentPillar.headline}
                  </h3>

                  {/* Key Tangible Outcomes Checklist */}
                  <div className="mt-6 pt-5 border-t border-border/70">
                    <ul className="space-y-2.5">
                      {currentPillar.keyOutcomes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
