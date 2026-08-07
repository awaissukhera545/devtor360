type Reason = {
  icon: string;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: "/icons/whyus-innovation.svg",
    title: "Innovation at its Core",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "/icons/whyus-tailored.svg",
    title: "Tailored Solutions",
    description: "Dorem ipsum dolor sit amet, caonsectetur adipiscing elit",
  },
  {
    icon: "/icons/whyus-expert-team.svg",
    title: "Expert Team",
    description: "Lorem ipsum dolor sit amet, coonsectetur adipiscing elit",
  },
  {
    icon: "/icons/whyus-client-centric.svg",
    title: "Client-Centric Approach",
    description: "Dorem ipsum dolor sit amet, caonsectetur adipiscing elit",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-label="Why choose Devtor360" className="bg-accent py-24">
      <div className="mx-auto max-w-[75rem] px-6 lg:px-8">
        <div className="grid gap-10 rounded-2xl border-b-4 border-navy-700 bg-card p-8 shadow-md lg:grid-cols-[1fr_2fr] lg:items-center lg:p-12">
          <div>
            <p className="text-eyebrow uppercase text-primary">Why Us</p>
            <h2 className="mt-3 text-[2.75rem] font-bold leading-tight text-foreground">
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
                  <h3 className="text-xl font-bold text-foreground">
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
