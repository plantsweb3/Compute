interface SpinnerProps {
  size?: number;
  className?: string;
}

// r=20, circumference = 2 * π * 20 ≈ 125.66
// 70% of arc = ~88, 30% gap = ~37.7
const CIRCUMFERENCE = 125.66;
const ARC_LENGTH = CIRCUMFERENCE * 0.7; // 87.96
const GAP = CIRCUMFERENCE - ARC_LENGTH; // 37.7

export function Spinner({ size = 24, className = "" }: SpinnerProps) {
  const id = `spinner-grad-${size}`;

  return (
    <svg
      viewBox="0 0 50 50"
      width={size}
      height={size}
      className={className}
      style={{
        animation: "spin 1.8s linear infinite",
        filter: "drop-shadow(0 0 8px rgba(57,255,20,0.67))",
      }}
    >
      <defs>
        {/* Gradient that tapers opacity along the arc */}
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="25" y1="5" x2="5" y2="35">
          <stop offset="0%" stopColor="#39FF14" stopOpacity="1" />
          <stop offset="100%" stopColor="#39FF14" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray={`${ARC_LENGTH} ${GAP}`}
      />
    </svg>
  );
}
