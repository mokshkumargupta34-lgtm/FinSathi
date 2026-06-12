import React from "react";

/**
 * The signature deep navy physical card with optional mouse-following sheen.
 */
export function DeepCard({ sheen = true, radius, style, children, ...props }) {
  const ref = React.useRef(null);

  const onMouseMove = (e) => {
    if (!sheen || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--gradient-card)",
        boxShadow: "var(--shadow-card-deep)",
        border: "1px solid var(--border-hairline)",
        borderRadius: radius || "var(--radius-card)",
        ...style,
      }}
      {...props}
    >
      {children}
      {sheen && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, borderRadius: "inherit",
            pointerEvents: "none", zIndex: 50,
            background:
              "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%)",
            mixBlendMode: "screen",
          }}
        ></div>
      )}
    </div>
  );
}
