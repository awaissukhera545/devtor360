import Image from "next/image";

const TECH_STACK = [
  { name: "Ionic", src: "/icons/tech/ionic.svg", width: 222, height: 140 },
  { name: "Python", src: "/icons/tech/python.svg", width: 313, height: 140 },
  { name: "Photoshop", src: "/icons/tech/photoshop.svg", width: 105, height: 140 },
  { name: "Node.js", src: "/icons/tech/nodejs.svg", width: 254, height: 140 },
  { name: "Swift", src: "/icons/tech/swift.svg", width: 255, height: 140 },
  { name: "Illustrator", src: "/icons/tech/illustrator.svg", width: 112, height: 140 },
  { name: "Google Cloud", src: "/icons/tech/google-cloud.svg", width: 375, height: 140 },
  { name: "Java", src: "/icons/tech/java.svg", width: 86, height: 140 },
];
export default function TechStack() {
  return (

    <>
      <div className="overflow-hidden bg-muted">
        <div className="flex w-max animate-marquee items-center gap-10 py-7 sm:gap-12 sm:py-8 lg:gap-16 lg:py-10">
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <Image
              key={`${tech.name}-${index}`}
              src={tech.src}
              alt={tech.name}
              width={tech.width}
              height={tech.height}
              className="h-12 w-auto shrink-0 opacity-70 sm:h-14 lg:h-17.5"
            />
          ))}
        </div>
      </div>
    </>
  );
}
