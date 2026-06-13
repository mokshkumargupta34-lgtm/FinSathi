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

// Voice languages mapped to BCP-47 codes the browser speech engine understands.
const VOICE_LANGS = [
  { label: "हिंदी",   code: "hi", bcp: "hi-IN" },
  { label: "English", code: "en", bcp: "en-IN" },
  { label: "தமிழ்",   code: "ta", bcp: "ta-IN" },
  { label: "मराठी",   code: "mr", bcp: "mr-IN" },
];

function VoiceLogCard() {
  const { DeepCard } = fsdDS;
  const { IcMic, IcCheck } = window.FsdIcons;
  const [appLang, setAppLang] = React.useState(window.FsdI18n.getLang());
  React.useEffect(() => window.FsdI18n.subscribe(setAppLang), []);
  const t = window.FsdI18n.t;

  const [phase, setPhase]           = React.useState("idle"); // idle | listening | logged | error
  const [voiceCode, setVoiceCode]   = React.useState(window.FsdI18n.getLang());
  const [transcript, setTranscript] = React.useState("");
  const [errorMsg, setErrorMsg]     = React.useState("");
  const recogRef = React.useRef(null);
  const finalRef = React.useRef("");

  // Follow the app language the user picks in the nav, but let them override per-chip.
  React.useEffect(() => { setVoiceCode(appLang); }, [appLang]);

  const voiceLang = VOICE_LANGS.find((l) => l.code === voiceCode) || VOICE_LANGS[1];
  const SpeechRec = (typeof window !== "undefined") && (window.SpeechRecognition || window.webkitSpeechRecognition);

  const stopListening = () => { if (recogRef.current) { try { recogRef.current.stop(); } catch (e) {} } };
  React.useEffect(() => stopListening, []);

  const startListening = () => {
    if (phase === "listening") { stopListening(); return; }
    if (!SpeechRec) {
      setErrorMsg("Voice input needs Chrome or Edge — this browser does not support it.");
      setPhase("error");
      return;
    }
    const recog = new SpeechRec();
    recogRef.current = recog;
    finalRef.current = "";
    recog.lang = voiceLang.bcp;
    recog.interimResults = true;
    // Keep listening until the user taps stop, so we don't cut off mid-sentence.
    recog.continuous = true;
    recog.maxAlternatives = 1;
    setTranscript("");
    setErrorMsg("");
    setPhase("listening");

    recog.onresult = (e) => {
      let text = "";
      for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
      finalRef.current = text;
      setTranscript(text);
    };
    recog.onerror = (e) => {
      const msg = (e.error === "not-allowed" || e.error === "service-not-allowed")
        ? "Microphone blocked — allow mic access in your browser, then try again."
        : (e.error === "no-speech")
        ? "Did not catch that — tap the mic and speak again."
        : "Could not hear you. Please try again.";
      setErrorMsg(msg);
      setPhase("error");
    };
    recog.onend = () => {
      recogRef.current = null;
      const heard = finalRef.current.trim();
      setPhase((prev) => {
        if (prev === "error") return prev;
        if (heard) return "logged";
        setErrorMsg("Did not catch that — tap the mic and speak again.");
        return "error";
      });
    };

    try { recog.start(); }
    catch (e) {
      setErrorMsg("Could not start the microphone. Please try again.");
      setPhase("error");
    }
  };

  // Pull the first rupee amount out of the spoken text for a friendly ledger line.
  const heardAmount = (() => {
    const m = transcript.replace(/[, ]/g, "").match(/(\d{1,7})/);
    return m ? Number(m[1]).toLocaleString("en-IN") : null;
  })();

  return (
    <DeepCard id="voice-log" className="ds-c7" radius="32px" style={{ padding: "30px 32px", display: "flex", flexDirection: "column", gap: "20px", scrollMarginTop: "88px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "330px" }}>
          <span className="dash-kicker" style={{ color: "rgba(191,219,254,0.6)" }}>{t("voice.kicker")}</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, letterSpacing: "var(--tracking-tight)", lineHeight: "var(--leading-tight)", color: "var(--text-primary)" }}>{t("voice.h2")}</h2>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", fontWeight: 300, lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
            {t("voice.tap_pre")} <span style={{ fontFamily: "var(--font-body)" }}>{t("voice.example")}</span> {t("voice.tap_post")}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", paddingTop: "4px" }}>
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span className="fsd-pulse" data-on={phase === "listening"} style={{ position: "absolute", inset: 0, borderRadius: "50%" }} aria-hidden="true"></span>
            <button
              onClick={startListening}
              aria-label={phase === "listening" ? "Stop voice log" : "Start voice log"}
              style={{ position: "relative", width: "84px", height: "84px", borderRadius: "50%", border: "none", cursor: "pointer", color: phase === "listening" ? "var(--blue-400)" : "var(--silver-200)", background: "var(--gradient-btn-dark)", boxShadow: "var(--shadow-btn-dark)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.4s var(--ease-tactile)" }}
              onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(1px)"; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = ""; }}
            >
              <IcMic size={30} />
            </button>
          </span>
          {phase === "listening"
            ? <span className="fsd-bars" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></span>
            : <span style={{ fontSize: "10px", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", fontWeight: 700, color: "var(--text-muted)" }}>{t("voice.tap")}</span>}
        </div>
      </div>

      <div className="fs-widget" style={{ minHeight: "58px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
        {phase === "idle" && (
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", fontWeight: 300 }}>{t("voice.idle")}</span>
        )}
        {phase === "listening" && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--text-primary)" }}>
            {transcript ? '"' + transcript + '"' : t("voice.listening")}
          </span>
        )}
        {phase === "logged" && (
          <React.Fragment>
            <FsdIconWell icon={IcCheck} tone="emerald" size={32} />
            <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>{t("voice.logged")}</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{transcript}</span>
            </span>
            {heardAmount && <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "#F87171" }}>−₹{heardAmount}</span>}
          </React.Fragment>
        )}
        {phase === "error" && (
          <span style={{ fontSize: "var(--text-sm)", color: "#F87171", fontWeight: 400 }}>{errorMsg}</span>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "10px", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", fontWeight: 700, color: "var(--text-muted)", marginRight: "4px" }}>{t("voice.speaks")}</span>
        {VOICE_LANGS.map((l) => (
          <button key={l.code} className="dash-chip" data-active={l.code === voiceCode} onClick={() => setVoiceCode(l.code)} style={{ fontFamily: l.code === "en" ? "var(--font-body)" : "var(--font-devanagari)" }}>{l.label}</button>
        ))}
      </div>
    </DeepCard>
  );
}

/* ---------- 2 · Balance summary ---------- */

function BalancePanel() {
  const { IcArrowDownLeft, IcArrowUpRight } = window.FsdIcons;
  const t = window.FsdI18n.t;
  const row = (Icon, tone, label, value, color) => (
    <div className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px" }}>
      <FsdIconWell icon={Icon} tone={tone} size={32} />
      <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{label}</span>
      <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color }}>{value}</span>
    </div>
  );
  return (
    <section className="dash-panel ds-c5">
      <FsdPanelHead kicker={t("balance.kicker")} title={t("balance.title")} trailing={<span className="dash-pill dash-pill-emerald">{t("balance.ontrack")}</span>} />
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "6px 0 2px" }}>
        <span className="fs-text-matte" style={{ fontFamily: "var(--font-display)", fontSize: "46px", fontWeight: 700, letterSpacing: "var(--tracking-tighter)", lineHeight: 1 }}>₹18,420</span>
        <span style={{ fontSize: "10px", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", fontWeight: 700, color: "var(--text-muted)", marginTop: "8px" }}>{t("balance.inhand")}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {row(IcArrowDownLeft, "emerald", t("balance.income"), "+₹12,500", "var(--emerald-400)")}
        {row(IcArrowUpRight, "red", t("balance.spent"), "−₹7,830", "#F87171")}
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
  const t = window.FsdI18n.t;
  return (
    <section id="transactions" className="dash-panel ds-c5">
      <FsdPanelHead kicker={t("ledger.kicker")} title={t("ledger.title")} trailing={<Button variant="link" size="sm" href="money.html">{t("ledger.viewall")}</Button>} />
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
  const t = window.FsdI18n.t;
  return (
    <section id="goals" className="dash-panel ds-c4">
      <FsdPanelHead kicker={t("goals.kicker")} title={t("goals.title")} />
      <div style={{ display: "flex", justifyContent: "center", padding: "2px 0" }}>
        <ProgressRing value={0.68} size={150} strokeWidth={11} metric="₹8,500" label={t("goals.ofgoal")} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div className="dash-bar" aria-hidden="true"><i style={{ width: "21%", background: "var(--emerald-500)" }}></i></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
          <span>{t("goals.emergency")}</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>₹2,100 / ₹10,000</span>
        </div>
      </div>
      <GlassBadge icon="🎯" tint="blue" title={t("goals.nudge_title")} subtitle={t("goals.nudge")} />
    </section>
  );
}

/* ---------- 5 · Trust score ---------- */

function TrustPanel() {
  const { ProgressRing, Button } = fsdDS;
  const { IcTrendingUp } = window.FsdIcons;
  const t = window.FsdI18n.t;
  return (
    <section id="trust-score" className="dash-panel ds-c3" style={{ alignItems: "center", textAlign: "center" }}>
      <FsdPanelHead kicker={t("trust.kicker")} title={t("trust.title")} />
      <ProgressRing value={0.72} size={130} strokeWidth={10} color="var(--emerald-500)" metric="72" label={t("trust.of100")} />
      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "var(--text-xs)", color: "var(--emerald-400)", fontWeight: 600 }}>
        <IcTrendingUp size={13} /> {t("trust.thismonth")}
      </span>
      <p style={{ margin: 0, fontSize: "var(--text-xs)", fontWeight: 300, lineHeight: 1.6, color: "var(--text-muted)", textWrap: "pretty" }}>{t("trust.desc")}</p>
      <Button variant="dark" size="sm" href="grow.html#loans" style={{ width: "100%" }}>{t("trust.cta")}</Button>
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
  const t = window.FsdI18n.t;
  return (
    <section id="academy" className="dash-panel ds-c5">
      <FsdPanelHead kicker={t("academy.kicker")} title={t("academy.title")} trailing={<span className="dash-pill dash-pill-zinc">{t("academy.lessons")}</span>} />
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
      <Button variant="ghost" size="sm" href="grow.html#academy">{t("academy.cta")}</Button>
    </section>
  );
}

/* ---------- 7 · Loan marketplace ---------- */

const SATHI_LOAN = { name: "Sathi Micro Finance", principal: 25000, ratePerMonth: 1.5, months: 12, emi: 2265 };

function LoansPanel() {
  const { BrutalButton, Button } = fsdDS;
  const { IcBanknote } = window.FsdIcons;
  const t = window.FsdI18n.t;
  const [activeLoan, setActiveLoan] = React.useState(null);
  return (
    <section id="loans" className="dash-panel ds-c7">
      <FsdPanelHead kicker={t("loans.kicker")} title={t("loans.title")} trailing={<span className="dash-pill dash-pill-zinc">{t("loans.matched")}</span>} />

      <div className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px" }}>
        <FsdIconWell icon={IcBanknote} tone="blue" />
        <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
          <span style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>Sathi Micro Finance</span>
            <span className="dash-pill dash-pill-emerald">{t("loans.preapproved")}</span>
          </span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>₹25,000 · 1.5%/mo · 12 months · EMI ₹2,265</span>
        </span>
        <span style={{ marginLeft: "auto", flexShrink: 0 }}>
          <BrutalButton style={{ padding: "10px 18px", fontSize: "13px" }} onClick={() => setActiveLoan(SATHI_LOAN)}>{t("loans.view")}</BrutalButton>
        </span>
      </div>

      <div className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px", opacity: 0.75 }}>
        <FsdIconWell icon={IcBanknote} tone="zinc" />
        <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
          <span style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>Bandhan Partner Loan</span>
            <span className="dash-pill dash-pill-zinc">{t("loans.unlocks")}</span>
          </span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>₹50,000 · 1.2%/mo · 24 months</span>
        </span>
        <span style={{ marginLeft: "auto", flexShrink: 0 }}>
          <Button variant="ghost" size="sm" href="grow.html#trust-score">{t("loans.improve")}</Button>
        </span>
      </div>

      <p style={{ margin: 0, fontSize: "var(--text-xs)", fontWeight: 300, color: "var(--text-muted)" }}>{t("loans.footnote")}</p>
      {activeLoan && <LoanDetailModal loan={activeLoan} onClose={() => setActiveLoan(null)} />}
    </section>
  );
}

/* ---------- 8 · Sathi AI assistant ---------- */

function SathiAIPanel() {
  const { Typewriter } = fsdDS;
  const { IcSparkles, IcMic, IcSend } = window.FsdIcons;
  const [lang, setLang] = React.useState(window.FsdI18n.getLang());
  React.useEffect(() => window.FsdI18n.subscribe(setLang), []);
  const t = window.FsdI18n.t;
  const [draft, setDraft]       = React.useState("");
  const [asked, setAsked]       = React.useState(null);
  const [listening, setListening] = React.useState(false);
  const [voiceErr, setVoiceErr] = React.useState("");
  const recogRef = React.useRef(null);

  const ask = (q) => { const v = (q || "").trim(); if (v) { setAsked(v); setDraft(""); setVoiceErr(""); } };
  // Pick the answer that matches the question, in the current language.
  const reply = asked ? window.FsdI18n.replyFor(asked) : "";
  const chips = [t("ai.chip1"), t("ai.chip2"), t("ai.chip3")];

  const stopVoice = () => { if (recogRef.current) { try { recogRef.current.stop(); } catch (e) {} } };
  React.useEffect(() => stopVoice, []);

  const startVoice = () => {
    if (listening) { stopVoice(); return; }
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) { setVoiceErr("Voice input needs Chrome or Edge."); return; }
    const vl = VOICE_LANGS.find((l) => l.code === lang) || VOICE_LANGS[1];
    const recog = new SpeechRec();
    recogRef.current = recog;
    recog.lang = vl.bcp;
    recog.interimResults = true;
    recog.continuous = false;
    recog.maxAlternatives = 1;
    let heard = "";
    setVoiceErr("");
    setListening(true);
    recog.onresult = (e) => {
      let text = "";
      for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
      heard = text;
      setDraft(text);
    };
    recog.onerror = (e) => {
      setVoiceErr(
        (e.error === "not-allowed" || e.error === "service-not-allowed")
          ? "Microphone blocked — allow mic access, then try again."
          : "Could not hear you. Please try again."
      );
    };
    recog.onend = () => { recogRef.current = null; setListening(false); if (heard.trim()) ask(heard); };
    try { recog.start(); }
    catch (e) { setListening(false); setVoiceErr("Could not start the microphone."); }
  };

  return (
    <section id="sathi-ai" className="dash-panel ds-c12" style={{ gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "230px" }}>
          <FsdIconWell icon={IcSparkles} tone="blue" size={40} />
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <h2 className="dash-h">{t("ai.title")}</h2>
            <span style={{ fontFamily: lang === "en" ? "var(--font-body)" : "var(--font-devanagari)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{t("ai.sub")}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", flex: 1 }}>
          {chips.map((q) => (
            <button key={q} className="dash-chip" onClick={() => ask(q)}>{q}</button>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); ask(draft); }} style={{ display: "flex", alignItems: "center", gap: "8px", flex: "1 1 360px", maxWidth: "480px" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-soft)", borderRadius: "14px", padding: "10px 8px 10px 16px", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)" }}>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={listening ? t("voice.listening") : t("ai.placeholder")}
              style={{ flex: 1, minWidth: 0, background: "transparent", border: "none", outline: "none", color: "var(--text-primary)", fontSize: "var(--text-sm)", fontFamily: "var(--font-body)" }}
            />
            <button type="button" onClick={startVoice} aria-label={listening ? "Stop voice" : "Ask by voice"} style={{ border: "none", background: "transparent", color: listening ? "var(--blue-400)" : "var(--text-muted)", cursor: "pointer", display: "flex", padding: "4px" }}><IcMic size={16} /></button>
          </div>
          <button type="submit" aria-label="Send" style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "12px", border: "none", cursor: "pointer", color: "var(--ink-950)", background: "var(--gradient-btn-light)", boxShadow: "var(--shadow-btn-light)", display: "flex", alignItems: "center", justifyContent: "center" }}><IcSend size={16} /></button>
        </form>
      </div>

      {voiceErr && (
        <span style={{ fontSize: "var(--text-xs)", color: "#F87171" }}>{voiceErr}</span>
      )}

      {asked && (
        <div className="fs-widget" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{t("ai.you_asked")} "{asked}"</span>
          <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-primary)" }}>
            <Typewriter key={asked + "-" + lang} text={reply} speed={18} />
          </span>
        </div>
      )}
    </section>
  );
}

/* ---------- Page ---------- */

function DashboardPage() {
  const { SilverText, GlassBadge } = fsdDS;
  const [lang, setLang] = React.useState(window.FsdI18n.getLang());
  React.useEffect(() => window.FsdI18n.subscribe(setLang), []);
  const t = window.FsdI18n.t;
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
            <SilverText as="h1" style={{ fontSize: "40px", margin: 0 }}>{t("dash.greeting")}</SilverText>
            <span style={{ fontFamily: lang === "en" ? "var(--font-body)" : "var(--font-devanagari)", fontSize: "var(--text-sm)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>{t("dash.sub")}</span>
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
