"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function DemandSupply() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [demand, setDemand] = useState(95);
  const [supply, setSupply] = useState(30);
  const [initialGrown, setInitialGrown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          // Let the initial grow animation finish before starting fluctuations
          setTimeout(() => setInitialGrown(true), 1800);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fluctuate values once the initial grow is done
  useEffect(() => {
    if (!initialGrown) return;

    const interval = setInterval(() => {
      // Demand: 95-99
      setDemand((prev) => {
        const delta = (Math.random() - 0.4) * 2; // slight upward bias
        return Math.round(Math.min(99, Math.max(95, prev + delta)));
      });
      // Supply: 33-43
      setSupply((prev) => {
        const delta = (Math.random() - 0.5) * 3;
        return Math.round(Math.min(43, Math.max(33, prev + delta)));
      });
    }, 600);

    return () => clearInterval(interval);
  }, [initialGrown]);

  return (
    <div ref={ref} className="glow-card rounded-xl p-8 sm:p-12">
      <div className="mb-8 flex items-center gap-2">
        <div
          className="h-1.5 w-1.5 rounded-full animate-pulse-green"
          style={{ background: "#39FF14" }}
        />
        <span className="font-mono text-xs text-[--green] opacity-50">
          REAL-TIME COMPUTE MARKET
        </span>
      </div>

      <div className="space-y-8">
        {/* Demand bar */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-sm font-semibold text-[--green]">
              DEMAND
            </span>
            <span
              className="font-mono text-xs tabular-nums"
              style={{ color: "#39FF14", textShadow: "0 0 6px rgba(57,255,20,0.4)" }}
            >
              {visible ? demand : 0}%
            </span>
          </div>
          <div className="h-8 w-full overflow-hidden rounded-sm bg-[rgba(57,255,20,0.05)]">
            <div
              className="h-full rounded-sm"
              style={{
                width: visible ? `${initialGrown ? demand : 0}%` : "0%",
                background:
                  "linear-gradient(90deg, rgba(57,255,20,0.3), rgba(57,255,20,0.8))",
                boxShadow:
                  "0 0 20px rgba(57,255,20,0.3), 0 0 60px rgba(57,255,20,0.1)",
                transition: initialGrown
                  ? "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
                animation: visible && !initialGrown
                  ? "grow-right 1.5s ease-out forwards"
                  : "none",
                ["--target-width" as string]: "95%",
              }}
            />
          </div>
        </div>

        {/* Supply bar */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-sm font-semibold text-white/40">
              SUPPLY
            </span>
            <span className="font-mono text-xs tabular-nums text-white/30">
              {visible ? supply : 0}%
            </span>
          </div>
          <div className="h-8 w-full overflow-hidden rounded-sm bg-[rgba(57,255,20,0.05)]">
            <div
              className="h-full rounded-sm"
              style={{
                width: visible ? `${initialGrown ? supply : 0}%` : "0%",
                background:
                  "linear-gradient(90deg, rgba(57,255,20,0.1), rgba(57,255,20,0.25))",
                transition: initialGrown
                  ? "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
                animation: visible && !initialGrown
                  ? "grow-right 1.5s ease-out 0.3s forwards"
                  : "none",
                ["--target-width" as string]: "30%",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[--green-border] pt-6 text-center">
        <p className="font-mono text-sm text-[--green] opacity-70">
          The gap is only getting wider.
        </p>
      </div>
    </div>
  );
}
