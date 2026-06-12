// FinSathi Money page — full financial management: balance stats, expanded
// transaction ledger with category filters, savings goals, budget breakdown.

const fsdDS = window.FinSathiDesignSystem_400c38;

/* ---------- Shared bits (mirror Dashboard.jsx) ---------- */

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

/* ---------- Page header ---------- */

function MoneyHeader() {
  const { SilverText } = fsdDS;
  const [range, setRange] = React.useState("month");
  const ranges = [
    { id: "week",  label: "This week" },
    { id: "month", label: "This month" },
    { id: "year",  label: "This year" },
  ];
  return (
    <div className="ds-c12" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", padding: "12px 4px 4px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span className="dash-kicker">Thursday · 12 June</span>
        <SilverText as="h1" style={{ fontSize: "40px", margin: 0 }}>Aapka Paisa.</SilverText>
        <span style={{ fontFamily: "var(--font-devanagari)", fontSize: "var(--text-sm)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>पैसे का पूरा हिसाब, एक जगह।</span>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {ranges.map((r) => (
          <button key={r.id} className="dash-chip" data-active={range === r.id} onClick={() => setRange(r.id)}>{r.label}</button>
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
          <span className="fs-text-matte" style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, letterSpacing: "var(--tracking-tighter)", lineHeight: 1 }}>{amount}</span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", fontWeight: 700 }}>{label}</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Transaction ledger (expanded) ---------- */

const ALL_TXNS = [
  { title: "Kirana sale",       sub: "Income · Voice log",    amount: "+₹2,400", dir: "in",  when: "Today",  cat: "income"    },
  { title: "Sabzi mandi",       sub: "Groceries",             amount: "−₹250",   dir: "out", when: "Today",  cat: "groceries" },
  { title: "Milk",              sub: "Groceries · Voice log", amount: "−₹60",    dir: "out", when: "Today",  cat: "groceries" },
  { title: "Tailoring order",   sub: "Income",                amount: "+₹1,200", dir: "in",  when: "Tue",    cat: "income"    },
  { title: "Mobile recharge",   sub: "Utilities",             amount: "−₹239",   dir: "out", when: "Mon",    cat: "utilities" },
  { title: "Fruits & dal",      sub: "Groceries",             amount: "−₹185",   dir: "out", when: "Mon",    cat: "groceries" },
  { title: "DTH recharge",      sub: "Utilities",             amount: "−₹399",   dir: "out", when: "Sun",    cat: "utilities" },
  { title: "Embroidery order",  sub: "Income",                amount: "+₹3,500", dir: "in",  when: "Sun",    cat: "income"    },
  { title: "Auto fare",         sub: "Transport",             amount: "−₹80",    dir: "out", when: "Sat",    cat: "others"    },
  { title: "School fees",       sub: "Education",             amount: "−₹1,400", dir: "out", when: "Sat",    cat: "others"    },
];

const CAT_FILTERS = [
  { id: "all",       label: "All" },
  { id: "income",    label: "Income" },
  { id: "groceries", label: "Groceries" },
  { id: "utilities", label: "Utilities" },
  { id: "others",    label: "Others" },
];

function LedgerFull() {
  const { DeepCard, Button } = fsdDS;
  const { IcArrowDownLeft, IcArrowUpRight } = window.FsdIcons;
  const [cat, setCat] = React.useState("all");
  const [showAll, setShowAll] = React.useState(false);

  const filtered = ALL_TXNS.filter((t) => cat === "all" || t.cat === cat);
  const visible  = showAll ? filtered : filtered.slice(0, 6);

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

      {filtered.length > 6 && (
        <Button variant="ghost" size="sm" onClick={() => setShowAll((p) => !p)}>
          {showAll ? "Show less" : `Load ${filtered.length - 6} more`}
        </Button>
      )}
    </DeepCard>
  );
}

/* ---------- Savings goals ---------- */

const GOALS = [
  { name: "Diwali Fund",    emoji: "🪔", value: 0.68, pct: "68%", amount: "₹8,500",  of: "of ₹12,500", color: "var(--blue-500)"    },
  { name: "Emergency Fund", emoji: "🛡️", value: 0.21, pct: "21%", amount: "₹2,100",  of: "of ₹10,000", color: "var(--emerald-500)" },
  { name: "New Phone",      emoji: "📱", value: 0.15, pct: "15%", amount: "₹1,200",  of: "of ₹8,000",  color: "var(--zinc-500)"    },
];

function SavingsGoalsPanel() {
  const { ProgressRing, BrutalButton } = fsdDS;
  return (
    <section id="goals" className="dash-panel ds-c5" style={{ scrollMarginTop: "88px" }}>
      <FsdPanelHead kicker="Savings goals" title="Your targets" />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {GOALS.map((g) => (
          <div key={g.name} className="fs-widget" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 16px" }}>
            <ProgressRing value={g.value} size={80} strokeWidth={7} color={g.color} metric={g.pct} label="" duration={1600} />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-primary)" }}>{g.emoji} {g.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{g.amount} {g.of}</span>
              <span className="dash-bar"><i style={{ width: g.pct, background: g.color }}></i></span>
            </div>
          </div>
        ))}
      </div>
      <BrutalButton style={{ fontSize: "13px", padding: "10px 20px", alignSelf: "flex-start" }}>+ Add goal</BrutalButton>
    </section>
  );
}

/* ---------- Budget breakdown ---------- */

const BUDGET_CATS = [
  { name: "Groceries", pct: 38, color: "var(--blue-500)" },
  { name: "Utilities",  pct: 18, color: "var(--emerald-500)" },
  { name: "Transport",  pct: 14, color: "#A78BFA" },
  { name: "Others",     pct: 30, color: "var(--zinc-500)" },
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
      <GlassBadge icon="💡" tint="blue" title="Sathi tip" subtitle="Groceries pe ₹40 kam karein — ₹500/month bachenge." />
    </section>
  );
}

/* ---------- Page ---------- */

function MoneyPage() {
  const { IcBanknote, IcArrowDownLeft, IcArrowUpRight } = window.FsdIcons;
  return (
    <div id="top" data-screen-label="Money — financial overview" style={{ position: "relative", minHeight: "100vh" }}>
      <div className="fsd-env" aria-hidden="true">
        <div className="fs-grid" style={{ position: "absolute", inset: 0, opacity: 0.55 }}></div>
        <div className="fs-grain"></div>
      </div>

      <DashboardNav activePage="money" />

      <main className="dash-grid">
        <MoneyHeader />

        <StatCard kicker="This month" amount="₹18,420" label="In hand · June"    tone="blue"    Icon={IcBanknote}      pill={<span className="dash-pill dash-pill-emerald">On track</span>} />
        <StatCard kicker="Income"     amount="₹12,500" label="Earned this month" tone="emerald" Icon={IcArrowDownLeft} />
        <StatCard kicker="Spent"      amount="₹7,830"  label="Expenses · June"   tone="red"     Icon={IcArrowUpRight}  />

        <LedgerFull />
        <SavingsGoalsPanel />
        <BudgetPanel />
      </main>
    </div>
  );
}

Object.assign(window, { MoneyPage });
