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
    <section aria-label="Trusted by" className="standalone-4k-hide bg-white py-10 sm:py-14">
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
      </div>
    </section>
  );
}
