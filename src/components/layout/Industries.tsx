"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { INDUSTRIES_DATA, type IndustryCategory } from "@/lib/site-data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Industries() {
  const { eyebrow, headline, description, tabs, industries, caseStudyLabel } = INDUSTRIES_DATA;
  const [activeTab, setActiveTab] = useState<IndustryCategory>(tabs[0] || "Technology");

  const visible = industries.filter((i) => i.category === activeTab);

  return (
    <section
      id="industries"
      aria-label="Industry verticals"
      className="bg-slate-50/60 py-8 sm:py-12 lg:py-16 2xl:py-20 border-y border-border/70"
    >
      <div className="mx-auto max-w-content px-6 text-center lg:px-8 xl:px-12 2xl:px-16">
        {/* ── Eyebrow ─────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs sm:text-sm 2xl:text-base font-mono font-bold tracking-widest text-primary uppercase">
            {eyebrow}
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-2 text-[1.75rem] font-extrabold leading-tight text-foreground sm:text-[2.25rem] lg:text-[2.65rem] xl:text-[3rem] 2xl:text-[3.5rem]"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mx-auto mt-2 max-w-2xl 2xl:max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base 2xl:text-lg"
        >
          {description}
        </motion.p>

        {/* ── Tabs ───────────────────────────────────────────────────── */}
        <div className="mt-5 flex flex-wrap justify-center gap-1.5 sm:mt-6 sm:gap-2 2xl:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-1.5 2xl:px-6 2xl:py-2.5 text-xs sm:text-sm 2xl:text-base font-bold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "border border-border bg-white text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Cards Grid ─────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="mt-6 grid gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 2xl:gap-7"
          >
            {visible.map((industry) => (
              <motion.div
                key={industry.title}
                variants={cardVariants}
                layout
                className="spotlight-card rounded-2xl 2xl:rounded-3xl p-4 sm:p-5 2xl:p-7 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 2xl:h-13 2xl:w-13 items-center justify-center rounded-xl bg-primary/10 p-2">
                      <Image
                        src={industry.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] 2xl:text-xs font-bold text-slate-700">
                      {industry.metric}
                    </span>
                  </div>

                  <h3 className="mt-3.5 2xl:mt-5 text-base 2xl:text-xl font-bold text-foreground">
                    {industry.title}
                  </h3>
                  <p className="mt-1.5 text-xs 2xl:text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                </div>

                <div className="mt-4 2xl:mt-6 pt-2.5 2xl:pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[11px] 2xl:text-xs font-mono font-bold text-primary">
                    {industry.category}
                  </span>
                  <Link
                    href={`/case-study/${industry.slug}`}
                    className="text-xs 2xl:text-sm font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {caseStudyLabel}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
