type Reason = {
  icon: string;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: "/icons/whyus-innovation.svg",
    title: "Innovation at its Core",
    description:
      "We pair emerging technology with proven engineering to keep you ahead of the curve.",
  },
  {
    icon: "/icons/whyus-tailored.svg",
    title: "Tailored Solutions",
    description:
      "Every build is shaped around your goals and workflows, never a reused template.",
  },
  {
    icon: "/icons/whyus-expert-team.svg",
    title: "Expert Team",
    description:
      "Senior engineers, designers, and strategists who have shipped products at scale.",
  },
  {
    icon: "/icons/whyus-client-centric.svg",
    title: "Client-Centric Approach",
    description:
      "Clear communication, honest timelines, and a partnership that outlasts launch day.",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-label="Why choose Devtor360" className="bg-accent py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="grid gap-8 rounded-2xl border-b-4 border-navy-700 bg-card p-6 shadow-md sm:p-8 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-10 lg:p-12">
          <div>
            <p className="text-eyebrow uppercase text-primary text-center lg:text-left">Why Us</p>
            <h2 className="mt-3 text-center text-[1.875rem] font-bold leading-tight text-foreground sm:text-[2.25rem] lg:text-left lg:text-[2.75rem]">
              Why Choose Devtor360 for Your Project
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                  <img src={reason.icon} alt="" width={18} height={18} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
