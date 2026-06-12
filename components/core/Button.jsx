import React from "react";

const FS_BUTTON_STYLE_ID = "fs-button-styles";
const fsButtonCss = `
.fs-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 12px;
  font-family: var(--font-body); font-weight: var(--weight-bold);
  border: none; cursor: pointer; text-decoration: none;
  border-radius: var(--radius-btn);
  transition: all var(--duration-press) var(--ease-tactile);
  white-space: nowrap;
}
.fs-btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.fs-btn:disabled { opacity: 0.5; pointer-events: none; }

.fs-btn--sm { padding: 10px 20px; font-size: var(--text-sm); border-radius: 14px; }
.fs-btn--md { padding: 14px 28px; font-size: var(--text-body); }
.fs-btn--lg { padding: 16px 32px; font-size: var(--text-lg); }

.fs-btn--light { background: var(--gradient-btn-light); color: var(--text-on-light); box-shadow: var(--shadow-btn-light); }
.fs-btn--light:hover { transform: translateY(-3px); box-shadow: var(--shadow-btn-light-hover); }
.fs-btn--light:active { transform: translateY(1px); background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%); box-shadow: var(--shadow-btn-light-active); }

.fs-btn--dark { background: var(--gradient-btn-dark); color: var(--white); box-shadow: var(--shadow-btn-dark); }
.fs-btn--dark:hover { transform: translateY(-3px); background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%); box-shadow: var(--shadow-btn-dark-hover); }
.fs-btn--dark:active { transform: translateY(1px); background: var(--zinc-900); box-shadow: var(--shadow-btn-dark-active); }

.fs-btn--ghost { background: transparent; color: var(--text-primary); box-shadow: 0 0 0 1px var(--border-soft); }
.fs-btn--ghost:hover { background: rgba(255,255,255,0.06); transform: translateY(-1px); }
.fs-btn--ghost:active { transform: translateY(1px); background: rgba(255,255,255,0.03); }

.fs-btn--link { background: none; box-shadow: none; color: var(--text-primary); padding: 0; font-weight: var(--weight-medium); }
.fs-btn--link:hover { text-decoration: underline; text-underline-offset: 4px; }
`;

function ensureFsButtonStyles() {
  if (typeof document !== "undefined" && !document.getElementById(FS_BUTTON_STYLE_ID)) {
    const s = document.createElement("style");
    s.id = FS_BUTTON_STYLE_ID;
    s.textContent = fsButtonCss;
    document.head.appendChild(s);
  }
}

/** Tactile skeuomorphic button — light & dark physical materials. */
export function Button({
  variant = "light",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) {
  ensureFsButtonStyles();
  const cls = `fs-btn fs-btn--${variant} fs-btn--${size} ${className}`.trim();
  if (href) {
    return (
      <a href={href} className={cls} {...props}>{children}</a>
    );
  }
  return (
    <button type="button" className={cls} {...props}>{children}</button>
  );
}
