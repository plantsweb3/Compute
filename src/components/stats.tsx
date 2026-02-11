"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "$1T+",
    label: "AI Infrastructure Spend by 2027",
    sublabel: "Projected global investment",
  },
  {
    value: "10x",
    label: "GPU Demand Growth",
    sublabel: "Year over year since 2023",
  },
  {
    value: "2.5GW",
    label: "New Data Center Power",
    sublabel: "Being built this year alone",
  },
  {
    value: "\u221E",
    label: "Compute Demand",
    sublabel: "Always exceeds supply",
  },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="glow-card rounded-xl p-6 sm:p-8"
            style={{
              animationDelay: `${i * 150}ms`,
              ...(visible
                ? {
                    animation: `fade-up 0.6s ease-out ${i * 150}ms forwards`,
                  }
                : { opacity: 0 }),
            }}
          >
            <div className="font-mono text-3xl font-bold tracking-tight text-[--green] sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm font-medium text-white/60">
              {stat.label}
            </div>
            <div className="mt-1 font-mono text-xs text-white/25">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
