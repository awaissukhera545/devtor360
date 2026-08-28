import type { Metadata } from "next";
import { Mail, Phone, Clock, MessageSquare, Calendar, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/layout/ContactForm";
import ContactMap from "@/components/layout/ContactMap";
import FAQs from "@/components/layout/FAQs";
import { CONTACT_PAGE_DATA } from "@/lib/site-data";

export const metadata: Metadata = {
  title: CONTACT_PAGE_DATA.meta.title,
  description: CONTACT_PAGE_DATA.meta.description,
};

const ICON_MAP = {
  Mail,
  Phone,
  Clock,
};

export default function Contact() {
  const { hero, getInTouch, contactDetails } = CONTACT_PAGE_DATA;

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
              {hero.badge}
            </span>
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-[2rem] font-bold leading-tight text-foreground sm:mt-6 sm:text-[2.75rem] lg:text-display">
            {hero.headlinePrefix}
            <span className="text-brand-500">{hero.headlineHighlight}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6">
            {hero.description}
          </p>
        </div>
      </section>

      <section aria-label="Contact details and form" className="pt-10 pb-4 sm:pt-14 sm:pb-6 lg:pt-16 lg:pb-8">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-10 items-stretch">
            {/* Left Column: Details & SLA */}
            <div className="flex flex-col justify-between h-full py-1">
              <div>
                <p className="text-center text-xs font-bold font-mono uppercase tracking-widest text-primary lg:text-left">
                  {getInTouch.eyebrow}
                </p>
                <h2 className="mt-2 text-center text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-left lg:text-[2.2rem]">
                  {getInTouch.headline}
                </h2>
                <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground lg:text-left">
                  {getInTouch.description}
                </p>
              </div>

              {/* Contact Details Cards — evenly distributed */}
              {contactDetails.map((detail) => {
                const Icon = ICON_MAP[detail.iconName] || Mail;
                return (
                  <div
                    key={detail.label}
                    className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 shadow-xs transition-all hover:border-primary/40 hover:shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {detail.label}
                      </h3>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-0.5 block text-base font-bold text-foreground hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-base font-bold text-foreground">
                          {detail.value}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Bottom Feature Card: Version 4 (Instant Booking) */}
              <div className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-4.5 shadow-xs">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <h4 className="text-xs font-bold text-foreground">
                    Need an Immediate Discussion?
                  </h4>
                </div>

                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Speak directly with our Lead Technical Architect for a free 15-minute scope &amp; architecture assessment.
                </p>

                <a
                  href="#contact-form"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-brand-700 transition-colors group cursor-pointer"
                >
                  <span>Schedule a 15-Min Discovery Call</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
      <FAQs />
    </>
  );
}
