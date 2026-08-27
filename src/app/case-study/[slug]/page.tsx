import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES, SITE_META } from '@/lib/site-data';
import { CheckCircle2, ArrowLeft, Quote, ArrowRight } from 'lucide-react';
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
  return {
    title: `${cs.industry} Case Study – ${cs.client} | ${SITE_META.company}`,
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

  return (
    <main className="bg-white text-foreground">
      {/* ── Back navigation ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 pt-8 lg:px-8">
        <Link
          href="/#industries"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Industries
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          {/* Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 p-2">
            <Image
              src={cs.icon}
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          {/* Category badge */}
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            {cs.category}
          </span>
          {/* Metric pill */}
          <span className="rounded-md bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700">
            {cs.metric}
          </span>
        </div>

        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
          {cs.client}
        </p>
        <h1 className="text-[2rem] font-extrabold leading-tight text-foreground sm:text-[2.5rem] lg:text-[3rem] mb-4">
          {cs.industry}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {cs.overview}
        </p>
      </section>

      {/* ── Challenge & Solution ─────────────────────────────────────── */}
      <section className="bg-slate-50/60 border-y border-border/70">
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8 lg:py-14 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-base font-extrabold text-foreground uppercase tracking-wide mb-3">
              The Challenge
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{cs.challenge}</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-base font-extrabold text-foreground uppercase tracking-wide mb-3">
              Our Solution
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{cs.solution}</p>
          </div>
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8 lg:py-14">
        <h2 className="text-xl font-extrabold text-foreground mb-6">
          What We Delivered
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {cs.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="mt-10">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-slate-50 px-3 py-1 text-xs font-semibold text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="bg-primary">
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8 lg:py-14">
          <h2 className="text-xl font-extrabold text-primary-foreground mb-8 text-center">
            Results at a Glance
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cs.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl bg-white/10 border border-white/20 p-5 text-center"
              >
                <p className="text-2xl font-extrabold text-primary-foreground sm:text-3xl">
                  {r.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-primary-foreground/70">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-2xl border border-border bg-slate-50 p-8 shadow-sm relative">
          <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
          <blockquote className="text-base leading-relaxed text-foreground font-medium italic sm:text-lg max-w-3xl">
            &ldquo;{cs.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-sm">
              {cs.testimonial.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{cs.testimonial.author}</p>
              <p className="text-xs text-muted-foreground">{cs.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-slate-50/60 border-t border-border/70">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16 text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl mb-4">
            Ready to build something like this?
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll engineer the right solution for your industry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-brand hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
