interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

const STATS: StatItem[] = [
  { value: 8, label: "Years in Business", suffix: "+" },
  { value: 120, label: "Clients", suffix: "+" },
  { value: 137, label: "Projects", suffix: "+" },
  { value: 15, label: "Industries", suffix: "+" },
];

export default function OurStats() {
  return (
    <section aria-label="Our track record" className="border-t border-border">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-x-6 gap-y-10 px-6 py-12 sm:grid-cols-4 sm:gap-8 sm:py-14 lg:px-8 lg:py-16">
        {STATS.map((stat, index) => {
          const isAlternativeColor = index === 1 || index === 3;

          return (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center">
              <p
                className="text-[2.5rem] font-medium leading-none tracking-[-0.03em] sm:text-[3.25rem] lg:text-stat"
                style={{
                  color: isAlternativeColor ? "var(--brand-700, #024890)" : "var(--primary)"
                }}
              >
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
