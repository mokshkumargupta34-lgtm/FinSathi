import React from "react";

/**
 * Neo-brutalist hard-shadow button — square corners, 2px border,
 * 4px offset shadow. The brand's high-emphasis counterpoint.
 */
export function BrutalButton({
  color,
  textColor,
  hasBorder = true,
  borderColor,
  hasShadow = true,
  shadowColor,
  radius = 0,
  children,
  style,
  className = "",
  ...props
}) {
  const [state, setState] = React.useState("rest"); // rest | hover | active

  const bg = color || "var(--bg-page)";
  const fg = textColor || "var(--text-primary)";
  const border = hasBorder ? `2px solid ${borderColor || "var(--text-primary)"}` : "none";
  const shadow = shadowColor || "var(--text-primary)";

  let transform = "translate(0, 0)";
  let boxShadow = hasShadow ? `4px 4px 0px ${shadow}` : "none";
  if (hasShadow && state === "hover") {
    transform = "translate(-2px, -2px)";
    boxShadow = `6px 6px 0px ${shadow}`;
  }
  if (state === "active") {
    if (hasShadow) {
      transform = "translate(4px, 4px)";
      boxShadow = "none";
    } else {
      transform = "scale(0.95)";
    }
  }

  return (
    <button
      type="button"
      className={className}
      onMouseEnter={() => setState("hover")}
      onMouseLeave={() => setState("rest")}
      onMouseDown={() => setState("active")}
      onMouseUp={() => setState("hover")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 24px",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-bold)",
        fontSize: "var(--text-body)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        flexShrink: 0,
        backgroundColor: bg,
        color: fg,
        border: border,
        borderRadius: `${radius}px`,
        boxShadow: boxShadow,
        transform: transform,
        transition: "all 0.2s ease-in-out",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
