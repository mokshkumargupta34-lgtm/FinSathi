// FinSathi Grow page — trust score deep-dive, expanded loan marketplace,
// full Sathi Academy curriculum, and achievements/milestones.

const fsdDS = window.FinSathiDesignSystem_400c38;

/* ---------- Shared bits (mirror Dashboard.jsx) ---------- */

function FsdIconWell({ icon: Icon, tone = "blue", size = 34 }) {
  const tones = {
    blue:    { bg: "rgba(59,130,246,0.12)",  fg: "var(--blue-400)" },
    emerald: { bg: "rgba(16,185,129,0.12)",  fg: "var(--emerald-400)" },
    red:     { bg: "rgba(239,68,68,0.12)",   fg: "#F87171" },
    zinc:    { bg: "rgba(255,255,255,0.06)", fg: "var(--text-muted)" },
    indigo:  { bg: "rgba(99,102,241,0.12)",  fg: "#A5B4FC" },
  };
  const t = tones[tone] || tones.blue;
  return (
    <span style={{ width: size, height: size, flexShrink: 0, borderRadius: "10px", background: t.bg, color: t.fg, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), inset 0 -1px 1px rgba(0,0,0,0.4)" }}>
      <Icon size={Math.round(size * 0.47)} />
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
      <div style={{ background: "linear-gradient(145deg, #162C6D 0%, #0A101D 100%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "28px", padding: "32px", maxWidth: "480px", width: "100%", boxShadow: "0 40px 120px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)" }} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

/* ---------- Loan detail modal ---------- */

function LoanDetailModal({ loan, onClose }) {
  const { BrutalButton } = fsdDS;
  const [applied, setApplied] = React.useState(false);
  const totalPayable  = loan.emi * loan.months;
  const totalInterest = totalPayable - loan.principal;
  const stats = [
    { label: "Loan amount",  value: `₹${loan.principal.toLocaleString("en-IN")}`, color: "var(--text-primary)" },
    { label: "Monthly EMI",  value: `₹${loan.emi.toLocaleString("en-IN")}`,       color: "var(--emerald-400)"  },
    { label: "Interest rate", value: loan.ratePerMonth === 0 ? "0% (Interest-free)" : `${loan.ratePerMonth}% / month`, color: "var(--text-primary)" },
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
      {loan.ratePerMonth > 0 && (
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
      )}
      <p style={{ margin: "0 0 20px", fontSize: "var(--text-xs)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.6 }}>RBI-registered lender. No hidden charges. Disbursed to your Jan Dhan account within 48 hours of approval.</p>
      {applied
        ? <div style={{ textAlign: "center", padding: "16px", color: "var(--emerald-400)", fontWeight: 600, fontSize: "var(--text-sm)" }}>✓ Application submitted — you'll hear back within 24 hours.</div>
        : <BrutalButton style={{ width: "100%", justifyContent: "center", padding: "14px 24px", boxSizing: "border-box" }} onClick={() => setApplied(true)}>Apply now — ₹{loan.emi.toLocaleString("en-IN")}/mo</BrutalButton>
      }
    </FsdModal>
  );
}

/* ---------- Lesson modal ---------- */

const LESSON_CONTENT = {
  default: [
    "Yeh lesson aapko financial planning ke basic concepts samjhata hai — savings, budgeting, aur smart spending.",
    "Har step mein practical tips hain jo aap apni zindagi mein turant apply kar sakte hain.",
    "Video, infographics, aur quiz ke saath — seekhna aasaan aur mazedar hoga.",
  ],
};

function LessonModal({ lesson, onClose }) {
  const { BrutalButton } = fsdDS;
  const [marked, setMarked] = React.useState(false);
  const content = LESSON_CONTENT[lesson.title] || LESSON_CONTENT.default;
  const isComplete = lesson.pct === 100;
  const isActive   = lesson.pct > 0 && lesson.pct < 100;
  return (
    <FsdModal onClose={onClose}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <div>
          <span className="dash-kicker">Sathi Academy</span>
          <h2 style={{ margin: "6px 0 0", fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)", lineHeight: 1.3 }}>{lesson.title}</h2>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontFamily: "var(--font-devanagari)", display: "block", marginTop: "4px" }}>{lesson.meta}</span>
        </div>
        <button onClick={onClose} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)", cursor: "pointer", fontSize: "14px", padding: "6px 12px", borderRadius: "8px", fontFamily: "var(--font-body)", flexShrink: 0 }}>✕</button>
      </div>

      {lesson.pct > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-xs)", color: "var(--text-muted)", marginBottom: "6px" }}>
            <span>Progress</span><span>{lesson.pct}%</span>
          </div>
          <span className="dash-bar"><i style={{ width: `${lesson.pct}%`, background: isComplete ? "var(--emerald-500)" : "var(--blue-500)" }}></i></span>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
        {content.map((para, i) => (
          <p key={i} style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.7, color: "var(--text-secondary)", fontFamily: "var(--font-devanagari)" }}>{para}</p>
        ))}
      </div>

      {marked || isComplete
        ? <div style={{ textAlign: "center", padding: "14px", color: "var(--emerald-400)", fontWeight: 600, fontSize: "var(--text-sm)" }}>✓ Lesson complete — shabash!</div>
        : <BrutalButton style={{ width: "100%", justifyContent: "center", padding: "14px 24px", boxSizing: "border-box" }} onClick={() => setMarked(true)}>
            {isActive ? "Continue lesson" : "Start lesson"}
          </BrutalButton>
      }
    </FsdModal>
  );
}

/* ---------- Page header ---------- */

function GrowHeader() {
  const { SilverText } = fsdDS;
  const { t, useLang } = window.FsdI18n;
  const lang = useLang();
  return (
    <div className="ds-c12" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", padding: "12px 4px 4px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span className="dash-kicker">Thursday · 12 June</span>
        <SilverText as="h1" style={{ fontSize: "40px", margin: 0 }}>{t("grow.h1")}</SilverText>
        <span style={{ fontFamily: lang === "en" ? "var(--font-body)" : "var(--font-devanagari)", fontSize: "var(--text-sm)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>{t("grow.sub")}</span>
      </div>
      <span className="dash-pill dash-pill-emerald" style={{ fontSize: "11px", padding: "6px 14px" }}>Trust Score · 72 / 100</span>
    </div>
  );
}

/* ---------- Trust Score hero ---------- */

const SCORE_HISTORY = [
  { month: "April", score: 64, done: true  },
  { month: "May",   score: 68, done: true  },
  { month: "June",  score: 72, done: true  },
];

const MILESTONES = [
  { done: true,  label: "First voice log",      sub: "Completed 12 days ago"          },
  { done: true,  label: "7-day logging streak", sub: "Completed last week"             },
  { done: false, label: "Reach score 75",        sub: "Unlocks micro-loan · 3 days away" },
];

function TrustScoreHero() {
  const { DeepCard, ProgressRing, GlassBadge, Button } = fsdDS;
  const { IcTrendingUp, IcCheck, IcShieldCheck } = window.FsdIcons;
  return (
    <DeepCard id="trust-score" className="ds-c5" radius="32px" style={{ padding: "30px 32px", display: "flex", flexDirection: "column", gap: "20px", scrollMarginTop: "88px" }}>
      <FsdPanelHead kicker="Credit readiness" title="Trust Score" />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProgressRing value={0.72} size={150} strokeWidth={11} color="var(--emerald-500)" metric="72" label="of 100" />
      </div>

      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "var(--text-xs)", color: "var(--emerald-400)", fontWeight: 600, justifyContent: "center" }}>
        <IcTrendingUp size={13} /> +8 points in 3 months
      </span>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span className="dash-kicker" style={{ marginBottom: "2px" }}>Score history</span>
        {SCORE_HISTORY.map((h) => (
          <div key={h.month} className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px" }}>
            <FsdIconWell icon={IcShieldCheck} tone={h.month === "June" ? "emerald" : "zinc"} size={30} />
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{h.month}</span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: h.month === "June" ? "var(--emerald-400)" : "var(--text-primary)", fontWeight: 600 }}>{h.score}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <span className="dash-kicker" style={{ marginBottom: "2px" }}>Roadmap</span>
        {MILESTONES.map((m) => (
          <div key={m.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px", opacity: m.done ? 1 : 0.8 }}>
            <FsdIconWell icon={IcCheck} tone={m.done ? "emerald" : "zinc"} size={28} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: m.done ? "var(--text-primary)" : "var(--text-muted)" }}>{m.label}</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{m.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <GlassBadge icon="🎯" tint="emerald" title="Almost there!" subtitle={window.FsdI18n.t("grow.almost")} />
    </DeepCard>
  );
}

/* ---------- Loan marketplace (expanded) ---------- */

const LOANS = [
  {
    name: "Sathi Micro Finance",
    detail: "₹25,000 · 1.5%/mo · 12 months · EMI ₹2,265",
    status: "approved",
    pill: { label: "Pre-approved", cls: "dash-pill-emerald" },
    cta: "View offer",
    principal: 25000, ratePerMonth: 1.5, months: 12, emi: 2265,
  },
  {
    name: "Jan Dhan Micro Loan",
    detail: "₹10,000 · 0% interest · 6 months · Interest-free",
    status: "approved",
    pill: { label: "Eligible",     cls: "dash-pill-emerald" },
    cta: "Apply now",
    principal: 10000, ratePerMonth: 0, months: 6, emi: 1667,
  },
  {
    name: "Bandhan Partner Loan",
    detail: "₹50,000 · 1.2%/mo · 24 months",
    status: "locked",
    pill: { label: "Unlocks at 75", cls: "dash-pill-zinc" },
    cta: "Improve score",
    ctaHref: "#trust-score",
  },
  {
    name: "MUDRA Startup Credit",
    detail: "₹2,00,000 · 0.9%/mo · 36 months",
    status: "locked",
    pill: { label: "Unlocks at 80", cls: "dash-pill-zinc" },
    cta: "See details",
    ctaHref: "#trust-score",
  },
];

function LoanMarketplaceFull() {
  const { BrutalButton, Button } = fsdDS;
  const { IcBanknote } = window.FsdIcons;
  const [activeLoan, setActiveLoan] = React.useState(null);
  return (
    <section id="loans" className="dash-panel ds-c7" style={{ scrollMarginTop: "88px" }}>
      <FsdPanelHead kicker="Loan marketplace" title="Offers for you" trailing={<span className="dash-pill dash-pill-zinc">Matched to score 72</span>} />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {LOANS.map((l) => (
          <div key={l.name} className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px", opacity: l.status === "locked" ? 0.68 : 1 }}>
            <FsdIconWell icon={IcBanknote} tone={l.status === "approved" ? "blue" : "zinc"} />
            <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>{l.name}</span>
                <span className={`dash-pill ${l.pill.cls}`}>{l.pill.label}</span>
              </span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{l.detail}</span>
            </span>
            <span style={{ marginLeft: "auto", flexShrink: 0 }}>
              {l.status === "approved"
                ? <BrutalButton style={{ padding: "10px 18px", fontSize: "13px" }} onClick={() => setActiveLoan(l)}>{l.cta}</BrutalButton>
                : <Button variant="ghost" size="sm" href={l.ctaHref || "#trust-score"}>{l.cta}</Button>}
            </span>
          </div>
        ))}
      </div>
      <p style={{ margin: 0, fontSize: "var(--text-xs)", fontWeight: 300, color: "var(--text-muted)" }}>Offers from RBI-registered partners. Sathi never charges you to apply.</p>
      {activeLoan && <LoanDetailModal loan={activeLoan} onClose={() => setActiveLoan(null)} />}
    </section>
  );
}

/* ---------- Sathi Academy — full curriculum ---------- */

const LESSON_TITLE_EN = {
  "Emergency fund kaise banayein":      "How to build an emergency fund",
  "UPI aur online safety":              "UPI and online safety",
  "Bachat ke 3 aasaan tarike":          "3 easy ways to save",
  "Goals set karna — sahi tarika":      "Setting goals — the right way",
  "Mahine ka budget kaise banayein":    "How to make a monthly budget",
  "Fraud se kaise bachein":             "How to avoid fraud",
  "Jan Dhan account ke fayde":          "Benefits of Jan Dhan account",
  "Insurance kya hota hai":             "What is insurance",
  "Nominee kyon zaroori hai":           "Why a nominee is important",
  "OTP aur password suraksha":          "OTP and password security",
  "Chota vyaapaar kaise shuru karein":  "How to start a small business",
  "MUDRA loan kya hai":                 "What is a MUDRA loan",
  "Mahila udyog — sarkari yojnayein":   "Women entrepreneurs — government schemes",
  "Credit score kaise badhayein":       "How to improve your credit score",
  "Mutual fund — pehla kadam":          "Mutual funds — first steps",
  "Retirement ke liye bachat":          "Saving for retirement",
};

const ACADEMY_MODULES = [
  {
    name: "Bachat · Savings",
    emoji: "🪙",
    lessons: [
      { title: "Emergency fund kaise banayein",   meta: "3 min · हिंदी", pct: 100 },
      { title: "UPI aur online safety",           meta: "4 min · हिंदी", pct: 60  },
      { title: "Bachat ke 3 aasaan tarike",       meta: "5 min · हिंदी", pct: 0   },
      { title: "Goals set karna — sahi tarika",   meta: "4 min · हिंदी", pct: 0   },
      { title: "Mahine ka budget kaise banayein", meta: "5 min · हिंदी", pct: 0   },
    ],
  },
  {
    name: "Suraksha · Protection",
    emoji: "🛡️",
    lessons: [
      { title: "Fraud se kaise bachein",          meta: "5 min · हिंदी", pct: 100 },
      { title: "Jan Dhan account ke fayde",       meta: "3 min · हिंदी", pct: 40  },
      { title: "Insurance kya hota hai",          meta: "6 min · हिंदी", pct: 0   },
      { title: "Nominee kyon zaroori hai",        meta: "4 min · हिंदी", pct: 0   },
      { title: "OTP aur password suraksha",       meta: "3 min · हिंदी", pct: 0   },
    ],
  },
  {
    name: "Samruddhi · Prosperity",
    emoji: "📈",
    lessons: [
      { title: "Chota vyaapaar kaise shuru karein", meta: "7 min · हिंदी", pct: 0 },
      { title: "MUDRA loan kya hai",                meta: "4 min · हिंदी", pct: 0 },
      { title: "Mahila udyog — sarkari yojnayein",  meta: "5 min · हिंदी", pct: 0 },
      { title: "Credit score kaise badhayein",      meta: "6 min · हिंदी", pct: 0 },
      { title: "Mutual fund — pehla kadam",         meta: "8 min · हिंदी", pct: 0 },
      { title: "Retirement ke liye bachat",          meta: "6 min · हिंदी", pct: 0 },
    ],
  },
];

function AcademyFull() {
  const { DeepCard, Button } = fsdDS;
  const { IcBookOpen, IcCheck } = window.FsdIcons;
  const { t, useLang } = window.FsdI18n;
  const lang = useLang();
  const [activeLesson, setActiveLesson] = React.useState(null);

  const totalLessons = ACADEMY_MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons  = ACADEMY_MODULES.reduce((s, m) => s + m.lessons.filter((l) => l.pct === 100).length, 0);

  const lessonTitle = (l) => lang === "en" ? (LESSON_TITLE_EN[l.title] || l.title) : l.title;
  const lessonMeta  = (l) => l.meta.replace("हिंदी", t("lesson.lang"));

  return (
    <DeepCard id="academy" className="ds-c7" radius="32px" style={{ padding: "30px 32px", display: "flex", flexDirection: "column", gap: "22px", scrollMarginTop: "88px" }}>
      <FsdPanelHead kicker="Sathi Academy" title="Full curriculum" trailing={<span className="dash-pill dash-pill-zinc">{doneLessons} / {totalLessons} lessons</span>} />
      {ACADEMY_MODULES.map((mod) => (
        <div key={mod.name} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "6px", borderBottom: "1px solid var(--border-hairline)" }}>
            <span style={{ fontSize: "16px" }}>{mod.emoji}</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--text-secondary)", letterSpacing: "var(--tracking-wide)" }}>{mod.name}</span>
          </div>
          {mod.lessons.map((l) => {
            const isActive = l.pct > 0 && l.pct < 100;
            return (
              <div key={l.title} className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 14px", cursor: "pointer" }} onClick={() => setActiveLesson(l)}>
                <FsdIconWell icon={l.pct === 100 ? IcCheck : IcBookOpen} tone={l.pct === 100 ? "emerald" : isActive ? "blue" : "zinc"} size={30} />
                <span style={{ display: "flex", flexDirection: "column", gap: "5px", flex: 1, minWidth: 0 }}>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: l.pct === 0 ? "var(--text-muted)" : "var(--text-primary)" }}>{lessonTitle(l)}</span>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", whiteSpace: "nowrap", fontFamily: lang === "en" ? "var(--font-body)" : "var(--font-devanagari)" }}>{lessonMeta(l)}</span>
                  </span>
                  {l.pct > 0 && <span className="dash-bar"><i style={{ width: `${l.pct}%`, background: l.pct === 100 ? "var(--emerald-500)" : "var(--blue-500)" }}></i></span>}
                </span>
                {isActive && <Button variant="ghost" size="sm" style={{ flexShrink: 0 }} onClick={(e) => { e.stopPropagation(); setActiveLesson(l); }}>Continue</Button>}
              </div>
            );
          })}
        </div>
      ))}
      {activeLesson && <LessonModal lesson={activeLesson} onClose={() => setActiveLesson(null)} />}
    </DeepCard>
  );
}

/* ---------- Achievements ---------- */

const BADGES = [
  { emoji: "📓", label: "First Log",     sub: "Logged first expense",    done: true  },
  { emoji: "🔥", label: "12-Day Streak", sub: "12 days in a row",        done: true  },
  { emoji: "🎯", label: "First Goal",    sub: "Created savings goal",    done: true  },
  { emoji: "💰", label: "₹1000 Saved",   sub: "Saved ₹1,000 total",      done: true  },
  { emoji: "🎓", label: "Lesson 1",      sub: "Completed first lesson",  done: true  },
  { emoji: "🔓", label: "Loan Unlocked", sub: "Reach trust score 75",    done: false },
];

function AchievementsPanel() {
  return (
    <section className="dash-panel ds-c5">
      <FsdPanelHead kicker="Your wins" title="Achievements" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {BADGES.map((b) => (
          <div
            key={b.label}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
              padding: "16px 10px", borderRadius: "16px", textAlign: "center",
              background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-hairline)",
              opacity: b.done ? 1 : 0.38, transition: "opacity 0.2s",
            }}
          >
            <span style={{ fontSize: "26px", lineHeight: 1 }}>{b.emoji}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>{b.label}</span>
              <span style={{ fontSize: "10px", color: "var(--text-muted)", lineHeight: 1.4 }}>{b.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

function GrowPage() {
  return (
    <div id="top" data-screen-label="Grow — trust score, loans, academy, achievements" style={{ position: "relative", minHeight: "100vh" }}>
      <div className="fsd-env" aria-hidden="true">
        <div className="fs-grid" style={{ position: "absolute", inset: 0, opacity: 0.55 }}></div>
        <div className="fs-grain"></div>
      </div>

      <DashboardNav activePage="grow" />

      <main className="dash-grid">
        <GrowHeader />
        <TrustScoreHero />
        <LoanMarketplaceFull />
        <AcademyFull />
        <AchievementsPanel />
      </main>
    </div>
  );
}

Object.assign(window, { GrowPage });
