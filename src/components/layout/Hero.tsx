import Image from "next/image";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="bg-linear-to-r from-[#f7f8fb] via-[#eff4fd] to-[#f7f8fb] -mt-10"
    >
      <div className="mx-auto grid max-w-content gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 py-2 pl-2 pr-4">
            <span className="flex h-6 items-center justify-center rounded-full bg-brand-700 px-2.5">
              <Star size={12} className="fill-white text-white" />
            </span>
            <span className="text-sm font-medium text-brand-700">
              The best agency in the world
            </span>
          </div>

          <h1 className="mt-6 text-display text-foreground">
            Turning Complexity
            <br />
            into <span className="text-brand-500">Digital Excellence</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            At Devtor360, we partner with startups, enterprises, and global
            brands to design, engineer, and deliver scalable digital products
            across diverse industries. It is a full service software company
            specializing in strategy, design, engineering, quality assurance,
            and scalable digital solutions that help businesses innovate, grow,
            and stay competitive.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-md bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-brand transition-colors hover:bg-brand-600"
            >
              Get a Free Proposal
            </a>
            <a
              href="#services"
              className="rounded-md border border-primary px-7 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent"
            >
              Our Services
            </a>
          </div>
        </div>

        <div>
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="hero-photo-clip" clipPathUnits="objectBoundingBox">
                <path
                  d="M0,0.9804
                     C0,0.4389 0.3984,0 0.8898,0
                     L0.9804,0
                     C0.9912,0 1,0.0097 1,0.0216
                     L1,0.8545
                     C1,0.9231 1,0.9574 0.9807,0.9787
                     C0.9613,1 0.9302,1 0.8680,1
                     L0.0178,1
                     C0.008,1 0,0.9912 0,0.9804 Z"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="flex aspect-476/224 gap-4">
            <div className="relative h-full w-[55%]">
              <div
                className="h-full w-full overflow-hidden shadow-lg"
                style={{ clipPath: "url(#hero-photo-clip)" }}
              >
                <Image
                  src="/images/hero-workspace.jpg"
                  alt="Developer reviewing code on a laptop"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <span className="absolute -top-5 right-4 h-16 w-16 rounded-full flex items-center justify-center bg-white pt-3 shadow-lg">
                <img
                  src="/icons/hero-trending-arrow.svg"
                  alt=""
                  className="mb-4"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className="flex h-full w-[45%] flex-col justify-between rounded-2xl bg-accent p-5">
              <div>
                <p className="text-[4.25rem] font-bold leading-none text-brand-700">
                  230+
                </p>
                <p className="mt-3 text-sm leading-snug text-primary">
                  big companies that we work with, and trust us very much
                </p>
              </div>
              <div className="mt-4 h-1.5 w-full rounded-full bg-white">
                <div className="h-full w-3/5 rounded-full bg-primary" />
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-6 rounded-2xl bg-white p-9 pb-0 pr-0 shadow-lg relative overflow-hidden">
            <div className="pb-9">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-primary">
                <span className="h-px w-4 bg-primary" />
                Drive More Traffic and Sales
              </p>
              <p className="mt-2 text-[1.625rem] font-bold leading-snug text-brand-700">
                Drive more traffic
                <br />
                and product sales
              </p>
            </div>

            <div className="absolute bottom-0 right-9 flex shrink-0 items-end gap-1.5">
              <svg
                width="185"
                height="135"
                viewBox="0 0 185 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block"
              >
                <rect
                  y="57.7104"
                  width="56.0847"
                  height="77.218"
                  fill="#024890"
                  fillOpacity="0.3"
                />
                <rect
                  x="64.2129"
                  y="24.3846"
                  width="56.0847"
                  height="110.544"
                  fill="#024890"
                  fillOpacity="0.7"
                />
                <rect
                  x="128.426"
                  width="56.0847"
                  height="134.928"
                  fill="#024890"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
