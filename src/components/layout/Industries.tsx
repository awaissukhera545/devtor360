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
      className="bg-white py-10 sm:py-14"
    >
      <div className="mx-auto max-w-content px-6 text-center lg:px-8 xl:px-12 2xl:px-16">
        {/* ── Eyebrow ─────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center">
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
                className="spotlight-card rounded-2xl p-3.5 text-left flex flex-col justify-between gap-3"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 p-1.5">
                    <Image
                      src={industry.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <h3 className="text-sm font-bold text-foreground leading-snug">
                    {industry.title}
                  </h3>
                </div>

                <div className="pt-2.5 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-primary">
                    {industry.category}
                  </span>
                  <Link
                    href={`/case-study/${industry.slug}`}
                    className="text-xs font-bold text-foreground hover:text-primary transition-colors"
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
