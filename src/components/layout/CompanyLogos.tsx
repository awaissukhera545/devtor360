import Image from "next/image";
import { CLIENTS_DATA } from "@/lib/site-data";

// Triple the list for an infinite smooth loop
const ITEMS = [
  ...CLIENTS_DATA.clients,
  ...CLIENTS_DATA.clients,
  ...CLIENTS_DATA.clients,
];

export default function CompanyLogos() {
  return (
    <section aria-label="Trusted by" className="py-6 sm:py-8">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* ── Minimalist Logos Marquee ───────────────────────────────── */}
        <div className="rounded-2xl border border-border bg-white py-4 px-4 shadow-xs sm:py-5 sm:px-6">
          <div className="marquee-fade-x overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12 lg:gap-16">
              {ITEMS.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center grayscale opacity-65 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="h-7 w-auto shrink-0 sm:h-9 lg:h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Subtitle Below Box ──────────────────────────────────────── */}
        <div className="mt-3.5 flex items-center justify-center gap-2 text-center">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
            {CLIENTS_DATA.eyebrow}
          </p>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
