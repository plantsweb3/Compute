"use client";

import { useEffect, useRef, useState } from "react";

const entries = [
  {
    year: "2025",
    entity: "INDUSTRY",
    detail: "$580B spent on AI infrastructure in a single year",
  },
  {
    year: "SEP 25",
    entity: "STARGATE",
    detail: "$500B joint venture breaks ground in Abilene, TX",
  },
  {
    year: "NOV 25",
    entity: "MICROSOFT",
    detail: "$16B deal to restart Three Mile Island nuclear plant",
  },
  {
    year: "DEC 25",
    entity: "OPENAI",
    detail: "$300B Oracle + $38B AWS deals to secure compute",
  },
  {
    year: "JAN 26",
    entity: "NVIDIA",
    detail: "Gaming GPUs shelved entirely, all silicon diverted to AI",
  },
];

export function WhosBuying() {
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
    <div ref={ref} className="space-y-3">
      {entries.map((entry, i) => (
        <div
          key={entry.entity}
          className="glow-card rounded-lg px-5 py-4 sm:px-6"
          style={
            visible
              ? {
                  animation: `fade-up 0.5s ease-out ${i * 100}ms forwards`,
                }
              : { opacity: 0 }
          }
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <span className="shrink-0 font-mono text-xs" style={{ color: "#39FF14", textShadow: "0 0 6px rgba(57,255,20,0.3)" }}>
              [{entry.year}]
            </span>
            <span className="font-mono text-sm font-bold tracking-wider" style={{ color: "#39FF14", textShadow: "0 0 10px rgba(57,255,20,0.4)" }}>
              {entry.entity}
            </span>
            <span className="font-mono text-sm text-white/60">
              &mdash; {entry.detail}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
