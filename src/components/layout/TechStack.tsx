"use client";

import Image from "next/image";
import { TECH_STACK_DATA } from "@/lib/site-data";

const ITEMS = [
  ...TECH_STACK_DATA.items,
  ...TECH_STACK_DATA.items,
  ...TECH_STACK_DATA.items,
];

export default function TechStack() {
  const { eyebrow, headline, description } = TECH_STACK_DATA;

  return (
    <section aria-label="Technologies we use" className="bg-slate-50/50 py-8 sm:py-10 border-y border-border/70">
      <div className="mx-auto max-w-content px-6 text-center lg:px-8">
        <div className="flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-2 text-[1.5rem] font-extrabold leading-tight text-foreground sm:text-[1.875rem]">
          {headline}
        </h2>
        <p className="mx-auto mt-1.5 max-w-xl text-xs sm:text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      {/* ── Reverse Marquee ─────────────────────────────────────────── */}
      <div className="mt-5 marquee-fade-x overflow-hidden sm:mt-6">
        <div className="flex w-max animate-marquee-reverse items-center gap-5 sm:gap-6 py-2">
          {ITEMS.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 rounded-xl border border-border/90 bg-white px-4 py-2.5 shadow-xs transition-all hover:border-primary/50 hover:shadow-sm"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={tech.width}
                height={tech.height}
                className="h-6 w-auto object-contain sm:h-7"
              />
              <div>
                <p className="text-xs font-bold text-foreground font-display">
                  {tech.name}
                </p>
                <p className="text-[10px] font-mono text-muted-foreground">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
