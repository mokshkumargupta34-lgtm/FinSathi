import React from "react";

/**
 * Circular progress ring with center metric — sweeps to `value` on mount.
 */
export function ProgressRing({
  value = 0.85,
  size = 176,
  strokeWidth = 12,
  color = "var(--blue-500)",
  metric,
  label,
  duration = 2000,
  style,
  ...props
}) {
  const r = (size - strokeWidth * 2 - 8) / 2;
  const c = 2 * Math.PI * r;
  const [offset, setOffset] = React.useState(c);

  React.useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setOffset(c * (1 - Math.max(0, Math.min(1, value)))))
    );
    return () => cancelAnimationFrame(id);
  }, [value, c]);

  return (
    <div
      style={{
        position: "relative", width: size, height: size,
        display: "flex", alignItems: "center", justifyContent: "center",
        filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.8))",
        ...style,
      }}
      {...props}
    >
      <svg width={size} height={size} style={{ position: "absolute", inset: 0 }} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth={strokeWidth}></circle>
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={offset}
          style={{
            transform: "rotate(-90deg)", transformOrigin: "center",
            transition: `stroke-dashoffset ${duration}ms var(--ease-in-out-power)`,
          }}
        ></circle>
      </svg>
      <div style={{ textAlign: "center", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {metric != null && (
          <span style={{ fontFamily: "var(--font-display)", fontSize: size / 4.4, fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-tighter)", color: "var(--white)" }}>
            {metric}
          </span>
        )}
        {label && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: Math.max(8, size / 22), color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", fontWeight: "var(--weight-bold)", marginTop: 2 }}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
