import React from "react";

const ROW_TINTS = {
  blue: { from: "rgba(59,130,246,0.2)", to: "rgba(37,99,235,0.05)", border: "rgba(96,165,250,0.2)", color: "#60A5FA" },
  emerald: { from: "rgba(16,185,129,0.2)", to: "rgba(5,150,105,0.05)", border: "rgba(52,211,153,0.2)", color: "#34D399" },
};

/**
 * Inset widget row for dark in-app screens — tinted icon well + content.
 */
export function WidgetRow({ icon, tint = "blue", title, subtitle, trailing, style, children, ...props }) {
  const t = ROW_TINTS[tint] || ROW_TINTS.blue;
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: "12px",
        padding: "12px",
        background: "var(--gradient-widget)",
        boxShadow: "var(--shadow-widget)",
        border: "1px solid rgba(255,255,255,0.03)",
        borderRadius: "var(--radius-widget)",
        ...style,
      }}
      {...props}
    >
      {icon && (
        <div
          style={{
            width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0,
            background: `linear-gradient(135deg, ${t.from} 0%, ${t.to} 100%)`,
            border: `1px solid ${t.border}`,
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: t.color,
          }}
        >
          {icon}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <p style={{ margin: 0, color: "var(--white)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {title}
          </p>
        )}
        {subtitle && (
          <p style={{ margin: 0, color: "var(--text-muted)", fontFamily: "var(--font-body)", fontSize: "var(--text-xs)" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
      {trailing && (
        <div style={{ flexShrink: 0, color: "var(--text-secondary)", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
          {trailing}
        </div>
      )}
    </div>
  );
}
