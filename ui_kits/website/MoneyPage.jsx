// FinSathi Money page — balance stats (range-aware), expanded transaction
// ledger with category filters, savings goals with add-goal modal, budget.

const fsdDS = window.FinSathiDesignSystem_400c38;

/* ---------- Shared ---------- */

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

/* ---------- Range-aware data ---------- */

const RANGE_STATS = {
  week:  { balance: ["₹4,560",    "In hand · This week"],  income: ["₹3,500",    "Earned this week"],  spent: ["₹2,180",    "Expenses · This week"] },
  month: { balance: ["₹18,420",   "In hand · June"],       income: ["₹12,500",   "Earned this month"], spent: ["₹7,830",    "Expenses · June"]      },
  year:  { balance: ["₹82,450",   "In hand · 2026"],       income: ["₹1,45,000", "Earned in 2026"],    spent: ["₹89,200",   "Expenses · 2026"]      },
};

const ALL_TXNS = [
  { title: "Kirana sale",      sub: "Income · Voice log",    amount: "+₹2,400", dir: "in",  when: "Today", cat: "income",    period: ["week","month","year"] },
  { title: "Sabzi mandi",      sub: "Groceries",             amount: "−₹250",   dir: "out", when: "Today", cat: "groceries", period: ["week","month","year"] },
  { title: "Milk",             sub: "Groceries · Voice log", amount: "−₹60",    dir: "out", when: "Today", cat: "groceries", period: ["week","month","year"] },
  { title: "Tailoring order",  sub: "Income",                amount: "+₹1,200", dir: "in",  when: "Tue",   cat: "income",    period: ["week","month","year"] },
  { title: "Mobile recharge",  sub: "Utilities",             amount: "−₹239",   dir: "out", when: "Mon",   cat: "utilities", period: ["month","year"] },
  { title: "Fruits & dal",     sub: "Groceries",             amount: "−₹185",   dir: "out", when: "Mon",   cat: "groceries", period: ["month","year"] },
  { title: "DTH recharge",     sub: "Utilities",             amount: "−₹399",   dir: "out", when: "Sun",   cat: "utilities", period: ["month","year"] },
  { title: "Embroidery order", sub: "Income",                amount: "+₹3,500", dir: "in",  when: "Sun",   cat: "income",    period: ["month","year"] },
  { title: "Auto fare",        sub: "Transport",             amount: "−₹80",    dir: "out", when: "Sat",   cat: "others",    period: ["year"] },
  { title: "School fees",      sub: "Education",             amount: "−₹1,400", dir: "out", when: "Sat",   cat: "others",    period: ["year"] },
];

const CAT_FILTERS = [
  { id: "all",       label: "All" },
  { id: "income",    label: "Income" },
  { id: "groceries", label: "Groceries" },
  { id: "utilities", label: "Utilities" },
  { id: "others",    label: "Others" },
];

const GOAL_COLORS = ["var(--blue-500)", "var(--emerald-500)", "#A78BFA", "#F59E0B", "#EC4899"];
const GOAL_EMOJIS = ["🪔","🛡️","📱","🏠","✈️","🎯","💍","📚","🚗","💻"];

const INITIAL_GOALS = [
  { id: 1, name: "Diwali Fund",    emoji: "🪔", value: 0.68, pct: "68%", amount: "₹8,500",  of: "of ₹12,500", color: "var(--blue-500)"    },
  { id: 2, name: "Emergency Fund", emoji: "🛡️", value: 0.21, pct: "21%", amount: "₹2,100",  of: "of ₹10,000", color: "var(--emerald-500)" },
  { id: 3, name: "New Phone",      emoji: "📱", value: 0.15, pct: "15%", amount: "₹1,200",  of: "of ₹8,000",  color: "#A78BFA"            },
];

/* ---------- Add Goal modal ---------- */

function AddGoalModal({ onClose, onAdd }) {
  const { Button, BrutalButton } = fsdDS;
  const [name, setName]     = React.useState("");
  const [target, setTarget] = React.useState("");
  const [emoji, setEmoji]   = React.useState("🎯");
  const [error, setError]   = React.useState("");

  const handleAdd = () => {
    if (!name.trim()) { setError("Goal name is required."); return; }
    const amt = parseInt(target.replace(/[^0-9]/g, ""));
    if (!amt || amt < 100) { setError("Enter a valid target amount (min ₹100)."); return; }
    const colorIdx = Math.floor(Math.random() * GOAL_COLORS.length);
    onAdd({
      id: Date.now(),
      name: name.trim(),
      emoji,
      value: 0,
      pct: "0%",
      amount: "₹0",
      of: `of ₹${amt.toLocaleString("en-IN")}`,
      color: GOAL_COLORS[colorIdx],
    });
    onClose();
  };

  return (
    <FsdModal onClose={onClose}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div>
          <span className="dash-kicker">New goal</span>
          <h2 style={{ margin: "6px 0 0", fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>Add savings goal</h2>
        </div>
        <button onClick={onClose} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)", cursor: "pointer", fontSize: "14px", padding: "6px 12px", borderRadius: "8px", fontFamily: "var(--font-body)" }}>✕</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span className="dash-kicker">Pick an emoji</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {GOAL_EMOJIS.map((e) => (
              <button key={e} onClick={() => setEmoji(e)} style={{ width: "40px", height: "40px", borderRadius: "10px", border: emoji === e ? "2px solid var(--blue-400)" : "1px solid var(--border-soft)", background: emoji === e ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.03)", fontSize: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{e}</button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label className="dash-kicker" htmlFor="goal-name">Goal name</label>
          <input
            id="goal-name"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(""); }}
            placeholder="e.g. Vacation fund"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-soft)", borderRadius: "10px", padding: "12px 16px", color: "var(--text-primary)", fontSize: "var(--text-sm)", fontFamily: "var(--font-body)", outline: "none", width: "100%", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label className="dash-kicker" htmlFor="goal-target">Target amount (₹)</label>
          <input
            id="goal-target"
            type="number"
            value={target}
            onChange={(e) => { setTarget(e.target.value); setError(""); }}
            placeholder="e.g. 15000"
            min="100"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-soft)", borderRadius: "10px", padding: "12px 16px", color: "var(--text-primary)", fontSize: "var(--text-sm)", fontFamily: "var(--font-mono)", outline: "none", width: "100%", boxSizing: "border-box" }}
          />
        </div>

        {error && <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "#f87171" }}>{error}</p>}

        <BrutalButton style={{ width: "100%", justifyContent: "center", padding: "14px 24px", boxSizing: "border-box" }} onClick={handleAdd}>
          {emoji} Add goal
        </BrutalButton>
      </div>
    </FsdModal>
  );
}

/* ---------- Page header ---------- */

function MoneyHeader({ range, onRangeChange }) {
  const { SilverText } = fsdDS;
  const [lang, setLang] = React.useState(window.FsdI18n.getLang());
  React.useEffect(() => window.FsdI18n.subscribe(setLang), []);
  const t = window.FsdI18n.t;
  const ranges = [
    { id: "week",  label: "This week" },
    { id: "month", label: "This month" },
    { id: "year",  label: "This year" },
  ];
  return (
    <div className="ds-c12" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", padding: "12px 4px 4px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span className="dash-kicker">Thursday · 12 June</span>
        <SilverText as="h1" style={{ fontSize: "40px", margin: 0 }}>{t("money.h1")}</SilverText>
        <span style={{ fontFamily: lang === "en" ? "var(--font-body)" : "var(--font-devanagari)", fontSize: "var(--text-sm)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>{t("money.sub")}</span>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {ranges.map((r) => (
          <button key={r.id} className="dash-chip" data-active={range === r.id} onClick={() => onRangeChange(r.id)}>{r.label}</button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Stat card ---------- */

function StatCard({ kicker, amount, label, tone, Icon, pill }) {
  return (
    <section className="dash-panel ds-c4">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className="dash-kicker">{kicker}</span>
        {pill}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <FsdIconWell icon={Icon} tone={tone} size={42} />
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <span key={amount} className="fs-text-matte" style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, letterSpacing: "var(--tracking-tighter)", lineHeight: 1 }}>{amount}</span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", fontWeight: 700 }}>{label}</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Transaction ledger ---------- */

function LedgerFull({ range }) {
  const { DeepCard, Button } = fsdDS;
  const { IcArrowDownLeft, IcArrowUpRight } = window.FsdIcons;
  const [cat, setCat]       = React.useState("all");
  const [showAll, setShowAll] = React.useState(false);

  React.useEffect(() => { setCat("all"); setShowAll(false); }, [range]);

  const byPeriod  = ALL_TXNS.filter((t) => t.period.includes(range));
  const filtered  = byPeriod.filter((t) => cat === "all" || t.cat === cat);
  const visible   = showAll ? filtered : filtered.slice(0, 6);

  return (
    <DeepCard id="transactions" className="ds-c7" radius="32px" style={{ padding: "30px 32px", display: "flex", flexDirection: "column", gap: "20px", scrollMarginTop: "88px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
        <FsdPanelHead kicker="Ledger" title="Transactions" />
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {CAT_FILTERS.map((f) => (
            <button key={f.id} className="dash-chip" data-active={cat === f.id} onClick={() => { setCat(f.id); setShowAll(false); }}>{f.label}</button>
          ))}
        </div>
      </div>

      {filtered.length === 0
        ? <p style={{ margin: 0, textAlign: "center", color: "var(--text-muted)", fontSize: "var(--text-sm)", padding: "24px 0" }}>No transactions in this category for the selected period.</p>
        : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {visible.map((t, i) => (
              <div key={i} className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 14px" }}>
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
        )
      }

      {filtered.length > 6 && (
        <Button variant="ghost" size="sm" onClick={() => setShowAll((p) => !p)}>
          {showAll ? "Show less" : `Load ${filtered.length - 6} more`}
        </Button>
      )}
    </DeepCard>
  );
}

/* ---------- Savings goals ---------- */

function SavingsGoalsPanel({ goals, onAddGoal }) {
  const { ProgressRing, BrutalButton } = fsdDS;
  const [showModal, setShowModal] = React.useState(false);
  return (
    <section id="goals" className="dash-panel ds-c5" style={{ scrollMarginTop: "88px" }}>
      <FsdPanelHead kicker="Savings goals" title="Your targets" />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {goals.map((g) => (
          <div key={g.id} className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 16px" }}>
            <ProgressRing value={g.value} size={80} strokeWidth={7} color={g.color} metric={g.pct} label="" duration={1600} />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-primary)" }}>{g.emoji} {g.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{g.amount} {g.of}</span>
              <span className="dash-bar"><i style={{ width: g.pct, background: g.color }}></i></span>
            </div>
          </div>
        ))}
      </div>
      <BrutalButton style={{ fontSize: "13px", padding: "10px 20px", alignSelf: "flex-start" }} onClick={() => setShowModal(true)}>+ Add goal</BrutalButton>
      {showModal && <AddGoalModal onClose={() => setShowModal(false)} onAdd={onAddGoal} />}
    </section>
  );
}

/* ---------- Budget breakdown ---------- */

const BUDGET_CATS = [
  { name: "Groceries", pct: 38, color: "var(--blue-500)"    },
  { name: "Utilities",  pct: 18, color: "var(--emerald-500)" },
  { name: "Transport",  pct: 14, color: "#A78BFA"            },
  { name: "Others",     pct: 30, color: "var(--zinc-500)"    },
];

function BudgetPanel() {
  const { GlassBadge } = fsdDS;
  return (
    <section className="dash-panel ds-c12">
      <FsdPanelHead kicker="June · Budget" title="Where it went" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px 32px" }}>
        {BUDGET_CATS.map((c) => (
          <div key={c.name} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>{c.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{c.pct}%</span>
            </div>
            <span className="dash-bar"><i style={{ width: `${c.pct}%`, background: c.color }}></i></span>
          </div>
        ))}
      </div>
      <GlassBadge icon="💡" tint="blue" title="Sathi tip" subtitle={window.FsdI18n.t("money.tip")} />
    </section>
  );
}

/* ---------- Page ---------- */

function MoneyPage() {
  const { IcBanknote, IcArrowDownLeft, IcArrowUpRight } = window.FsdIcons;
  const [range, setRange] = React.useState("month");
  const [goals, setGoals] = React.useState(INITIAL_GOALS);

  const s = RANGE_STATS[range];

  return (
    <div id="top" data-screen-label="Money — financial overview" style={{ position: "relative", minHeight: "100vh" }}>
      <div className="fsd-env" aria-hidden="true">
        <div className="fs-grid" style={{ position: "absolute", inset: 0, opacity: 0.55 }}></div>
        <div className="fs-grain"></div>
      </div>

      <DashboardNav activePage="money" />

      <main className="dash-grid">
        <MoneyHeader range={range} onRangeChange={setRange} />

        <StatCard kicker={range === "week" ? "This week" : range === "month" ? "This month" : "This year"} amount={s.balance[0]} label={s.balance[1]} tone="blue"    Icon={IcBanknote}      pill={<span className="dash-pill dash-pill-emerald">On track</span>} />
        <StatCard kicker="Income"                                                                            amount={s.income[0]}  label={s.income[1]}  tone="emerald" Icon={IcArrowDownLeft} />
        <StatCard kicker="Spent"                                                                             amount={s.spent[0]}   label={s.spent[1]}   tone="red"     Icon={IcArrowUpRight}  />

        <LedgerFull range={range} />
        <SavingsGoalsPanel goals={goals} onAddGoal={(g) => setGoals((prev) => [...prev, g])} />
        <BudgetPanel />
      </main>
    </div>
  );
}

Object.assign(window, { MoneyPage });
