interface SpinnerProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Spinner({ size = 24, strokeWidth = 4, className = "" }: SpinnerProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      width={size}
      height={size}
      className={`spinner ${className}`}
      style={{
        animation: "spin 1.8s linear infinite",
        filter: "drop-shadow(0 0 8px rgba(57,255,20,0.67))",
      }}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#39FF14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="94"
        strokeDashoffset="25"
      />
    </svg>
  );
}
