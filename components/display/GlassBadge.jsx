import React from "react";

const TINTS = {
  blue: { from: "rgba(59,130,246,0.2)", to: "rgba(30,58,138,0.1)", border: "rgba(96,165,250,0.3)" },
  indigo: { from: "rgba(99,102,241,0.2)", to: "rgba(49,46,129,0.1)", border: "rgba(129,140,248,0.3)" },
  emerald: { from: "rgba(16,185,129,0.2)", to: "rgba(6,78,59,0.1)", border: "rgba(52,211,153,0.3)" },
};

/**
 * Frosted glass floating badge — emoji/icon well + title + quiet subtitle.
 * Floats above phone mockups and imagery.
 */
export function GlassBadge({ icon, title, subtitle, tint = "blue", style, ...props }) {
  const t = TINTS[tint] || TINTS.blue;
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: "16px",
        padding: "16px",
        background: "var(--gradient-glass)",
        backdropFilter: "blur(var(--blur-glass))",
        WebkitBackdropFilter: "blur(var(--blur-glass))",
        boxShadow: "var(--shadow-glass)",
        borderRadius: "var(--radius-badge)",
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          width: "40px", height: "40px", borderRadius: "var(--radius-pill)",
          background: `linear-gradient(180deg, ${t.from} 0%, ${t.to} 100%)`,
          border: `1px solid ${t.border}`,
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "20px", flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <p style={{ margin: 0, color: "var(--white)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-tight)" }}>
          {title}
        </p>
        {subtitle && (
          <p style={{ margin: 0, color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: "var(--weight-medium)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
