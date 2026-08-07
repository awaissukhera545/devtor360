export default function PrivacyPolicy() {
  return (
    <section aria-label="Privacy policy" className="bg-accent">
      <div className="mx-auto flex min-h-[18rem] max-w-content flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[22rem] sm:py-24 lg:min-h-[25rem] lg:px-8">
        <h1 className="text-[2rem] font-bold leading-tight text-foreground sm:text-[2.75rem] lg:text-display">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Our full privacy policy is on its way. In the meantime, reach us at{" "}
          <a
            href="mailto:info@devtor360.com"
            className="text-primary hover:underline"
          >
            info@devtor360.com
          </a>{" "}
          with any questions about how we handle your data.
        </p>
      </div>
    </section>
  );
}
