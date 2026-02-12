"use client";

import { useState } from "react";
import { Spinner } from "@/components/spinner";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-[--green-border] bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <Spinner size={22} />
          <span className="font-mono text-sm font-semibold tracking-wider text-[--green]">
            $COMPUTE
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 sm:flex">
          <a
            href="#about"
            className="font-mono text-xs text-white/40 transition-colors hover:text-[--green]"
          >
            ABOUT
          </a>
          <a
            href="#demand"
            className="font-mono text-xs text-white/40 transition-colors hover:text-[--green]"
          >
            DEMAND
          </a>
          <a
            href="https://x.com/computesolana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline rounded-full px-4 py-1.5 font-mono text-xs"
          >
            TWITTER
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 sm:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-[--green] transition-all ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[--green] transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[--green] transition-all ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[--green-border] bg-[#050505]/95 px-6 py-4 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-white/40 transition-colors hover:text-[--green]"
            >
              ABOUT
            </a>
            <a
              href="#demand"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-white/40 transition-colors hover:text-[--green]"
            >
              DEMAND
            </a>
            <a
              href="https://x.com/computesolana"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-white/40 transition-colors hover:text-[--green]"
            >
              TWITTER
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
