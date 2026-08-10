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
    <section aria-label="Our expertise" className="py-16 bg-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <div className="w-full lg:w-1/2">
            <p className="text-eyebrow uppercase text-primary">
              Our Expertise
            </p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-bold leading-tight text-foreground sm:text-[2.5rem] lg:text-display">
              Why Choose Us for Your Next Big <br className="hidden lg:block"/> Project?
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
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

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs transition-shadow hover:shadow-md text-center flex flex-col items-center sm:p-7 lg:items-start lg:p-8 lg:text-left"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f1ff] sm:h-16 sm:w-16">
                <img src={pillar.icon} alt="" width={40} height={40} className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
              </div>

              <h3 className="mt-5 text-[17.5px] font-bold text-[#0c1e36] lg:mt-6">
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
