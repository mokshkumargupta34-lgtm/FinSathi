import React from "react";

/** Form field label. */
export function Label({ htmlFor, children, style, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        lineHeight: 1,
        color: "var(--text-primary)",
        ...style,
      }}
      {...props}
    >
      {children}
    </label>
  );
}
