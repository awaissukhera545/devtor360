import type { Metadata } from "next";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";
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
  const { hero, getInTouch, contactDetails, whatHappensNext } = CONTACT_PAGE_DATA;

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

      <section aria-label="Contact details and form" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-center text-eyebrow uppercase text-primary lg:text-left">
                {getInTouch.eyebrow}
              </p>
              <h2 className="mt-3 text-center text-[1.875rem] font-bold leading-tight text-foreground sm:text-[2.25rem] lg:text-left lg:text-[2.5rem]">
                {getInTouch.headline}
              </h2>
              <p className="mt-4 text-center text-base leading-relaxed text-muted-foreground lg:text-left">
                {getInTouch.description}
              </p>

              <div className="mt-8 space-y-4 sm:space-y-5 lg:mt-10">
                {contactDetails.map((detail) => {
                  const Icon = ICON_MAP[detail.iconName] || Mail;
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
                  {whatHappensNext.headline}
                </h3>
                <ol className="mt-5 space-y-5">
                  {whatHappensNext.steps.map((step, index) => (
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

      <ContactMap />
      <FAQs />
    </>
  );
}
