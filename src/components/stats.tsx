"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "$602B",
    label: "Hyperscaler Capex 2026",
    sublabel: "36% increase year over year",
  },
  {
    value: "$3T",
    label: "Infrastructure Needed by 2030",
    sublabel: "Once-in-a-generation supercycle",
  },
  {
    value: "40%",
    label: "NVIDIA Gaming GPU Cuts",
    sublabel: "All silicon diverted to AI",
  },
  {
    value: "95%",
    label: "Data Center Occupancy",
    sublabel: "Demand exceeds every facility built",
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
