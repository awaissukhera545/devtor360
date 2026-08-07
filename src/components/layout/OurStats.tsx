'use client';
import { useEffect, useState } from "react";

interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

const STATS: StatItem[] = [
  { value: 8, label: "Years in Business", suffix: "+" },
  { value: 120, label: "Clients", suffix: "+" },
  { value: 137, label: "Projects", suffix: "+" },
  { value: 15, label: "Industries", suffix: "+" },
];

interface CountUpProps {
  target: number;
  duration?: number;
}

function CountUp({ target, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuad = progress * (2 - progress);
      setCount(Math.floor(easeOutQuad * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function OurStats() {
  return (
    <section aria-label="Our track record" className="border-t border-border">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4 lg:px-8">
        {STATS.map((stat, index) => {
          const isAlternativeColor = index === 1 || index === 3;
          
          return (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center">
              <p 
                className="text-stat font-medium"
                style={{
                  color: isAlternativeColor ? "var(--brand-700, #024890)" : "var(--primary)"
                }}
              >
                <CountUp target={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
