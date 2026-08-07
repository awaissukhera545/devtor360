import Image from "next/image";

const CLIENTS = [
  { name: "Flop Hero", src: "/icons/clients/flop-hero.svg", width: 495, height: 168 },
  { name: "localised", src: "/icons/clients/localised.svg", width: 416, height: 168 },
  { name: "emirates post", src: "/icons/clients/emirates-post.svg", width: 285, height: 168 },
  { name: "careernetwork.co", src: "/icons/clients/careernetwork.svg", width: 649, height: 168 },
  { name: "NO HESI", src: "/icons/clients/no-hesi.svg", width: 371, height: 168 },
  { name: "Snoonu", src: "/icons/clients/snoonu.svg", width: 509, height: 168 },
];

export default function CompanyLogos() {
  return (
    <section aria-label="Trusted by" className="overflow-hidden bg-subtle">
      <div className="flex w-max animate-marquee items-center gap-16 py-10">
        {[...CLIENTS, ...CLIENTS].map((client, index) => (
          <Image
            key={`${client.name}-${index}`}
            src={client.src}
            alt={client.name}
            width={client.width}
            height={client.height}
            className="h-14 w-auto shrink-0 opacity-70"
          />
        ))}
      </div>
    </section>
  );
}
