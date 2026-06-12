import React from "react";

const FS_INPUT_STYLE_ID = "fs-input-styles";
const fsInputCss = `
.fs-input {
  display: flex; height: 44px; width: 100%; box-sizing: border-box;
  border-radius: var(--radius-input);
  border: 1px solid var(--border-soft);
  background: rgba(255,255,255,0.02);
  padding: 12px;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-primary);
  box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.fs-input::placeholder { color: rgba(161,161,170,0.7); }
.fs-input:focus-visible { outline: none; background: rgba(255,255,255,0.06); border-color: var(--border-glass); }
.fs-input:disabled { cursor: not-allowed; opacity: 0.5; }
`;

function ensureFsInputStyles() {
  if (typeof document !== "undefined" && !document.getElementById(FS_INPUT_STYLE_ID)) {
    const s = document.createElement("style");
    s.id = FS_INPUT_STYLE_ID;
    s.textContent = fsInputCss;
    document.head.appendChild(s);
  }
}

/** Text input on dark surfaces — hairline border, quiet inset depth. */
export function Input({ label, id, className = "", style, ...props }) {
  ensureFsInputStyles();
  const reactId = React.useId();
  const inputId = id || reactId;
  const field = (
    <input id={inputId} className={`fs-input ${className}`.trim()} style={style} {...props} />
  );
  if (!label) return field;
  return (
    <div style={{ display: "grid", gap: "8px", width: "100%" }}>
      <label
        htmlFor={inputId}
        style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-sm)",
          fontWeight: "var(--weight-medium)", lineHeight: 1, color: "var(--text-primary)",
        }}
      >
        {label}
      </label>
      {field}
    </div>
  );
}
