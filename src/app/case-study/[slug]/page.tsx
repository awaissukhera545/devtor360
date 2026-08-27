import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES, SITE_META } from '@/lib/site-data';
import { CheckCircle2, ArrowLeft, Quote, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) return {};
  const pageTitle = cs.title ? `${cs.title} – ${cs.client}` : `${cs.industry} Case Study – ${cs.client}`;
  return {
    title: `${pageTitle} | ${SITE_META.company}`,
    description: cs.overview,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) notFound();

  // Find 3 other related case studies for the bottom explore section
  const allSlugs = Object.keys(CASE_STUDIES);
  const relatedSlugs = allSlugs.filter((s) => s !== slug).slice(0, 3);
  const relatedProjects = relatedSlugs.map((s) => CASE_STUDIES[s]);

  const displayTitle = cs.title || cs.industry;

  return (
    <main className="bg-white text-foreground">
      {/* ── Back navigation & Breadcrumb ───────────────────────────── */}
      <div className="border-b border-border/60 bg-slate-50/50">
        <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 py-4 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-xs">{displayTitle}</span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 pt-10 pb-8 lg:px-8 lg:pt-14 lg:pb-10">
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          {cs.icon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 p-2">
              <Image
                src={cs.icon}
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>
          )}
          {/* Category badge */}
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            {cs.category}
          </span>
          {/* Metric pill */}
          <span className="rounded-md bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700">
            {cs.metric}
          </span>
        </div>

        <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-2">
          Client: {cs.client}
        </p>

        <h1 className="text-[2rem] font-extrabold leading-tight text-foreground sm:text-[2.65rem] lg:text-[3.25rem] mb-5 tracking-tight">
          {displayTitle}
        </h1>

        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {cs.overview}
        </p>

        {/* Quick Facts Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-2xl border border-border bg-slate-50/70 p-4 sm:p-5">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Client</span>
            <p className="mt-0.5 text-sm font-bold text-foreground truncate">{cs.client}</p>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Industry</span>
            <p className="mt-0.5 text-sm font-bold text-foreground truncate">{cs.industry}</p>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Timeline</span>
            <p className="mt-0.5 text-sm font-bold text-foreground truncate">{cs.timeline || 'Agile Sprints'}</p>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Engagement</span>
            <p className="mt-0.5 text-sm font-bold text-primary truncate">Full Lifecycle</p>
          </div>
        </div>

        {/* Project Image Banner if available */}
        {cs.image && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-md">
            <div className="relative aspect-16/9 w-full bg-slate-100">
              <Image
                src={cs.image}
                alt={`${displayTitle} interface preview`}
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 1000px, 100vw"
              />
              <div className="absolute bottom-3 left-3 rounded-lg bg-foreground/90 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white shadow-sm flex items-center gap-2">
                <Sparkles size={13} className="text-brand-300" />
                <span>Production Deliverable</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── Challenge & Solution ───────────────────────────────────── */}
      <section className="bg-slate-50/70 border-y border-border/70">
        <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 py-10 lg:px-8 lg:py-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">!</span>
              <h2 className="text-base font-extrabold text-foreground uppercase tracking-wide">
                The Challenge
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{cs.challenge}</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">✓</span>
              <h2 className="text-base font-extrabold text-foreground uppercase tracking-wide">
                Our Solution
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{cs.solution}</p>
          </div>
        </div>
      </section>

      {/* ── Deliverables & Architecture ─────────────────────────────── */}
      <section className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs font-bold tracking-wider text-primary uppercase">Deliverables</span>
        </div>
        <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mb-6">
          What We Engineered & Delivered
        </h2>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {cs.deliverables.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-slate-50/50 p-3.5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium leading-relaxed text-foreground">{item}</span>
            </div>
          ))}
        </div>

        {/* Highlights if present */}
        {cs.highlights && cs.highlights.length > 0 && (
          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Key System Capabilities:</h3>
            <div className="flex flex-wrap gap-2">
              {cs.highlights.map((h) => (
                <span key={h} className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-primary/20 px-3 py-1.5 text-xs font-bold text-foreground shadow-xs">
                  <ShieldCheck size={14} className="text-primary" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech stack */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">
            Production Tech Stack & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground py-10 lg:py-14">
        <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80">Measurable Impact</span>
            <h2 className="text-2xl font-extrabold text-primary-foreground sm:text-3xl mt-1">
              Tangible Business Results
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cs.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl bg-white/10 border border-white/20 p-5 text-center backdrop-blur-xs"
              >
                <p className="text-2xl font-extrabold text-white sm:text-3xl font-display">
                  {r.value}
                </p>
                <p className="mt-1.5 text-xs font-medium text-white/80">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-2xl border border-border bg-slate-50/80 p-6 sm:p-9 shadow-xs relative">
          <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Client Feedback</p>
          <blockquote className="text-base leading-relaxed text-foreground font-medium italic sm:text-lg max-w-3xl">
            &ldquo;{cs.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-base">
              {cs.testimonial.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{cs.testimonial.author}</p>
              <p className="text-xs text-muted-foreground">{cs.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Case Studies Section ─────────────────────────────── */}
      <section className="border-t border-border bg-slate-50/50 py-10 lg:py-14">
        <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Discover More</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mt-1">
                Explore Other Case Studies
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline underline-offset-4"
            >
              <span>View all projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/case-study/${item.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                    {item.category}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.title || item.industry}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                  {item.overview}
                </p>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Read Case Study</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="bg-white border-t border-border/80">
        <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 py-12 lg:px-8 lg:py-16 text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mb-3">
            Ready to build something like this?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Tell us about your technical goals and product roadmap. We&apos;ll assemble a dedicated senior engineering pod to bring it to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-brand hover:opacity-90 transition-opacity"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-6 py-3 text-sm font-bold text-foreground hover:bg-slate-100 transition-colors"
            >
              Explore All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
