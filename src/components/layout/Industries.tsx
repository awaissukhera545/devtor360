type Industry = {
  icon: string;
  title: string;
};

const INDUSTRIES: Industry[] = [
  { icon: "/icons/industries/edtech.svg", title: "EdTech" },
  { icon: "/icons/industries/health-tech.svg", title: "Health Tech" },
  { icon: "/icons/industries/travel-tech.svg", title: "Travel Tech" },
  { icon: "/icons/industries/agr-tech.svg", title: "Agr Tech" },
  { icon: "/icons/industries/prop-tech.svg", title: "Prop Tech" },
  { icon: "/icons/industries/blockchain.svg", title: "Blockchain" },
  { icon: "/icons/industries/autotech.svg", title: "AutoTech" },
  { icon: "/icons/industries/fmcg.svg", title: "FMCG" },
  { icon: "/icons/industries/retail-tech.svg", title: "Retail Tech" },
  { icon: "/icons/industries/fintech.svg", title: "Fintech" },
];

const DESCRIPTION =
  "Easily get ranked on search engines, improve being found by competitors.";

export default function Industries() {
  return (
    <section
      id="industries"
      aria-label="Industries we cater"
      className="bg-muted py-24"
    >
      <div className="mx-auto max-w-content px-6 text-center lg:px-8">
        <p className="text-eyebrow uppercase text-primary">Industries</p>
        <h2 className="mt-3 text-[2.5rem] font-bold text-foreground">
          Industries We Cater
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => {
            const isNinth = index === 8;
            const isTenth = index === 9;

            return (
              <div
                key={industry.title}
                className={`rounded-xl border border-border bg-card p-6 text-center flex flex-col items-center ${
                  isNinth ? "lg:col-start-2" : ""
                } ${isTenth ? "lg:col-start-3" : ""}`}
              >
                <img
                  src={industry.icon}
                  alt=""
                  width={70}
                  height={70}
                  className="mx-auto"
                />

                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {industry.title}
                </h3>

                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {DESCRIPTION}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
