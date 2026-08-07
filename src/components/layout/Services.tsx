type Service = {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    icon: "/icons/service-custom-software.svg",
    title: "Custom Software Development",
    description:
      "Enhance your business's efficiency and productivity with our Services' custom software solutions.",
  },
  {
    icon: "/icons/service-mvp-development.svg",
    title: "MVP Development",
    description:
      "Bring your ideas to life and maximize growth with our MVP development services for quick validation and feedback.",
    featured: true,
  },
  {
    icon: "/icons/service-design-services.svg",
    title: "Design Services",
    description:
      "Make a lasting impression with our Services' designs that resonate with your audience and reflect your brand.",
  },
  {
    icon: "/icons/service-web-app.svg",
    title: "Web App Development",
    description:
      "Stay ahead with our high-performance, user-friendly mobile and web apps for an exceptional user experience.",
  },
  {
    icon: "/icons/service-mobile-app.svg",
    title: "Mobile App Development",
    description:
      "Bring your ideas to life and maximize growth with our MVP development services for quick validation and feedback.",
  },
  {
    icon: "/icons/service-shopify.svg",
    title: "Shopify Development",
    description:
      "Boost sales with our Shopify services, creating optimized e-commerce stores that enhance engagement and drive growth.",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 text-left shadow-sm sm:p-7 lg:p-8">
      <img src={service.icon} alt="" className="h-14 w-auto self-start object-contain sm:h-16.5" />
      <h3 className="mt-5 text-xl font-bold text-foreground lg:mt-6">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground mb-5">
        {service.description}
      </p>
      <a
        href="/contact"
        className={
          service.featured
            ? "mt-auto inline-block self-start rounded-md bg-brand-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            : "mt-auto inline-block self-start rounded-md border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        }
      >
        Get Quote
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" aria-label="Our services" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 text-center lg:px-8">
        <p className="text-eyebrow uppercase text-primary">Our Services</p>
        <h2 className="mt-3 text-[1.875rem] font-bold leading-tight text-foreground sm:text-[2.25rem] sm:leading-[1.3] lg:text-[2.5rem] lg:leading-normal">
          We Help You To Grow Your Market
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Ready to take your business to the next level? Contact us today to
          discover how our Services helps you achieve your goals.
        </p>

        <div className="relative mt-10 sm:mt-12 lg:mt-16">
          <span className="absolute -left-6 -top-6 hidden h-20 w-20 rounded-lg bg-primary sm:block" />
          <span className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-lg bg-primary sm:block" />
          <span className="absolute -bottom-6 -left-6 hidden h-20 w-20 rounded-lg bg-primary sm:block" />
          <span className="absolute -bottom-6 -right-6 hidden h-20 w-20 rounded-lg bg-primary sm:block" />
          <div className="relative grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
