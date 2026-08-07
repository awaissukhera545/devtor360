import type { Metadata } from "next";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/layout/ContactForm";
import FAQs from "@/components/layout/FAQs";

export const metadata: Metadata = {
  title: "Contact Us | Devtor360",
  description:
    "Talk to the Devtor360 team about your next digital product. Get a free proposal within one business day.",
};

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@devtor360.com",
    href: "mailto:info@devtor360.com",
    description: "Drop us a line anytime",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1-912-345-6789",
    href: "tel:+19123456789",
    description: "Mon to Fri, we are on the line",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24 Hours A Day",
    href: null,
    description: "5 days a week",
  },
];

const PROCESS_STEPS = [
  {
    title: "We review your brief",
    description:
      "A specialist reads through your goals and prepares the right questions.",
  },
  {
    title: "We schedule a discovery call",
    description:
      "A free 30 minute session to align on scope, timeline, and budget.",
  },
  {
    title: "You receive a proposal",
    description:
      "A tailored plan with milestones, team structure, and clear pricing.",
  },
];

export default function Contact() {
  return (
    <>
      <section
        aria-label="Contact Devtor360"
        className="bg-linear-to-r from-[#f7f8fb] via-[#eff4fd] to-[#f7f8fb]"
      >
        <div className="mx-auto max-w-content px-6 py-14 text-center sm:py-16 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 py-2 pl-2 pr-4">
            <span className="flex h-6 items-center justify-center rounded-full bg-brand-700 px-2.5">
              <MessageSquare size={12} className="fill-white text-white" />
            </span>
            <span className="text-sm font-medium text-brand-700">
              We reply within one business day
            </span>
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-[2rem] font-bold leading-tight text-foreground sm:mt-6 sm:text-[2.75rem] lg:text-display">
            Let&rsquo;s Build Something{" "}
            <span className="text-brand-500">Exceptional</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6">
            Tell us about your project and our team will map out the fastest
            path from idea to launch. No pressure, no obligation &mdash; just a
            clear plan you can act on.
          </p>
        </div>
      </section>

      <section aria-label="Contact details and form" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-eyebrow uppercase text-primary">Get In Touch</p>
              <h2 className="mt-3 text-[1.875rem] font-bold leading-tight text-foreground sm:text-[2.25rem] lg:text-[2.5rem]">
                Talk to a Real Human
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you need a full product team or a second opinion on an
                existing build, we are happy to help you figure out the next
                step.
              </p>

              <div className="mt-8 space-y-4 sm:space-y-5 lg:mt-10">
                {CONTACT_DETAILS.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-xs transition-shadow hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-foreground">
                          {detail.label}
                        </h3>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="mt-1 block text-lg font-semibold text-primary hover:text-brand-600"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-lg font-semibold text-brand-700">
                            {detail.value}
                          </p>
                        )}
                        <p className="mt-1 text-sm text-muted-foreground">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border-b-4 border-navy-700 bg-accent p-6 sm:p-7 lg:mt-10">
                <h3 className="text-xl font-bold text-foreground">
                  What Happens Next
                </h3>
                <ol className="mt-5 space-y-5">
                  {PROCESS_STEPS.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <FAQs />
    </>
  );
}
