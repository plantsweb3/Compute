export function Footer() {
  return (
    <footer className="border-t border-[--green-border] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[--green] opacity-40 animate-pulse-green" />
          <span className="font-mono text-sm tracking-wider text-white/30">
            $COMPUTE
          </span>
        </div>

        <p className="max-w-md text-center font-mono text-xs leading-relaxed text-white/20 sm:text-right">
          $COMPUTE is a memecoin with no intrinsic value or expectation of
          financial return. Not financial advice. DYOR.
        </p>
      </div>
    </footer>
  );
}
