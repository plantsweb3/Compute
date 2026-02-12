"use client";

import { useState } from "react";

export function ContractAddress() {
  const [copied, setCopied] = useState(false);
  const address = "7Yw7GgWjATtDcAMBP3ebR5yScFrHEUdior3udvVbpump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-3 text-center font-mono text-xs tracking-widest text-white/30">
        CONTRACT ADDRESS
      </div>
      <button
        onClick={handleCopy}
        className="glow-card w-full cursor-pointer rounded-lg px-6 py-4 text-center font-mono text-sm tracking-wider text-[--green] transition-all hover:bg-[rgba(57,255,20,0.05)]"
      >
        {copied ? "COPIED!" : address}
      </button>
    </div>
  );
}
