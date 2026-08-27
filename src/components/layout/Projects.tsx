"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/site-data";

const ITEMS = [
  ...PROJECTS_DATA.projects,
  ...PROJECTS_DATA.projects,
  ...PROJECTS_DATA.projects,
];

export default function Projects() {
  const { eyebrow, headline, description, cta } = PROJECTS_DATA;

  return (
    <section id="portfolio" aria-label="Featured work" className="py-8 sm:py-12 lg:py-16 2xl:py-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-content px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* ── Eyebrow ─────────────────────────────────────────────────── */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs sm:text-sm 2xl:text-base font-bold tracking-wider text-primary uppercase">
            {eyebrow}
          </span>
        </div>

        {/* ── Headline ────────────────────────────────────────────────── */}
        <div className="mt-2 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[1.75rem] font-extrabold leading-tight text-foreground sm:text-[2.25rem] lg:text-[2.65rem] xl:text-[3rem] 2xl:text-[3.5rem]">
              {headline}
            </h2>
            <p className="mt-1.5 text-sm sm:text-base 2xl:text-lg text-muted-foreground max-w-2xl 2xl:max-w-3xl">
              {description}
            </p>
          </div>
          <Link
            href={cta.href}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm 2xl:text-base font-bold text-primary hover:underline underline-offset-4 self-start sm:self-auto group"
          >
            <span>{cta.label}</span>
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 2xl:w-5 2xl:h-5" />
          </Link>
        </div>
      </div>

      {/* ── Continuous Marquee of Clean Project Cards ───────────────── */}
      <div className="mt-6 marquee-fade-x sm:mt-7 2xl:mt-10">
        <div className="flex w-max animate-marquee-slow items-stretch gap-5 sm:gap-6 2xl:gap-8 py-2">
          {ITEMS.map((project, index) => (
            <Link
              key={`${project.title}-${index}`}
              href={`/case-study/${project.slug}`}
              className="group w-[300px] sm:w-[360px] xl:w-[420px] 2xl:w-[480px] 3xl:w-[540px] shrink-0 flex flex-col rounded-2xl 2xl:rounded-3xl border border-border bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-16/10 shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1536px) 480px, (min-width: 640px) 360px, 300px"
                />
                {/* Metric Overlay Badge */}
                <div className="absolute bottom-2.5 left-2.5 2xl:bottom-4 2xl:left-4 rounded-md 2xl:rounded-lg bg-foreground/90 backdrop-blur-md px-2.5 py-0.5 2xl:px-3.5 2xl:py-1 text-[11px] 2xl:text-xs font-bold text-white shadow-sm">
                  {project.metrics}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 2xl:p-7">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs 2xl:text-sm font-semibold text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-0.5 text-lg 2xl:text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-7 w-7 2xl:h-9 2xl:w-9 shrink-0 items-center justify-center rounded-full border border-border bg-slate-50 text-muted-foreground transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <ArrowUpRight size={14} className="2xl:w-4 2xl:h-4" />
                  </span>
                </div>

                <p className="mt-2 text-xs 2xl:text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="mt-auto flex flex-wrap gap-1 2xl:gap-1.5 pt-3.5 2xl:pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-slate-50 px-2 py-0.5 2xl:px-2.5 2xl:py-1 text-[10px] 2xl:text-xs font-semibold text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
