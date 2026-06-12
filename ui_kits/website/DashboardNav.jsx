// FinSathi dashboard navigation — dropdown mega-menu, language picker,
// and the FsdI18n module used by all pages.

const fsdNavDS = window.FinSathiDesignSystem_400c38;

/* ---------- i18n (loaded first, used by every page) ---------- */

window.FsdI18n = (() => {
  const T = {
    en: {
      "money.h1":          "Your Money.",
      "money.sub":         "Track every rupee, all in one place.",
      "money.tip":         "Spend ₹40 less on groceries — save ₹500/month.",
      "grow.h1":           "Keep Growing.",
      "grow.sub":          "Your progress, every step.",
      "grow.almost":       "Log 3 more days — your score will reach 75.",
      "dash.greeting":     "Hello, Asha.",
      "dash.sub":          "Your money, at a glance.",
      "voice.h2":          "Speak to log it.",
      "voice.example":     "“Spent ₹250 on vegetables today”",
      "voice.transcript":  "Spent ₹60 on milk today…",
      "voice.logged.sub":  "Milk — added by voice",
      "ai.sub":            "Ask in any language",
      "ai.reply":          "This month you spent ₹7,830 — 12% less than last month. Set aside ₹40/day for your Diwali goal. Well done!",
      "ai.chip1":          "How much did I save this month?",
      "ai.chip2":          "When will my Diwali goal complete?",
      "ai.chip3":          "What will my loan EMI be?",
      "lesson.lang":       "Hindi",
      "goals.nudge":       "Save ₹40 a day — Diwali goal lands 2 weeks early.",
    },
    hi: {
      "money.h1":          "Aapka Paisa.",
      "money.sub":         "पैसे का पूरा हिसाब, एक जगह।",
      "money.tip":         "Groceries pe ₹40 kam karein — ₹500/month bachenge.",
      "grow.h1":           "Badhte Raho.",
      "grow.sub":          "आपकी तरक्की, हर कदम।",
      "grow.almost":       "3 aur din log karein — score 75 ho jayega.",
      "dash.greeting":     "Namaste, Asha.",
      "dash.sub":          "आपका पैसा, एक नज़र में।",
      "voice.h2":          "Bol kar likhiye.",
      "voice.example":     "“आज सब्ज़ी पे ₹250 खर्च हुए”",
      "voice.transcript":  "आज दूध पे साठ रुपये खर्च हुए…",
      "voice.logged.sub":  "दूध — आवाज़ से जोड़ा गया",
      "ai.sub":            "अपनी भाषा में पूछिए",
      "ai.reply":          "Is mahine aapne ₹7,830 kharch kiye — pichhle mahine se 12% kam. Diwali goal ke liye roz ₹40 alag rakhiye. Shabash!",
      "ai.chip1":          "Is mahine kitna bacha?",
      "ai.chip2":          "Diwali goal kab poora hoga?",
      "ai.chip3":          "Loan EMI kitni hogi?",
      "lesson.lang":       "हिंदी",
      "goals.nudge":       "Save ₹40 a day — Diwali goal lands 2 weeks early.",
    },
    ta: {
      "money.h1":          "Unga Panam.",
      "money.sub":         "ஒரே இடத்தில் அனைத்து கணக்கும்மா.",
      "money.tip":         "Groceries pe ₹40 kam karein — ₹500/month bachenge.",
      "grow.h1":           "Valara Vaanga.",
      "grow.sub":          "உங்கள் முன்னேற்றம், ஒவ்வொரு கட்டமும்மா.",
      "grow.almost":       "Log 3 more days — your score will reach 75.",
      "dash.greeting":     "Vanakkam, Asha.",
      "dash.sub":          "உங்கள் பணம், ஒரே பார்வையில்.",
      "voice.h2":          "Pesum, Sathi kaadum.",
      "voice.example":     "“Today spent ₹250 on vegetables”",
      "voice.transcript":  "Today spent ₹60 on milk…",
      "voice.logged.sub":  "Milk — added by voice",
      "ai.sub":            "Unga mozhiyil kelunga",
      "ai.reply":          "This month you spent ₹7,830 — 12% less than last month. Set aside ₹40/day for Diwali goal. Well done!",
      "ai.chip1":          "How much did I save this month?",
      "ai.chip2":          "When will my Diwali goal complete?",
      "ai.chip3":          "What will my loan EMI be?",
      "lesson.lang":       "தமிழ்",
      "goals.nudge":       "Save ₹40 a day — Diwali goal lands 2 weeks early.",
    },
    mr: {
      "money.h1":          "Tumcha Paisa.",
      "money.sub":         "सर्व पैशांचा हिशोब, एका ठिकाणी.",
      "money.tip":         "Groceries var ₹40 kam kharch kara — ₹500/mahina bachel.",
      "grow.h1":           "Pudhe Chala.",
      "grow.sub":          "तुमची प्रगती, प्रत्येक पावलावर.",
      "grow.almost":       "Log 3 more days — your score will reach 75.",
      "dash.greeting":     "Namaskar, Asha.",
      "dash.sub":          "तुमचे पैसे, एका नजरेत.",
      "voice.h2":          "Bola, Sathi liha.",
      "voice.example":     "“Aaj bhajyawar ₹250 kharch zale”",
      "voice.transcript":  "Aaj doodhwar saath rupaye kharch zale…",
      "voice.logged.sub":  "Milk — aavazane jodala",
      "ai.sub":            "Tumchya bhashet vicha",
      "ai.reply":          "Ya mahinyat tumhi ₹7,830 kharch kele — 12% kami. Diwali goalsa roz ₹40 theva. Shabash!",
      "ai.chip1":          "How much did I save this month?",
      "ai.chip2":          "When will my Diwali goal complete?",
      "ai.chip3":          "What will my loan EMI be?",
      "lesson.lang":       "मराठी",
      "goals.nudge":       "Save ₹40 a day — Diwali goal lands 2 weeks early.",
    },
  };

  let _code = "en";
  try { _code = localStorage.getItem("fsd-lang") || "en"; } catch (e) {}
  let _subs = [];

  const t = (key) => {
    const dict = T[_code] || T.en;
    const val = dict[key];
    return (val !== null && val !== undefined) ? val : (T.en[key] || key);
  };

  const setLang = (code) => {
    _code = code;
    try { localStorage.setItem("fsd-lang", code); } catch (e) {}
    _subs.slice().forEach((fn) => fn(code));
  };

  const getLang = () => _code;

  const subscribe = (fn) => { _subs.push(fn); return () => { _subs = _subs.filter((s) => s !== fn); }; };

  return { t, setLang, getLang, subscribe };
})();

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
