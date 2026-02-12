interface SpinnerProps {
  size?: number;
  className?: string;
}

export function Spinner({ size = 24, className = "" }: SpinnerProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        animation: "spin 1.8s linear infinite",
        filter: "drop-shadow(0 0 8px rgba(57,255,20,0.67))",
      }}
    >
      <svg
        viewBox="0 0 50 50"
        width={size}
        height={size}
        style={{
          // Conic gradient mask: taper from near-transparent at the tail
          // to full opacity at the leading edge, then invisible for the gap.
          // Extra 1% of solid at the start lets strokeLinecap="round" show fully.
          maskImage:
            "conic-gradient(from 0deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,1) 66%, rgba(0,0,0,1) 71%, transparent 71.5%, transparent 100%)",
          WebkitMaskImage:
            "conic-gradient(from 0deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,1) 66%, rgba(0,0,0,1) 71%, transparent 71.5%, transparent 100%)",
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#39FF14"
          strokeWidth={8.5}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
