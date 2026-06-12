// FinSathi dashboard navigation — dropdown mega-menu + language picker.
// FsdI18n is loaded by fsd-i18n.js (plain script) before this file runs.

/* ---------- Nav sub-components ---------- */

function FsdNavGridCard({ icon: Icon, title, desc, href }) {
  return (
    <a className="fsd-gcard" href={href}>
      <span className="fsd-gcard-grid" aria-hidden="true"></span>
      <span className="fsd-gcard-glow" aria-hidden="true"></span>
      <Icon size={20} style={{ color: "var(--blue-400)" }} />
      <span>
        <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>{title}</span>
        <span style={{ display: "block", marginTop: "6px", fontSize: "12px", lineHeight: 1.5, color: "var(--text-muted)" }}>{desc}</span>
      </span>
    </a>
  );
}

function FsdNavSmallItem({ icon: Icon, title, href }) {
  const { IcArrowRight } = window.FsdIcons;
  return (
    <a className="fsd-sitem" href={href}>
      <Icon size={15} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
      <span>{title}</span>
      <span className="fsd-arrow" aria-hidden="true"><IcArrowRight size={14} /></span>
    </a>
  );
}

const FSD_LANGS = [
  { code: "hi", label: "हिंदी", sub: "Hindi" },
  { code: "en", label: "English", sub: "English" },
  { code: "ta", label: "தமிழ்", sub: "Tamil" },
  { code: "mr", label: "मराठी", sub: "Marathi" },
];

function DashboardNav({ activePage = "dashboard" }) {
  const { IcChevronDown, IcGlobe, IcMic, IcReceipt, IcTarget, IcShieldCheck, IcBanknote, IcGraduationCap, IcSparkles, IcCheck } = window.FsdIcons;
  const [open, setOpen]         = React.useState(null);
  const [langOpen, setLangOpen] = React.useState(false);
  const [langCode, setLangCode] = React.useState(window.FsdI18n.getLang());
  const lang = FSD_LANGS.find((l) => l.code === langCode) || FSD_LANGS[1];
  React.useEffect(() => window.FsdI18n.subscribe(setLangCode), []);
  const rootRef  = React.useRef(null);

  React.useEffect(() => {
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) { setOpen(null); setLangOpen(false); }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Clicking the trigger navigates to the page; hovering opens the dropdown.
  const trigger = (id, label, href) => (
    <a
      className="fsd-trigger"
      href={href}
      data-open={open === id}
      data-active={activePage === id}
      onMouseEnter={() => setOpen(id)}
      aria-expanded={open === id}
    >
      {label} <IcChevronDown size={12} />
    </a>
  );

  return (
    <header className="fsd-nav" ref={rootRef}>
      <div className="fsd-nav-inner">
        <a href="index.html" style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "var(--tracking-tighter)", textTransform: "uppercase", fontSize: "18px", color: "var(--text-primary)", textDecoration: "none" }}>FinSathi</a>

        <nav className="fsd-nav-center" onMouseLeave={() => setOpen(null)} aria-label="Primary">
          <a className="fsd-trigger" data-active={activePage === "dashboard"} href="dashboard.html">Dashboard</a>
          {trigger("money", "Money", "money.html")}
          {trigger("grow", "Grow", "grow.html")}
          <a className="fsd-trigger" href="#sathi-ai">Sathi AI</a>

          {open === "money" && (
            <div className="fsd-menu-panel" style={{ width: "740px", display: "grid", gridTemplateColumns: "1fr 208px", gap: "14px" }} onMouseEnter={() => setOpen("money")}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", paddingRight: "14px", borderRight: "1px solid var(--border-hairline)" }}>
                <FsdNavGridCard icon={IcMic} title="Voice Log" desc="Speak to add income & expenses" href="dashboard.html#voice-log" />
                <FsdNavGridCard icon={IcReceipt} title="Transactions" desc="Your color-coded ledger" href="money.html" />
                <FsdNavGridCard icon={IcTarget} title="Savings Goals" desc="Targets with smart nudges" href="money.html#goals" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", justifyContent: "center" }}>
                <FsdNavSmallItem icon={IcSparkles} title="Ask Sathi AI" href="dashboard.html#sathi-ai" />
                <FsdNavSmallItem icon={IcGlobe} title="Language settings" href="dashboard.html#top" />
              </div>
            </div>
          )}

          {open === "grow" && (
            <div className="fsd-menu-panel" style={{ width: "560px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }} onMouseEnter={() => setOpen("grow")}>
              <FsdNavGridCard icon={IcShieldCheck} title="Trust Score" desc="Build your credit readiness" href="grow.html#trust-score" />
              <FsdNavGridCard icon={IcBanknote} title="Loan Marketplace" desc="Offers matched to your profile" href="grow.html#loans" />
              <FsdNavGridCard icon={IcGraduationCap} title="Sathi Academy" desc="Short lessons, easy habits" href="grow.html#academy" />
            </div>
          )}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", position: "relative" }}>
          <button
            className="fsd-trigger"
            data-open={langOpen}
            onClick={() => { setLangOpen(!langOpen); setOpen(null); }}
            aria-expanded={langOpen}
            style={{ gap: "8px" }}
          >
            <IcGlobe size={15} />
            <span style={{ fontFamily: lang.code === "en" ? "var(--font-body)" : "var(--font-devanagari)" }}>{lang.label}</span>
            <IcChevronDown size={12} />
          </button>

          {langOpen && (
            <div className="fsd-lang-panel">
              {FSD_LANGS.map((l) => (
                <button key={l.code} className="fsd-lang-item" data-active={l.code === lang.code} onClick={() => { window.FsdI18n.setLang(l.code); setLangOpen(false); }}>
                  <span style={{ fontFamily: l.code === "en" ? "var(--font-body)" : "var(--font-devanagari)", minWidth: "58px", textAlign: "left" }}>{l.label}</span>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{l.sub}</span>
                  <span style={{ marginLeft: "auto", display: "flex", color: "var(--emerald-400)", opacity: l.code === lang.code ? 1 : 0 }}><IcCheck size={13} /></span>
                </button>
              ))}
            </div>
          )}

          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", color: "var(--silver-200)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 4px 12px rgba(0,0,0,0.5)", fontFamily: "var(--font-devanagari)", cursor: "pointer" }} title="Asha Patel">अ</div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { DashboardNav });
