import { LEGAL_PAGES_DATA } from "@/lib/site-data";

export default function TermsAndConditions() {
  const { termsAndConditions } = LEGAL_PAGES_DATA;

  return (
    <section aria-label="Terms and conditions" className="bg-accent">
      <div className="mx-auto flex min-h-[18rem] max-w-content flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[22rem] sm:py-24 lg:min-h-[25rem] lg:px-8">
        <h1 className="text-[2rem] font-bold leading-tight text-foreground sm:text-[2.75rem] lg:text-display">
          {termsAndConditions.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {termsAndConditions.content}
          <a
            href={`mailto:${termsAndConditions.contactEmail}`}
            className="text-primary hover:underline"
          >
            {termsAndConditions.contactEmail}
          </a>
          {termsAndConditions.contactEmailSuffix}
        </p>
      </div>
    </section>
  );
}
