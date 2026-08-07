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

const TECH_STACK = [
  { name: "Ionic", src: "/icons/tech/ionic.svg", width: 222, height: 140 },
  { name: "Python", src: "/icons/tech/python.svg", width: 313, height: 140 },
  { name: "Photoshop", src: "/icons/tech/photoshop.svg", width: 105, height: 140 },
  { name: "Node.js", src: "/icons/tech/nodejs.svg", width: 254, height: 140 },
  { name: "Swift", src: "/icons/tech/swift.svg", width: 255, height: 140 },
  { name: "Illustrator", src: "/icons/tech/illustrator.svg", width: 112, height: 140 },
  { name: "Google Cloud", src: "/icons/tech/google-cloud.svg", width: 375, height: 140 },
  { name: "Java", src: "/icons/tech/java.svg", width: 86, height: 140 },
];

const CARD_GAP = 24;

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const goTo = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // The card width is responsive, so measure it instead of assuming 320px.
    const card = scroller.firstElementChild;
    const step = (card?.getBoundingClientRect().width ?? 320) + CARD_GAP;

    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="portfolio" aria-label="Our projects" className="bg-muted py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <p className="text-eyebrow uppercase text-primary">Portfolio</p>
        <h2 className="mt-3 text-[1.875rem] font-bold leading-[1.25] text-foreground sm:text-[2.25rem] sm:leading-[1.3] lg:text-[2.75rem] lg:leading-[1.5]">
          Our Projects
        </h2>

        <div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-4 sm:mt-10 lg:mt-12"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="w-[280px] shrink-0 snap-start rounded-xl border border-border bg-card shadow-sm sm:w-[320px]"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-t-xl bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} product screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 320px, 280px"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
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

      <div className="mt-14 overflow-hidden bg-subtle sm:mt-16 lg:mt-20">
        <div className="flex w-max animate-marquee items-center gap-10 py-7 sm:gap-12 sm:py-8 lg:gap-16 lg:py-10">
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <Image
              key={`${tech.name}-${index}`}
              src={tech.src}
              alt={tech.name}
              width={tech.width}
              height={tech.height}
              className="h-12 w-auto shrink-0 opacity-70 sm:h-14 lg:h-17.5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
