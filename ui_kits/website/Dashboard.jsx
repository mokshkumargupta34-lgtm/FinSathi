// FinSathi post-login dashboard — voice-first logging, ledger, goals,
// trust score, academy, loan marketplace, Sathi AI, multi-language.
// Composes DS components from the compiled bundle.

const fsdDS = window.FinSathiDesignSystem_400c38;

/* ---------- Shared bits ---------- */

function FsdIconWell({ icon: Icon, tone = "blue", size = 34 }) {
  const tones = {
    blue:    { bg: "rgba(59,130,246,0.12)",  fg: "var(--blue-400)" },
    emerald: { bg: "rgba(16,185,129,0.12)",  fg: "var(--emerald-400)" },
    red:     { bg: "rgba(239,68,68,0.12)",   fg: "#F87171" },
    zinc:    { bg: "rgba(255,255,255,0.06)", fg: "var(--text-muted)" },
  };
  const t = tones[tone] || tones.blue;
  return (
    <span style={{ width: size, height: size, flexShrink: 0, borderRadius: "10px", background: t.bg, color: t.fg, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), inset 0 -1px 1px rgba(0,0,0,0.4)" }}>
      <Icon size={16} />
    </span>
  );
}

function FsdPanelHead({ kicker, title, trailing }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <span className="dash-kicker">{kicker}</span>
        <h2 className="dash-h">{title}</h2>
      </div>
      {trailing}
    </div>
  );
}

/* ---------- Modal shell ---------- */

function FsdModal({ onClose, children }) {
  React.useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(5,9,20,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ background: "linear-gradient(145deg, #162C6D 0%, #0A101D 100%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "28px", padding: "32px", maxWidth: "460px", width: "100%", boxShadow: "0 40px 120px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)" }} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

function LoanDetailModal({ loan, onClose }) {
  const { BrutalButton } = fsdDS;
  const [applied, setApplied] = React.useState(false);
  const totalPayable = loan.emi * loan.months;
  const totalInterest = totalPayable - loan.principal;
  const stats = [
    { label: "Loan amount",  value: `₹${loan.principal.toLocaleString("en-IN")}`, color: "var(--text-primary)" },
    { label: "Monthly EMI",   value: `₹${loan.emi.toLocaleString("en-IN")}`,       color: "var(--emerald-400)"  },
    { label: "Interest rate", value: `${loan.ratePerMonth}% / month`,              color: "var(--text-primary)" },
    { label: "Tenure",        value: `${loan.months} months`,                      color: "var(--text-primary)" },
  ];
  return (
    <FsdModal onClose={onClose}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
        <div>
          <span className="dash-kicker">Loan offer</span>
          <h2 style={{ margin: "6px 0 0", fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>{loan.name}</h2>
        </div>
        <button onClick={onClose} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)", cursor: "pointer", fontSize: "14px", padding: "6px 12px", borderRadius: "8px", fontFamily: "var(--font-body)" }}>✕ Close</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        {stats.map((s) => (
          <div key={s.label} className="fs-widget" style={{ padding: "14px 16px" }}>
            <span className="dash-kicker" style={{ marginBottom: "4px", display: "block" }}>{s.label}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 700, color: s.color }}>{s.value}</span>
          </div>
        ))}
      </div>
      <div className="fs-widget" style={{ padding: "14px 16px", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Total payable</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>₹{totalPayable.toLocaleString("en-IN")}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Total interest</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "#F87171" }}>₹{totalInterest.toLocaleString("en-IN")}</span>
        </div>
      </div>
      <p style={{ margin: "0 0 20px", fontSize: "var(--text-xs)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.6 }}>RBI-registered lender. No hidden charges. Disbursed to your Jan Dhan account within 48 hours of approval.</p>
      {applied
        ? <div style={{ textAlign: "center", padding: "16px", color: "var(--emerald-400)", fontWeight: 600, fontSize: "var(--text-sm)" }}>✓ Application submitted — you'll hear back within 24 hours.</div>
        : <BrutalButton style={{ width: "100%", justifyContent: "center", padding: "14px 24px", boxSizing: "border-box" }} onClick={() => setApplied(true)}>Apply now — ₹{loan.emi.toLocaleString("en-IN")}/mo</BrutalButton>
      }
    </FsdModal>
  );
}

/* ---------- 1 · Voice-first logger ---------- */

function VoiceLogCard() {
  const { DeepCard, Typewriter } = fsdDS;
  const { IcMic, IcCheck } = window.FsdIcons;
  const [phase, setPhase] = React.useState("idle"); // idle | listening | logged
  const [voiceLang, setVoiceLang] = React.useState("English");
  const timer = React.useRef(null);

  const startListening = () => {
    if (phase === "listening") return;
    setPhase("listening");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPhase("logged"), 3400);
  };
  React.useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <DeepCard id="voice-log" className="ds-c7" radius="32px" style={{ padding: "30px 32px", display: "flex", flexDirection: "column", gap: "20px", scrollMarginTop: "88px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "330px" }}>
          <span className="dash-kicker" style={{ color: "rgba(191,219,254,0.6)" }}>Voice log</span>
          <h2 style={{ margin: 0, fontFamily: “var(--font-display)”, fontSize: “28px”, fontWeight: 700, letterSpacing: “var(--tracking-tight)”, lineHeight: “var(--leading-tight)”, color: “var(--text-primary)” }}>Speak to log it.</h2>
          <p style={{ margin: 0, fontSize: “var(--text-sm)”, fontWeight: 300, lineHeight: “var(--leading-relaxed)”, color: “var(--text-secondary)”, textWrap: “pretty” }}>
            Tap the mic and speak — <span style={{ fontFamily: “var(--font-body)” }}>”Spent ₹250 on vegetables today”</span> — Sathi sorts it into your ledger.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", paddingTop: "4px" }}>
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span className="fsd-pulse" data-on={phase === "listening"} style={{ position: "absolute", inset: 0, borderRadius: "50%" }} aria-hidden="true"></span>
            <button
              onClick={startListening}
              aria-label="Start voice log"
              style={{ position: "relative", width: "84px", height: "84px", borderRadius: "50%", border: "none", cursor: "pointer", color: phase === "listening" ? "var(--blue-400)" : "var(--silver-200)", background: "var(--gradient-btn-dark)", boxShadow: "var(--shadow-btn-dark)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.4s var(--ease-tactile)" }}
              onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(1px)"; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = ""; }}
            >
              <IcMic size={30} />
            </button>
          </span>
          {phase === "listening"
            ? <span className="fsd-bars" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></span>
            : <span style={{ fontSize: "10px", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", fontWeight: 700, color: "var(--text-muted)" }}>Tap to speak</span>}
        </div>
      </div>

      <div className="fs-widget" style={{ minHeight: "58px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
        {phase === "idle" && (
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", fontWeight: 300 }}>Your last log appears here — speak in any language.</span>
        )}
        {phase === "listening" && (
          <span style={{ fontFamily: “var(--font-body)”, fontSize: “var(--text-body)”, color: “var(--text-primary)” }}>
            “<Typewriter text=”Spent ₹60 on milk today…” speed={70} />”
          </span>
        )}
        {phase === "logged" && (
          <React.Fragment>
            <FsdIconWell icon={IcCheck} tone="emerald" size={32} />
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>Logged — Milk · Groceries</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Milk — added by voice</span>
            </span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "#F87171" }}>−₹60</span>
          </React.Fragment>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "10px", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", fontWeight: 700, color: "var(--text-muted)", marginRight: "4px" }}>Speaks</span>
        {["हिंदी", "English", "தமிழ்", "मराठी"].map((l) => (
          <button key={l} className="dash-chip" data-active={l === voiceLang} onClick={() => setVoiceLang(l)} style={{ fontFamily: l === "English" ? "var(--font-body)" : "var(--font-devanagari)" }}>{l}</button>
        ))}
      </div>
    </DeepCard>
  );
}

/* ---------- 2 · Balance summary ---------- */

function BalancePanel() {
  const { IcArrowDownLeft, IcArrowUpRight } = window.FsdIcons;
  const row = (Icon, tone, label, value, color) => (
    <div className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
      <FsdIconWell icon={Icon} tone={tone} size={32} />
      <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{label}</span>
      <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color }}>{value}</span>
    </div>
  );
  return (
    <section className="dash-panel ds-c5">
      <FsdPanelHead kicker="This month" title="Balance" trailing={<span className="dash-pill dash-pill-emerald">On track</span>} />
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "6px 0 2px" }}>
        <span className="fs-text-matte" style={{ fontFamily: "var(--font-display)", fontSize: "46px", fontWeight: 700, letterSpacing: "var(--tracking-tighter)", lineHeight: 1 }}>₹18,420</span>
        <span style={{ fontSize: "10px", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", fontWeight: 700, color: "var(--text-muted)", marginTop: "8px" }}>In hand · June</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {row(IcArrowDownLeft, "emerald", "Income", "+₹12,500", "var(--emerald-400)")}
        {row(IcArrowUpRight, "red", "Spent", "−₹7,830", "#F87171")}
      </div>
    </section>
  );
}

/* ---------- 3 · Transactions ledger ---------- */

const FSD_TXNS = [
  { title: "Kirana sale",     sub: "Income · Voice log",   amount: "+₹2,400", dir: "in",  when: "Today" },
  { title: "Sabzi mandi",     sub: "Groceries",            amount: "−₹250",   dir: "out", when: "Today" },
  { title: "Milk",            sub: "Groceries · Voice log", amount: "−₹60",   dir: "out", when: "Today" },
  { title: "Tailoring order", sub: "Income",               amount: "+₹1,200", dir: "in",  when: "Tue" },
  { title: "Mobile recharge", sub: "Utilities",            amount: "−₹239",   dir: "out", when: "Mon" },
];

function LedgerPanel() {
  const { Button } = fsdDS;
  const { IcArrowDownLeft, IcArrowUpRight } = window.FsdIcons;
  return (
    <section id="transactions" className="dash-panel ds-c5">
      <FsdPanelHead kicker="Ledger" title="Transactions" trailing={<Button variant="link" size="sm" href="money.html">View all</Button>} />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {FSD_TXNS.map((t) => (
          <div key={t.title} className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 14px" }}>
            <FsdIconWell icon={t.dir === "in" ? IcArrowDownLeft : IcArrowUpRight} tone={t.dir === "in" ? "emerald" : "red"} size={32} />
            <span style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: 0 }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>{t.title}</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{t.sub}</span>
            </span>
            <span style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: t.dir === "in" ? "var(--emerald-400)" : "#F87171" }}>{t.amount}</span>
              <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--text-muted)" }}>{t.when}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 4 · Savings goals ---------- */

function GoalsPanel() {
  const { ProgressRing, GlassBadge } = fsdDS;
  return (
    <section id="goals" className="dash-panel ds-c4">
      <FsdPanelHead kicker="Savings goals" title="Diwali fund" />
      <div style={{ display: "flex", justifyContent: "center", padding: "2px 0" }}>
        <ProgressRing value={0.68} size={150} strokeWidth={11} metric="₹8,500" label="of ₹12,500 goal" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div className="dash-bar" aria-hidden="true"><i style={{ width: "21%", background: "var(--emerald-500)" }}></i></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
          <span>Emergency fund</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>₹2,100 / ₹10,000</span>
        </div>
      </div>
      <GlassBadge icon="🎯" tint="blue" title="Sathi nudge" subtitle="Save ₹40 a day — Diwali goal lands 2 weeks early." />
    </section>
  );
}

/* ---------- 5 · Trust score ---------- */

function TrustPanel() {
  const { ProgressRing, Button } = fsdDS;
  const { IcTrendingUp } = window.FsdIcons;
  return (
    <section id="trust-score" className="dash-panel ds-c3" style={{ alignItems: "center", textAlign: "center" }}>
      <FsdPanelHead kicker="Credit readiness" title="Trust Score" />
      <ProgressRing value={0.72} size={130} strokeWidth={10} color="var(--emerald-500)" metric="72" label="of 100" />
      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "var(--text-xs)", color: "var(--emerald-400)", fontWeight: 600 }}>
        <IcTrendingUp size={13} /> +4 this month
      </span>
      <p style={{ margin: 0, fontSize: "var(--text-xs)", fontWeight: 300, lineHeight: 1.6, color: "var(--text-muted)", textWrap: "pretty" }}>Daily logging builds your score — micro-loans unlock at every level.</p>
      <Button variant="dark" size="sm" href="grow.html#loans" style={{ width: "100%" }}>See loan offers</Button>
    </section>
  );
}

/* ---------- 6 · Sathi Academy ---------- */

const FSD_LESSONS = [
  { title: "How to build an emergency fund", meta: "3 min · English", pct: 100 },
  { title: "UPI and online safety tips",    meta: "4 min · English", pct: 60 },
  { title: "3 easy ways to save money",     meta: "5 min · English", pct: 0 },
];

function AcademyPanel() {
  const { Button } = fsdDS;
  const { IcBookOpen, IcCheck } = window.FsdIcons;
  return (
    <section id="academy" className="dash-panel ds-c5">
      <FsdPanelHead kicker="Sathi Academy" title="Keep learning" trailing={<span className="dash-pill dash-pill-zinc">5 / 16 lessons</span>} />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {FSD_LESSONS.map((l) => (
          <div key={l.title} className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
            <FsdIconWell icon={l.pct === 100 ? IcCheck : IcBookOpen} tone={l.pct === 100 ? "emerald" : "blue"} size={32} />
            <span style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1, minWidth: 0 }}>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>{l.title}</span>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", whiteSpace: "nowrap", fontFamily: "var(--font-devanagari)" }}>{l.meta}</span>
              </span>
              <span className="dash-bar"><i style={{ width: `${l.pct}%`, background: l.pct === 100 ? "var(--emerald-500)" : "var(--blue-500)" }}></i></span>
            </span>
          </div>
        ))}
      </div>
      <Button variant="ghost" size="sm" href="grow.html#academy">Continue lesson 6</Button>
    </section>
  );
}

/* ---------- 7 · Loan marketplace ---------- */

const SATHI_LOAN = { name: "Sathi Micro Finance", principal: 25000, ratePerMonth: 1.5, months: 12, emi: 2265 };

function LoansPanel() {
  const { BrutalButton, Button } = fsdDS;
  const { IcBanknote } = window.FsdIcons;
  const [activeLoan, setActiveLoan] = React.useState(null);
  return (
    <section id="loans" className="dash-panel ds-c7">
      <FsdPanelHead kicker="Loan marketplace" title="Offers for you" trailing={<span className="dash-pill dash-pill-zinc">Matched to score 72</span>} />

      <div className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px" }}>
        <FsdIconWell icon={IcBanknote} tone="blue" />
        <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
          <span style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>Sathi Micro Finance</span>
            <span className="dash-pill dash-pill-emerald">Pre-approved</span>
          </span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>₹25,000 · 1.5%/mo · 12 months · EMI ₹2,265</span>
        </span>
        <span style={{ marginLeft: "auto", flexShrink: 0 }}>
          <BrutalButton style={{ padding: "10px 18px", fontSize: "13px" }} onClick={() => setActiveLoan(SATHI_LOAN)}>View offer</BrutalButton>
        </span>
      </div>

      <div className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px", opacity: 0.75 }}>
        <FsdIconWell icon={IcBanknote} tone="zinc" />
        <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
          <span style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>Bandhan Partner Loan</span>
            <span className="dash-pill dash-pill-zinc">Unlocks at score 75</span>
          </span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>₹50,000 · 1.2%/mo · 24 months</span>
        </span>
        <span style={{ marginLeft: "auto", flexShrink: 0 }}>
          <Button variant="ghost" size="sm" href="grow.html#trust-score">Improve score</Button>
        </span>
      </div>

      <p style={{ margin: 0, fontSize: "var(--text-xs)", fontWeight: 300, color: "var(--text-muted)" }}>Offers from RBI-registered partners. Sathi never charges you to apply.</p>
      {activeLoan && <LoanDetailModal loan={activeLoan} onClose={() => setActiveLoan(null)} />}
    </section>
  );
}

/* ---------- 8 · Sathi AI assistant ---------- */

function SathiAIPanel() {
  const { Typewriter } = fsdDS;
  const { IcSparkles, IcMic, IcSend } = window.FsdIcons;
  const [draft, setDraft] = React.useState("");
  const [asked, setAsked] = React.useState(null);

  const ask = (q) => { if (q.trim()) { setAsked(q.trim()); setDraft(""); } };
  const reply = "This month you spent ₹7,830 — 12% less than last month. Set aside ₹40/day for your Diwali goal. Keep it up!";

  return (
    <section id="sathi-ai" className="dash-panel ds-c12" style={{ gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "230px" }}>
          <FsdIconWell icon={IcSparkles} tone="blue" size={40} />
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <h2 className="dash-h">Ask Sathi</h2>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Ask in any language</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", flex: 1 }}>
          {["How much did I save this month?", "When will my Diwali goal complete?", "What will my loan EMI be?"].map((q) => (
            <button key={q} className="dash-chip" onClick={() => ask(q)}>{q}</button>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); ask(draft); }} style={{ display: "flex", alignItems: "center", gap: "8px", flex: "1 1 360px", maxWidth: "480px" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-soft)", borderRadius: "14px", padding: "10px 8px 10px 16px", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)" }}>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask Sathi anything…"
              style={{ flex: 1, minWidth: 0, background: "transparent", border: "none", outline: "none", color: "var(--text-primary)", fontSize: "var(--text-sm)", fontFamily: "var(--font-body)" }}
            />
            <button type="button" aria-label="Ask by voice" style={{ border: "none", background: "transparent", color: "var(--text-muted)", cursor: "pointer", display: "flex", padding: "4px" }}><IcMic size={16} /></button>
          </div>
          <button type="submit" aria-label="Send" style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "12px", border: "none", cursor: "pointer", color: "var(--ink-950)", background: "var(--gradient-btn-light)", boxShadow: "var(--shadow-btn-light)", display: "flex", alignItems: "center", justifyContent: "center" }}><IcSend size={16} /></button>
        </form>
      </div>

      {asked && (
        <div className="fs-widget" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>You asked — “{asked}”</span>
          <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-primary)" }}>
            <Typewriter key={asked} text={reply} speed={18} />
          </span>
        </div>
      )}
    </section>
  );
}

/* ---------- Page ---------- */

function DashboardPage() {
  const { SilverText, GlassBadge } = fsdDS;
  return (
    <div id="top" data-screen-label="Dashboard — post-login home" style={{ position: "relative", minHeight: "100vh" }}>
      <div className="fsd-env" aria-hidden="true">
        <div className="fs-grid" style={{ position: "absolute", inset: 0, opacity: 0.55 }}></div>
        <div className="fs-grain"></div>
      </div>

      <DashboardNav />

      <main className="dash-grid">
        <div className="ds-c12" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", padding: "12px 4px 4px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span className="dash-kicker">Thursday · 12 June</span>
            <SilverText as="h1" style={{ fontSize: "40px", margin: 0 }}>Hello, Asha.</SilverText>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>Your money, at a glance.</span>
          </div>
          <GlassBadge icon="🔥" tint="indigo" title="12-day streak" subtitle="Logging every day" />
        </div>

        <VoiceLogCard />
        <BalancePanel />
        <LedgerPanel />
        <GoalsPanel />
        <TrustPanel />
        <AcademyPanel />
        <LoansPanel />
        <SathiAIPanel />
      </main>
    </div>
  );
}

Object.assign(window, { DashboardPage });
