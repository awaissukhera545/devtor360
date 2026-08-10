"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "HRM System.",
    description:
      "A comprehensive web based HRM platform that streamlines the complete employee lifecycle from onboarding, attendance to payroll & tax compliance.",
    image: "/images/portfolio/compliance-suite.jpg",
    tags: ["SaaS", "Web App", "Mobile App"],
  },
  {
    title: "Smart Delivery Network.",
    description:
      "An all in one super app that brings together food delivery, groceries, retail shopping, parcel services, and everyday essentials through a seamless digital experience.",
    image: "/images/portfolio/smart-delivery.jpg",
    tags: ["RetailTech", "Web App", "Mobile App"],
  },
  {
    title: "GTO Training Suite.",
    description:
      "An AI-powered poker training application that helps players master Game Theory Optimal (GTO) strategies through interactive simulations, real-time analysis, and personalized insights.",
    image: "/images/portfolio/gto-training.jpg",
    tags: ["Gaming", "Web App", "Training Suite"],
  },
  {
    title: "Compliance Suite.",
    description:
      "A compliance automation platform that helps organizations automate compliance workflows, from policy tracking to audit-ready reporting.",
    image: "/images/portfolio/hrm-system.jpg",
    tags: ["Compliance", "Web App", "UI/UX"],
  },
];

const TAG_STYLES: Record<number, string> = {
  0: "bg-accent text-accent-foreground",
  1: "bg-warning/10 text-warning",
  2: "bg-brand-100 text-brand-700",
};

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const goTo = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.firstElementChild;
    const gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;
    const step = (card?.getBoundingClientRect().width ?? 320) + gap;

    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="portfolio" aria-label="Our projects" className="bg-muted py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <p className="text-eyebrow uppercase text-primary">Portfolio</p>
        <h2 className="mt-3 text-[1.875rem] font-bold leading-tight text-foreground sm:text-[2.25rem] sm:leading-[1.3] lg:text-[2.75rem] lg:leading-normal">
          Our Projects
        </h2>

        <div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-4 sm:mt-10 lg:mt-12"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex w-70 shrink-0 snap-start flex-col rounded-xl border border-border bg-card shadow-sm sm:w-[320px]"
            >
              <div className="relative aspect-16/10 shrink-0 overflow-hidden rounded-t-xl bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} product screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 320px, 280px"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        TAG_STYLES[tagIndex] ?? "bg-muted text-muted-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Show previous project"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Show next project"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-primary text-primary transition-colors hover:bg-accent"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
