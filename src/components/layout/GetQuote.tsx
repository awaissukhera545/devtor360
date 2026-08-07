export default function GetQuote() {
  return (
    <section aria-label="Get a quote" className="py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-sky-gradient p-10 sm:flex-row sm:items-center sm:justify-between lg:p-7">
          <h2 className="max-w-6xl text-xl font-medium text-white sm:text-5xl">
            Just one click away to create a{' '}
            <br className="hidden sm:inline" />
            successful project
          </h2>
          <a
            href="/contact"
            className="inline-block text-center w-60 shrink-0 rounded-md bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
}
