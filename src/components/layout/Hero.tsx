import Image from "next/image";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="bg-linear-to-r from-[#f7f8fb] via-[#eff4fd] to-[#f7f8fb] lg:-mt-10"
    >
      <div className="mx-auto grid max-w-content gap-12 px-6 py-14 sm:gap-14 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 py-2 pl-2 pr-4">
            <span className="flex h-6 items-center justify-center rounded-full bg-brand-700 px-2.5">
              <Star size={12} className="fill-white text-white" />
            </span>
            <span className="text-sm font-medium text-brand-700">
              The best agency in the world
            </span>
          </div>

          <h1 className="mt-5 text-display-sm text-foreground sm:text-display-md lg:mt-6 lg:text-display">
            Turning Complexity
            <br className="hidden sm:inline" />{" "}
            into <span className="text-brand-500">Digital Excellence</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:mt-6">
            At Devtor360, we partner with startups, enterprises, and global
            brands to design, engineer, and deliver scalable digital products
            across diverse industries. It is a full service software company
            specializing in strategy, design, engineering, quality assurance,
            and scalable digital solutions that help businesses innovate, grow,
            and stay competitive.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-8">
            <a
              href="/contact"
              className="w-full rounded-md bg-primary px-7 py-3.5 text-center text-base font-semibold text-primary-foreground shadow-brand transition-colors hover:bg-brand-600 sm:w-auto"
            >
              Get a Free Proposal
            </a>
            <a
              href="#services"
              className="w-full rounded-md border border-primary px-7 py-3.5 text-center text-base font-semibold text-primary transition-colors hover:bg-accent sm:w-auto"
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

          <div className="flex aspect-3/2 gap-3 sm:gap-4 md:aspect-476/224">
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
              <span className="absolute -top-4 right-3 h-12 w-12 rounded-full flex items-center justify-center bg-white pt-2 shadow-lg sm:h-14 sm:w-14 sm:pt-2.5 lg:-top-5 lg:right-4 lg:h-16 lg:w-16 lg:pt-3">
                <img
                  src="/icons/hero-trending-arrow.svg"
                  alt=""
                  className="mb-3 h-5 w-5 sm:mb-3.5 sm:h-6 sm:w-6 lg:mb-4 lg:h-7.5 lg:w-7.5"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            <div className="flex h-full w-[45%] flex-col justify-between rounded-2xl bg-accent p-4 sm:p-5">
              <div>
                <p className="text-[1.75rem] font-bold leading-none text-brand-700 sm:text-[3rem] lg:text-[3.5rem] xl:text-[4.25rem]">
                  120+
                </p>
                <p className="mt-2 text-xs leading-snug text-primary sm:mt-3 sm:text-sm">
                  companies that we work with, and trust us very much
                </p>
              </div>
              <div className="mt-4 h-1.5 w-full rounded-full bg-white">
                <div className="h-full w-3/5 rounded-full bg-primary" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-lg relative overflow-hidden sm:mt-5 sm:gap-6 sm:p-7 xl:p-9 xl:pb-0 xl:pr-0">
            <div className="xl:pb-9">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-primary">
                <span className="h-px w-4 bg-primary" />
                Drive More Traffic and Sales
              </p>
              <p className="mt-2 text-lg font-bold leading-snug text-brand-700 sm:text-xl xl:text-[1.625rem]">
                Drive more traffic
                <br className="hidden xl:inline" />{" "}
                and product sales
              </p>
            </div>

            <div className="flex shrink-0 items-end gap-1.5 xl:absolute xl:bottom-0 xl:right-9">
              <svg
                width="185"
                height="135"
                viewBox="0 0 185 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block h-14 w-auto sm:h-20 md:h-28 xl:h-33.75 xl:w-46.25"
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
