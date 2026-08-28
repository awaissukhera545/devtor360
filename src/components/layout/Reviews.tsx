"use client";

import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { REVIEWS_DATA, type ReviewItem } from "@/lib/site-data";

function tripled<T>(arr: T[]) {
  return [...arr, ...arr, ...arr];
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <article className="w-[300px] sm:w-[350px] xl:w-[420px] 2xl:w-[460px] 3xl:w-[500px] shrink-0 rounded-2xl 2xl:rounded-3xl border border-border/90 bg-white p-4 sm:p-5 2xl:p-7 text-left shadow-xs transition-all hover:border-primary/50 hover:shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2.5 2xl:mb-4">
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-amber-400 text-amber-400 2xl:w-4 2xl:h-4" />
            ))}
          </div>
          {review.verified && (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 2xl:px-3 2xl:py-1 font-mono text-[10px] 2xl:text-xs font-bold text-emerald-700">
              <CheckCircle2 size={11} className="2xl:w-3.5 2xl:h-3.5" />
              {review.verified}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm 2xl:text-base leading-relaxed text-foreground/85 font-medium">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      <div className="mt-3.5 2xl:mt-5 flex items-center gap-2.5 2xl:gap-3.5 border-t border-border/50 pt-3 2xl:pt-4">
        <Image
          src={review.avatar}
          alt={`Portrait of ${review.name}`}
          width={36}
          height={36}
          className="h-9 w-9 2xl:h-12 2xl:w-12 rounded-full object-cover border border-border/80"
        />
        <div>
          <p className="text-xs sm:text-sm 2xl:text-base font-bold text-foreground">{review.name}</p>
          <p className="text-[11px] 2xl:text-xs text-muted-foreground">{review.role}</p>
        </div>
      </div>
    </article>
  );
}

function ReviewRow({
  reviews,
  reverse,
}: {
  reviews: ReviewItem[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee-fade-x overflow-hidden">
      <div
        className={`flex w-max items-center gap-4 py-1.5 sm:gap-5 2xl:gap-7 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {tripled(reviews).map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  const { eyebrow, headline, description, reviews } = REVIEWS_DATA;
  const row1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const row2 = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <section aria-label="Engineering testimonials" className="bg-white border-t border-border/70 py-10 sm:py-14">
      <div className="mx-auto max-w-content px-6 text-center lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs sm:text-sm 2xl:text-base font-mono font-bold tracking-widest text-primary uppercase">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-2 text-[1.75rem] font-extrabold leading-tight text-foreground sm:text-[2.25rem] lg:text-[2.65rem] xl:text-[3rem] 2xl:text-[3.5rem]">
          {headline}
        </h2>
      </div>

      <div className="mt-6 space-y-3.5 sm:mt-7 2xl:mt-10 2xl:space-y-5">
        <ReviewRow reviews={row1} />
        <ReviewRow reviews={row2} reverse />
      </div>
    </section>
  );
}
