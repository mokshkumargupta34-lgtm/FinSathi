// Shared website-kit pieces: icons + PhoneMockup.
// Composes DS components from the compiled bundle.

const DS = window.FinSathiDesignSystem_400c38;

const MicIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" x2="12" y1="19" y2="22"></line>
  </svg>
);

const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const AppleLogo = ({ size = 30 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 384 512" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const PlayLogo = ({ size = 26 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

/** iPhone hardware mockup with the FinSathi in-app savings screen.
    Ring + counter are raw nodes (class hooks) so GSAP can scrub them. */
const PhoneMockup = React.forwardRef(function PhoneMockup(props, ref) {
  const { WidgetRow } = DS;
  const hwBtn = {
    position: "absolute", width: "3px",
    background: "linear-gradient(90deg, #404040 0%, #171717 100%)",
    boxShadow: "-2px 0 5px rgba(0,0,0,0.8), inset -1px 0 1px rgba(255,255,255,0.15), inset 1px 0 2px rgba(0,0,0,0.8)",
    borderRadius: "4px 0 0 4px",
  };
  return (
    <div
      ref={ref}
      style={{
        position: "relative", width: "280px", height: "580px", borderRadius: "48px",
        backgroundColor: "#111",
        boxShadow: "inset 0 0 0 2px #52525B, inset 0 0 0 7px #000, 0 40px 80px -15px rgba(0,0,0,0.9), 0 15px 25px -5px rgba(0,0,0,0.7)",
        transformStyle: "preserve-3d", willChange: "transform",
        display: "flex", flexDirection: "column",
      }}
    >
      <div aria-hidden="true" style={{ ...hwBtn, top: "120px", left: "-3px", height: "25px" }}></div>
      <div aria-hidden="true" style={{ ...hwBtn, top: "160px", left: "-3px", height: "45px" }}></div>
      <div aria-hidden="true" style={{ ...hwBtn, top: "220px", left: "-3px", height: "45px" }}></div>
      <div aria-hidden="true" style={{ ...hwBtn, top: "170px", right: "-3px", left: "auto", height: "70px", borderRadius: "0 4px 4px 0", transform: "scaleX(-1)" }}></div>

      <div style={{ position: "absolute", inset: "7px", background: "var(--bg-screen)", borderRadius: "40px", overflow: "hidden", boxShadow: "inset 0 0 15px rgba(0,0,0,1)", color: "#fff", zIndex: 10 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 40, pointerEvents: "none", background: "linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%)" }}></div>

        <div style={{ position: "absolute", top: "5px", left: "50%", transform: "translateX(-50%)", width: "100px", height: "28px", background: "#000", borderRadius: "999px", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 12px", boxShadow: "inset 0 -1px 2px rgba(255,255,255,0.1)" }}>
          <div className="fs-live-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px rgba(34,197,94,0.8)" }}></div>
        </div>

        <div style={{ position: "relative", width: "100%", height: "100%", padding: "48px 20px 32px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
          <div className="phone-widget" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "10px", color: "var(--silver-400)", textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", fontWeight: 700, marginBottom: "4px", fontFamily: "var(--font-body)" }}>Today</span>
              <span style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "var(--tracking-tight)", fontFamily: "var(--font-display)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>Savings</span>
            </div>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", color: "var(--silver-200)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "13px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 4px 12px rgba(0,0,0,0.5)", fontFamily: "var(--font-body)" }}>अ</div>
          </div>

          <div className="phone-widget" style={{ position: "relative", width: "176px", height: "176px", margin: "0 auto 28px", display: "flex", alignItems: "center", justifyContent: "center", filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.8))" }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
              <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12"></circle>
              <circle className="progress-ring" cx="88" cy="88" r="64" fill="none" stroke="var(--blue-500)" strokeWidth="12"></circle>
            </svg>
            <div style={{ textAlign: "center", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="counter-val" style={{ fontSize: "30px", fontWeight: 700, letterSpacing: "var(--tracking-tighter)", fontFamily: "var(--font-display)" }}>₹0</span>
              <span style={{ fontSize: "8px", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", fontWeight: 700, marginTop: "2px", fontFamily: "var(--font-body)" }}>Saved this year</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div className="phone-widget">
              <WidgetRow icon={<MicIcon />} title="Voice note saved" subtitle="Budget for Diwali" trailing="₹3,000" />
            </div>
            <div className="phone-widget">
              <WidgetRow icon={<CheckIcon />} tint="emerald" title="Goal reached" subtitle="Emergency fund" trailing="₹5,000" />
            </div>
          </div>

          <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "120px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "999px", boxShadow: "0 1px 2px rgba(0,0,0,0.5)" }}></div>
        </div>
      </div>
    </div>
  );
});

Object.assign(window, { MicIcon, CheckIcon, AppleLogo, PlayLogo, PhoneMockup });
