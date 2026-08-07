export default function GetQuote() {
  return (
    <section aria-label="Get a quote" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-sky-gradient p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-7">
          <h2 className="max-w-6xl text-2xl font-medium text-white sm:text-3xl lg:text-5xl">
            Just one click away to create a{' '}
            <br className="hidden lg:inline" />
            successful project
          </h2>
          <a
            href="/contact"
            className="inline-block w-full shrink-0 rounded-md bg-white px-8 py-3.5 text-center text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50 sm:w-60"
          >
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
}
