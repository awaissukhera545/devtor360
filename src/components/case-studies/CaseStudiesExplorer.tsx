"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Filter,
  Quote,
  X,
} from "lucide-react";
import { CASE_STUDIES, CASE_STUDIES_PAGE_DATA, SITE_META } from "@/lib/site-data";

export default function CaseStudiesExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allStudies = useMemo(() => {
    return Object.values(CASE_STUDIES);
  }, []);

  const filterTabs = [
    "All",
    "Technology",
    "Commerce",
    "Health & Finance",
    "Hospitality",
    "Cloud & SaaS",
    "AI & ML",
    "Mobile",
  ];

  const filteredStudies = useMemo(() => {
    return allStudies.filter((item) => {
      // Category filtering
      let matchesCategory = true;
      if (activeCategory === "All") {
        matchesCategory = true;
      } else if (activeCategory === "Technology") {
        matchesCategory = item.category === "Technology";
      } else if (activeCategory === "Commerce") {
        matchesCategory = item.category === "Commerce";
      } else if (activeCategory === "Health & Finance") {
        matchesCategory = item.category === "Health & Finance";
      } else if (activeCategory === "Hospitality") {
        matchesCategory = item.category === "Hospitality";
      } else if (activeCategory === "Cloud & SaaS") {
        matchesCategory =
          item.industry.toLowerCase().includes("cloud") ||
          item.industry.toLowerCase().includes("saas") ||
          item.techStack.some((t) => ["AWS", "Kubernetes", "Docker", "Terraform", "PostgreSQL"].includes(t));
      } else if (activeCategory === "AI & ML") {
        matchesCategory =
          item.industry.toLowerCase().includes("ai") ||
          item.techStack.some((t) => ["Python", "PyTorch", "FastAPI", "OpenAI API", "Pinecone", "LangChain"].includes(t));
      } else if (activeCategory === "Mobile") {
        matchesCategory =
          item.industry.toLowerCase().includes("mobile") ||
          item.techStack.some((t) => ["React Native", "Swift", "Kotlin", "Expo"].includes(t));
      }

      // Search query filtering
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const titleMatch = (item.title || item.industry).toLowerCase().includes(query);
        const clientMatch = item.client.toLowerCase().includes(query);
        const overviewMatch = item.overview.toLowerCase().includes(query);
        const challengeMatch = item.challenge.toLowerCase().includes(query);
        const techMatch = item.techStack.some((t) => t.toLowerCase().includes(query));
        const tagsMatch = item.tags ? item.tags.some((t) => t.toLowerCase().includes(query)) : false;
        const metricMatch = item.metric.toLowerCase().includes(query);

        matchesSearch =
          titleMatch || clientMatch || overviewMatch || challengeMatch || techMatch || tagsMatch || metricMatch;
      }

      return matchesCategory && matchesSearch;
    });
  }, [allStudies, activeCategory, searchQuery]);

  // Featured flagship projects (top 4 with rich screenshots)
  const featuredProjects = useMemo(() => {
    return allStudies.filter((item) => item.image && item.featured);
  }, [allStudies]);

  const { hero } = CASE_STUDIES_PAGE_DATA;

  return (
    <div className="bg-white">
      {/* ── 1. Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-radial from-brand-50/50 via-white to-white py-14 sm:py-18 lg:py-22 2xl:py-28 border-b border-border/70">
        <div className="mx-auto max-w-content px-6 text-center lg:px-8 xl:px-12 2xl:px-16">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 2xl:px-6 2xl:py-2 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm 2xl:text-base font-bold tracking-wider text-primary uppercase">
              {hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto mt-5 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-[2.25rem] font-extrabold leading-tight text-foreground sm:text-[3rem] lg:text-[3.5rem] xl:text-[4.25rem] 2xl:text-[5rem] tracking-tight">
            {hero.headlinePrefix}
            <span className="text-primary">{hero.headlineHighlight}</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-2xl 2xl:max-w-4xl text-base sm:text-lg 2xl:text-xl leading-relaxed text-muted-foreground">
            {hero.description}
          </p>

          {/* Key Metrics Strip */}
          <div className="mx-auto mt-10 2xl:mt-14 grid max-w-4xl xl:max-w-5xl 2xl:max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 2xl:gap-6">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl 2xl:rounded-3xl border border-border bg-white/90 p-4 sm:p-5 2xl:p-7 shadow-xs backdrop-blur-xs transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <p className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-foreground font-display">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm 2xl:text-base font-bold text-primary">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[11px] 2xl:text-xs text-muted-foreground hidden sm:block">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Interactive Filter & Search Toolbar ─────────────────────── */}
      <section className="sticky top-16 2xl:top-22 z-30 border-b border-border/80 bg-white/90 backdrop-blur-md py-4 2xl:py-6">
        <div className="mx-auto max-w-content px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex w-full md:w-auto items-center gap-1.5 2xl:gap-2.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 2xl:px-5 2xl:py-2.5 text-xs sm:text-sm 2xl:text-base font-bold transition-all ${
                    activeCategory === tab
                      ? "bg-primary text-primary-foreground shadow-brand"
                      : "border border-border bg-white text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Live Search Bar */}
            <div className="relative w-full md:w-72 2xl:w-96">
              <Search
                size={16}
                className="absolute left-3.5 2xl:left-4 top-1/2 -translate-y-1/2 text-muted-foreground 2xl:w-5 2xl:h-5"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, stack, clients..."
                className="w-full rounded-full border border-border bg-slate-50/70 pl-9 2xl:pl-11 pr-9 py-2 2xl:py-3 text-xs sm:text-sm 2xl:text-base text-foreground placeholder-muted-foreground focus:border-primary focus:bg-white focus:outline-none shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
                >
                  <X size={14} className="2xl:w-4 2xl:h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Results Header & Count ─────────────────────────────────── */}
      <div className="mx-auto max-w-content px-6 pt-8 pb-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Showing {filteredStudies.length} {filteredStudies.length === 1 ? "Case Study" : "Case Studies"}
          </span>
          {activeCategory !== "All" && (
            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
              Filtered: {activeCategory}
            </span>
          )}
          {searchQuery && (
            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
              Query: &quot;{searchQuery}&quot;
            </span>
          )}
        </div>

        {(activeCategory !== "All" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-primary hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* ── 4. Featured Flagship Projects Showcase (When on All & no search) ── */}
      {activeCategory === "All" && !searchQuery && (
        <section className="mx-auto max-w-content px-6 py-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  Flagship Deliverables
                </span>
              </div>
              <h2 className="mt-1 text-2xl font-extrabold text-foreground sm:text-3xl">
                Featured Product Platforms
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/case-study/${project.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg overflow-hidden"
              >
                {/* Visual Header */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  )}
                  {/* Top category badge */}
                  <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-primary shadow-xs">
                    {project.category}
                  </div>
                  {/* Metric badge */}
                  <div className="absolute bottom-3 right-3 rounded-lg bg-foreground/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {project.metric}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {project.client}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-slate-50 text-muted-foreground transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.overview}
                  </p>

                  {/* Highlights checklist */}
                  {project.highlights && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-md bg-slate-50 border border-border/80 px-2 py-0.5 text-[11px] font-semibold text-slate-700"
                        >
                          <CheckCircle2 size={11} className="text-primary" />
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="mt-auto flex flex-wrap gap-1 pt-5 border-t border-border/60">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── 5. All Case Studies Grid ─────────────────────────────────── */}
      <section className="mx-auto max-w-content px-6 py-8 lg:px-8">
        {activeCategory === "All" && !searchQuery && (
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  Complete Domain Portfolio
                </span>
              </div>
              <h2 className="mt-1 text-2xl font-extrabold text-foreground sm:text-3xl">
                Industry Solutions & Case Studies
              </h2>
            </div>
          </div>
        )}

        {filteredStudies.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-slate-50/50 p-12 text-center">
            <Filter size={32} className="mx-auto text-muted-foreground/50" />
            <h3 className="mt-3 text-lg font-bold text-foreground">No case studies match your criteria</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search terms or clearing category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-bold text-white shadow-brand hover:opacity-90"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-study/${study.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  {/* Top Bar: Icon, Category & Metric */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      {study.icon && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 p-1.5">
                          <Image
                            src={study.icon}
                            alt=""
                            width={28}
                            height={28}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <span className="text-xs font-semibold text-primary">
                        {study.category}
                      </span>
                    </div>

                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-700">
                      {study.metric}
                    </span>
                  </div>

                  {/* Client & Title */}
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {study.client}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {study.title || study.industry}
                  </h3>

                  {/* Overview snippet */}
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {study.overview}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/60 flex flex-col gap-3">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1">
                    {study.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/80 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.techStack.length > 4 && (
                      <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                        +{study.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Link action */}
                  <div className="flex items-center justify-between text-xs font-bold text-primary group-hover:underline underline-offset-4">
                    <span>View Case Study</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ── 6. Client Testimonials Matrix ─────────────────────────────── */}
      <section className="bg-slate-50/70 border-y border-border/70 py-14 sm:py-18">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-bold tracking-wider text-primary uppercase">
                Verified Client Reviews
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">
              What Founders & Engineering Leaders Say
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allStudies.slice(0, 3).map((study) => (
              <div
                key={study.slug}
                className="relative flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-xs"
              >
                <Quote className="absolute top-5 right-5 h-7 w-7 text-primary/15" />
                <blockquote className="text-sm leading-relaxed text-foreground italic font-medium">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-sm">
                    {study.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">{study.testimonial.author}</p>
                    <p className="text-[11px] text-muted-foreground">{study.testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Final Conversion Call To Action ─────────────────────────── */}
      <section className="bg-white py-14 sm:py-18 lg:py-20 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 shadow-xs mb-4">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              Start Your Project
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Ready to Engineer Your Next Success Story?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tell us about your platform goals, timeline, and tech stack. We will assemble a senior engineering pod and provide a detailed roadmap in under 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-brand hover:bg-brand-600 transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={`mailto:${SITE_META.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-7 py-3.5 text-sm font-bold text-foreground hover:bg-slate-100 transition-colors"
            >
              <span>Email Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
