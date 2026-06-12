import React from "react";

/**
 * Silver matte gradient display text — the brand's physical-material
 * treatment for hero lines and the wordmark.
 */
export function SilverText({
  as = "span",
  shadow = true,
  uppercase = false,
  className = "",
  style,
  children,
  ...props
}) {
  return React.createElement(
    as,
    {
      className,
      style: {
        background: "var(--gradient-silver)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        transform: "translateZ(0)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        letterSpacing: "var(--tracking-tighter)",
        textTransform: uppercase ? "uppercase" : "none",
        filter: shadow
          ? "drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) drop-shadow(0px 4px 8px rgba(0,0,0,0.6))"
          : "none",
        margin: 0,
        ...style,
      },
      ...props,
    },
    children
  );
}
