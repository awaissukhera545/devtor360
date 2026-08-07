type Industry = {
  icon: string;
  title: string;
  description: string;
};

const INDUSTRIES: Industry[] = [
  {
    icon: "/icons/industries/edtech.svg",
    title: "EdTech",
    description:
      "Learning platforms, virtual classrooms, and assessment tools that scale with your students.",
  },
  {
    icon: "/icons/industries/health-tech.svg",
    title: "Health Tech",
    description:
      "Patient portals, telehealth, and compliant systems that keep care connected and secure.",
  },
  {
    icon: "/icons/industries/travel-tech.svg",
    title: "Travel Tech",
    description:
      "Booking engines, itinerary tools, and platforms that turn trips into seamless journeys.",
  },
  {
    icon: "/icons/industries/agr-tech.svg",
    title: "Agr Tech",
    description:
      "Farm monitoring, supply chain tracking, and data tools that grow yields and margins.",
  },
  {
    icon: "/icons/industries/prop-tech.svg",
    title: "Prop Tech",
    description:
      "Listing portals, tenant platforms, and management tools built for modern real estate.",
  },
  {
    icon: "/icons/industries/blockchain.svg",
    title: "Blockchain",
    description:
      "Smart contracts, wallets, and decentralised apps engineered for trust and transparency.",
  },
  {
    icon: "/icons/industries/autotech.svg",
    title: "AutoTech",
    description:
      "Fleet management, connected vehicle apps, and dealership platforms that keep you moving.",
  },
  {
    icon: "/icons/industries/fmcg.svg",
    title: "FMCG",
    description:
      "Distribution, inventory, and order systems that keep fast-moving goods moving faster.",
  },
  {
    icon: "/icons/industries/retail-tech.svg",
    title: "Retail Tech",
    description:
      "Storefronts, POS integrations, and loyalty tools that lift conversions and repeat sales.",
  },
  {
    icon: "/icons/industries/fintech.svg",
    title: "Fintech",
    description:
      "Payments, lending, and compliant financial products built on secure, scalable rails.",
  },
];

const LG_COLUMNS = 4;

// Tailwind only emits classes it can read as literals, so the options are listed
// out rather than built with a template string.
const COL_START = [
  "lg:col-start-1",
  "lg:col-start-2",
  "lg:col-start-3",
  "lg:col-start-4",
];

export default function Industries() {
  // Centre whatever is left over on the final row. Placing only its first card is
  // enough — grid auto-placement carries the rest of the row along from there.
  const leftover = INDUSTRIES.length % LG_COLUMNS;
  const firstOfLastRow = leftover === 0 ? -1 : INDUSTRIES.length - leftover;
  const lastRowStart = COL_START[Math.floor((LG_COLUMNS - leftover) / 2)];

  return (
    <section
      id="industries"
      aria-label="Industries we cater"
      className="bg-muted py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-content px-6 text-center lg:px-8">
        <p className="text-eyebrow uppercase text-primary">Industries</p>
        <h2 className="mt-3 text-[1.875rem] font-bold leading-tight text-foreground sm:text-[2.25rem] sm:leading-[1.3] lg:text-[2.5rem] lg:leading-normal">
          Industries We Cater
        </h2>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => {
            return (
              <div
                key={industry.title}
                className={`rounded-xl border border-border bg-card p-5 text-center flex flex-col items-center sm:p-6 ${
                  index === firstOfLastRow ? lastRowStart : ""
                }`}
              >
                <img
                  src={industry.icon}
                  alt=""
                  width={70}
                  height={70}
                  className="mx-auto h-14 w-14 sm:h-17.5 sm:w-17.5"
                />

                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {industry.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
