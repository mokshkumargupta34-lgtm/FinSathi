import React from "react";
import { Input } from "./Input.jsx";

const EyeIcon = ({ off }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {off ? (
      <>
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <line x1="2" x2="22" y1="2" y2="22" />
      </>
    ) : (
      <>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

/** Password input with show/hide eye toggle (Lucide eye / eye-off). */
export function PasswordInput({ label = "Password", style, ...props }) {
  const [show, setShow] = React.useState(false);
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Input
        label={label}
        type={show ? "text" : "password"}
        style={{ paddingRight: "40px", ...style }}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow((p) => !p)}
        aria-label={show ? "Hide password" : "Show password"}
        style={{
          position: "absolute", right: 0, bottom: 0, height: "44px", width: "40px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "none", border: "none", cursor: "pointer",
          color: "rgba(161,161,170,0.8)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(161,161,170,0.8)")}
      >
        <EyeIcon off={show} />
      </button>
    </div>
  );
}
