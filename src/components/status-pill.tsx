"use client";

import { useEffect, useState, useMemo } from "react";

const messages = [
  "COMPUTING...",
  "PROCESSING...",
  "ALLOCATING GPU RESOURCES...",
  "TRAINING MODEL...",
  "RENDERING FRAMES...",
  "VALIDATING BLOCKS...",
  "QUEUING INFERENCE...",
  "SCALING CLUSTERS...",
  "REQUESTING COMPUTE...",
  "LOADING WEIGHTS...",
  "DEPLOYING INSTANCES...",
  "ALLOCATING MEMORY...",
  "SYNCHRONIZING NODES...",
  "OPTIMIZING THROUGHPUT...",
  "ACQUIRING MORE GPUs...",
  "OUTBIDDING OPENAI FOR COMPUTE...",
  "RESTARTING NUCLEAR REACTOR...",
  "COOLING SERVERS...",
  "BEGGING TSMC FOR WAFERS...",
  "STOCKPILING CHIPS...",
  "CONVERTING CORNFIELDS TO DATA CENTERS...",
  "DIVERTING POWER FROM GRID...",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function StatusPill() {
  const order = useMemo(() => shuffle(messages), []);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);

      // Swap text after fade out, then fade in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % order.length);
        setVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [order]);

  return (
    <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[rgba(57,255,20,0.25)] bg-[rgba(5,5,5,0.6)] px-4 py-1.5 backdrop-blur-sm">
      <div
        className="h-2 w-2 shrink-0 rounded-full animate-pulse-green"
        style={{
          background: "#39FF14",
          boxShadow:
            "0 0 8px rgba(57,255,20,0.6), 0 0 16px rgba(57,255,20,0.3)",
        }}
      />
      <span
        className="font-mono text-xs font-semibold tracking-wider transition-opacity duration-300"
        style={{
          color: "#39FF14",
          textShadow: "0 0 8px rgba(57,255,20,0.5)",
          opacity: visible ? 1 : 0,
          minWidth: "16rem",
        }}
      >
        {order[index]}
      </span>
    </div>
  );
}
