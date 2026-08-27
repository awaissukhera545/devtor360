import { LEGAL_PAGES_DATA } from "@/lib/site-data";

export default function PrivacyPolicy() {
  const { privacyPolicy } = LEGAL_PAGES_DATA;

  return (
    <section aria-label="Privacy policy" className="bg-accent">
      <div className="mx-auto flex min-h-[18rem] max-w-content flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[22rem] sm:py-24 lg:min-h-[25rem] lg:px-8">
        <h1 className="text-[2rem] font-bold leading-tight text-foreground sm:text-[2.75rem] lg:text-display">
          {privacyPolicy.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {privacyPolicy.content}
          <a
            href={`mailto:${privacyPolicy.contactEmail}`}
            className="text-primary hover:underline"
          >
            {privacyPolicy.contactEmail}
          </a>
          {privacyPolicy.contactEmailSuffix}
        </p>
      </div>
    </section>
  );
}
