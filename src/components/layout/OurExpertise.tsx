type Pillar = {
  icon: string;
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    icon: "/icons/expertise-dedicated-teams.svg",
    title: "Dedicated Teams",
    description:
      "Our solutions are designed to keep you ahead of the curve and poised for success.",
  },
  {
    icon: "/icons/expertise-custom-development.svg",
    title: "Custom Development",
    description:
      "Every business is unique, and so are our solutions. We craft bespoke products tailored to your goals.",
  },
  {
    icon: "/icons/expertise-it-consulting.svg",
    title: "IT Consulting & Support",
    description:
      "We bring our expertise and passion to every project, delivering exceptional results.",
  },
  {
    icon: "/icons/expertise-digital-transformation.svg",
    title: "Digital Transformation",
    description:
      "Your success is our success. We build strong, collaborative relationships with our clients.",
  },
];

export default function OurExpertise() {
  return (
    <section aria-label="Our expertise" className="py-24 bg-white">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="w-full lg:w-1/2">
            <p className="text-eyebrow uppercase text-primary">
              Our Expertise
            </p>
            <h2 className="mt-3 max-w-xl text-display font-bold leading-tight text-foreground">
              Why Choose Us for Your Next Big <br className="hidden lg:block"/> Project?
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Unlock your business&apos;s potential with Devtor360&apos;s
              expert development and design. Craft impactful solutions and
              designs that resonate with your audience.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-md border border-primary px-6 py-2.5 text-base font-semibold text-primary transition-colors hover:bg-accent"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xs transition-shadow hover:shadow-md text-left flex flex-col items-start"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f1ff]">
                <img src={pillar.icon} alt="" width={40} height={40} className="object-contain" />
              </div>
              
              <h3 className="mt-6 text-[17.5px] font-bold text-[#0c1e36]">
                {pillar.title}
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-slate-500 font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
