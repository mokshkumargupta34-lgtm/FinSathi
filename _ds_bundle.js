/* @ds-bundle: {"format":3,"namespace":"FinSathiDesignSystem_400c38","components":[{"name":"BrutalButton","sourcePath":"components/core/BrutalButton.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DeepCard","sourcePath":"components/display/DeepCard.jsx"},{"name":"GlassBadge","sourcePath":"components/display/GlassBadge.jsx"},{"name":"ProgressRing","sourcePath":"components/display/ProgressRing.jsx"},{"name":"WidgetRow","sourcePath":"components/display/WidgetRow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"PasswordInput","sourcePath":"components/forms/PasswordInput.jsx"},{"name":"SilverText","sourcePath":"components/text/SilverText.jsx"},{"name":"SpecialText","sourcePath":"components/text/SpecialText.jsx"},{"name":"Typewriter","sourcePath":"components/text/Typewriter.jsx"}],"sourceHashes":{"components/core/BrutalButton.jsx":"91f3070c75a6","components/core/Button.jsx":"a13535d0d8b2","components/display/DeepCard.jsx":"fcba280cbf8e","components/display/GlassBadge.jsx":"a90723600d6d","components/display/ProgressRing.jsx":"efd8d929f897","components/display/WidgetRow.jsx":"4385b470a197","components/forms/Input.jsx":"ddb10b2b7176","components/forms/Label.jsx":"edd7897803f1","components/forms/PasswordInput.jsx":"5302da68efb0","components/text/SilverText.jsx":"1741a99e4bb3","components/text/SpecialText.jsx":"873afd0fc1c7","components/text/Typewriter.jsx":"fc77ab3b4d33","ui_kits/website/AuthPage.jsx":"9ce987acd306","ui_kits/website/Dashboard.jsx":"3f2388e58a1a","ui_kits/website/DashboardNav.jsx":"0d998761e2b2","ui_kits/website/LandingHero.jsx":"2d1189762e81","ui_kits/website/components.jsx":"946cb60525d9","ui_kits/website/dashIcons.jsx":"1bf729b14c05"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FinSathiDesignSystem_400c38 = window.FinSathiDesignSystem_400c38 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/BrutalButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Neo-brutalist hard-shadow button — square corners, 2px border,
 * 4px offset shadow. The brand's high-emphasis counterpoint.
 */
function BrutalButton({
  color,
  textColor,
  hasBorder = true,
  borderColor,
  hasShadow = true,
  shadowColor,
  radius = 0,
  children,
  style,
  className = "",
  ...props
}) {
  const [state, setState] = React.useState("rest"); // rest | hover | active

  const bg = color || "var(--bg-page)";
  const fg = textColor || "var(--text-primary)";
  const border = hasBorder ? `2px solid ${borderColor || "var(--text-primary)"}` : "none";
  const shadow = shadowColor || "var(--text-primary)";
  let transform = "translate(0, 0)";
  let boxShadow = hasShadow ? `4px 4px 0px ${shadow}` : "none";
  if (hasShadow && state === "hover") {
    transform = "translate(-2px, -2px)";
    boxShadow = `6px 6px 0px ${shadow}`;
  }
  if (state === "active") {
    if (hasShadow) {
      transform = "translate(4px, 4px)";
      boxShadow = "none";
    } else {
      transform = "scale(0.95)";
    }
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: className,
    onMouseEnter: () => setState("hover"),
    onMouseLeave: () => setState("rest"),
    onMouseDown: () => setState("active"),
    onMouseUp: () => setState("hover"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 24px",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-body)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      flexShrink: 0,
      backgroundColor: bg,
      color: fg,
      border: border,
      borderRadius: `${radius}px`,
      boxShadow: boxShadow,
      transform: transform,
      transition: "all 0.2s ease-in-out",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { BrutalButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrutalButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, props), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/DeepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The signature deep navy physical card with optional mouse-following sheen.
 */
function DeepCard({
  sheen = true,
  radius,
  style,
  children,
  ...props
}) {
  const ref = React.useRef(null);
  const onMouseMove = e => {
    if (!sheen || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onMouseMove: onMouseMove,
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--gradient-card)",
      boxShadow: "var(--shadow-card-deep)",
      border: "1px solid var(--border-hairline)",
      borderRadius: radius || "var(--radius-card)",
      ...style
    }
  }, props), children, sheen && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      pointerEvents: "none",
      zIndex: 50,
      background: "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%)",
      mixBlendMode: "screen"
    }
  }));
}
Object.assign(__ds_scope, { DeepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/DeepCard.jsx", error: String((e && e.message) || e) }); }

// components/display/GlassBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TINTS = {
  blue: {
    from: "rgba(59,130,246,0.2)",
    to: "rgba(30,58,138,0.1)",
    border: "rgba(96,165,250,0.3)"
  },
  indigo: {
    from: "rgba(99,102,241,0.2)",
    to: "rgba(49,46,129,0.1)",
    border: "rgba(129,140,248,0.3)"
  },
  emerald: {
    from: "rgba(16,185,129,0.2)",
    to: "rgba(6,78,59,0.1)",
    border: "rgba(52,211,153,0.3)"
  }
};

/**
 * Frosted glass floating badge — emoji/icon well + title + quiet subtitle.
 * Floats above phone mockups and imagery.
 */
function GlassBadge({
  icon,
  title,
  subtitle,
  tint = "blue",
  style,
  ...props
}) {
  const t = TINTS[tint] || TINTS.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "16px",
      background: "var(--gradient-glass)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      boxShadow: "var(--shadow-glass)",
      borderRadius: "var(--radius-badge)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "var(--radius-pill)",
      background: `linear-gradient(180deg, ${t.from} 0%, ${t.to} 100%)`,
      border: `1px solid ${t.border}`,
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--white)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)"
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { GlassBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/GlassBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular progress ring with center metric — sweeps to `value` on mount.
 */
function ProgressRing({
  value = 0.85,
  size = 176,
  strokeWidth = 12,
  color = "var(--blue-500)",
  metric,
  label,
  duration = 2000,
  style,
  ...props
}) {
  const r = (size - strokeWidth * 2 - 8) / 2;
  const c = 2 * Math.PI * r;
  const [offset, setOffset] = React.useState(c);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setOffset(c * (1 - Math.max(0, Math.min(1, value))))));
    return () => cancelAnimationFrame(id);
  }, [value, c]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.8))",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      position: "absolute",
      inset: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "rgba(255,255,255,0.03)",
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: offset,
    style: {
      transform: "rotate(-90deg)",
      transformOrigin: "center",
      transition: `stroke-dashoffset ${duration}ms var(--ease-in-out-power)`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, metric != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size / 4.4,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--white)"
    }
  }, metric), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: Math.max(8, size / 22),
      color: "var(--text-secondary)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      fontWeight: "var(--weight-bold)",
      marginTop: 2
    }
  }, label)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/display/WidgetRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ROW_TINTS = {
  blue: {
    from: "rgba(59,130,246,0.2)",
    to: "rgba(37,99,235,0.05)",
    border: "rgba(96,165,250,0.2)",
    color: "#60A5FA"
  },
  emerald: {
    from: "rgba(16,185,129,0.2)",
    to: "rgba(5,150,105,0.05)",
    border: "rgba(52,211,153,0.2)",
    color: "#34D399"
  }
};

/**
 * Inset widget row for dark in-app screens — tinted icon well + content.
 */
function WidgetRow({
  icon,
  tint = "blue",
  title,
  subtitle,
  trailing,
  style,
  children,
  ...props
}) {
  const t = ROW_TINTS[tint] || ROW_TINTS.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      background: "var(--gradient-widget)",
      boxShadow: "var(--shadow-widget)",
      border: "1px solid rgba(255,255,255,0.03)",
      borderRadius: "var(--radius-widget)",
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "12px",
      flexShrink: 0,
      background: `linear-gradient(135deg, ${t.from} 0%, ${t.to} 100%)`,
      border: `1px solid ${t.border}`,
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: t.color
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--white)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)"
    }
  }, subtitle), children), trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      color: "var(--text-secondary)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)"
    }
  }, trailing));
}
Object.assign(__ds_scope, { WidgetRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/WidgetRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FS_INPUT_STYLE_ID = "fs-input-styles";
const fsInputCss = `
.fs-input {
  display: flex; height: 44px; width: 100%; box-sizing: border-box;
  border-radius: var(--radius-input);
  border: 1px solid var(--border-soft);
  background: rgba(255,255,255,0.02);
  padding: 12px;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-primary);
  box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.fs-input::placeholder { color: rgba(161,161,170,0.7); }
.fs-input:focus-visible { outline: none; background: rgba(255,255,255,0.06); border-color: var(--border-glass); }
.fs-input:disabled { cursor: not-allowed; opacity: 0.5; }
`;
function ensureFsInputStyles() {
  if (typeof document !== "undefined" && !document.getElementById(FS_INPUT_STYLE_ID)) {
    const s = document.createElement("style");
    s.id = FS_INPUT_STYLE_ID;
    s.textContent = fsInputCss;
    document.head.appendChild(s);
  }
}

/** Text input on dark surfaces — hairline border, quiet inset depth. */
function Input({
  label,
  id,
  className = "",
  style,
  ...props
}) {
  ensureFsInputStyles();
  const reactId = React.useId();
  const inputId = id || reactId;
  const field = /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: `fs-input ${className}`.trim(),
    style: style
  }, props));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "8px",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      color: "var(--text-primary)"
    }
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Form field label. */
function Label({
  htmlFor,
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      color: "var(--text-primary)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/PasswordInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EyeIcon = ({
  off
}) => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, off ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M9.88 9.88a3 3 0 1 0 4.24 4.24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
}), /*#__PURE__*/React.createElement("line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
})) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
})));

/** Password input with show/hide eye toggle (Lucide eye / eye-off). */
function PasswordInput({
  label = "Password",
  style,
  ...props
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    label: label,
    type: show ? "text" : "password",
    style: {
      paddingRight: "40px",
      ...style
    }
  }, props)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShow(p => !p),
    "aria-label": show ? "Hide password" : "Show password",
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      height: "44px",
      width: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "rgba(161,161,170,0.8)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--text-primary)",
    onMouseLeave: e => e.currentTarget.style.color = "rgba(161,161,170,0.8)"
  }, /*#__PURE__*/React.createElement(EyeIcon, {
    off: show
  })));
}
Object.assign(__ds_scope, { PasswordInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PasswordInput.jsx", error: String((e && e.message) || e) }); }

// components/text/SilverText.jsx
try { (() => {
/**
 * Silver matte gradient display text — the brand's physical-material
 * treatment for hero lines and the wordmark.
 */
function SilverText({
  as = "span",
  shadow = true,
  uppercase = false,
  className = "",
  style,
  children,
  ...props
}) {
  return React.createElement(as, {
    className,
    style: {
      background: "var(--gradient-silver)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      transform: "translateZ(0)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tighter)",
      textTransform: uppercase ? "uppercase" : "none",
      filter: shadow ? "drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) drop-shadow(0px 4px 8px rgba(0,0,0,0.6))" : "none",
      margin: 0,
      ...style
    },
    ...props
  }, children);
}
Object.assign(__ds_scope, { SilverText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/SilverText.jsx", error: String((e && e.message) || e) }); }

// components/text/SpecialText.jsx
try { (() => {
const RANDOM_CHARS = "_!X$0-+*#";
function getRandomChar(prevChar) {
  let char;
  do {
    char = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
  } while (char === prevChar);
  return char;
}

/**
 * Mono scramble/decode text reveal. Phase 1 types random glyphs to full
 * length; phase 2 resolves them left-to-right into the real text.
 */
function SpecialText({
  children,
  speed = 20,
  delay = 0,
  className = "",
  inView = false,
  once = true,
  style
}) {
  const text = String(children);
  const containerRef = React.useRef(null);
  const [started, setStarted] = React.useState(false);
  const [display, setDisplay] = React.useState("\u00A0".repeat(text.length));

  // Visibility gate
  React.useEffect(() => {
    if (!inView) {
      const t = setTimeout(() => setStarted(true), Math.max(0, delay * 1000));
      return () => clearTimeout(t);
    }
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const obs = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        setTimeout(() => setStarted(true), Math.max(0, delay * 1000));
        if (once) obs.disconnect();
      }
    }, {
      rootMargin: "-100px"
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, once, delay]);

  // Animation
  React.useEffect(() => {
    if (!started) return;
    let phase = 1;
    let step = 0;
    const interval = setInterval(() => {
      if (phase === 1) {
        const maxSteps = text.length * 2;
        const len = Math.min(step + 1, text.length);
        const chars = [];
        for (let i = 0; i < len; i++) chars.push(getRandomChar(chars[i - 1]));
        for (let i = len; i < text.length; i++) chars.push("\u00A0");
        setDisplay(chars.join(""));
        step += 1;
        if (step >= maxSteps) {
          phase = 2;
          step = 0;
        }
      } else {
        const revealed = Math.floor(step / 2);
        const chars = [];
        for (let i = 0; i < revealed && i < text.length; i++) chars.push(text[i]);
        if (revealed < text.length) chars.push(step % 2 === 0 ? "_" : getRandomChar());
        for (let i = chars.length; i < text.length; i++) chars.push(getRandomChar());
        setDisplay(chars.join(""));
        step += 1;
        if (step >= text.length * 2) {
          setDisplay(text);
          clearInterval(interval);
        }
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);
  return /*#__PURE__*/React.createElement("span", {
    ref: containerRef,
    className: className,
    style: {
      display: "inline-flex",
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--weight-medium)",
      whiteSpace: "pre",
      ...style
    }
  }, display);
}
Object.assign(__ds_scope, { SpecialText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/SpecialText.jsx", error: String((e && e.message) || e) }); }

// components/text/Typewriter.jsx
try { (() => {
/** Typewriter text effect with blinking cursor; supports looping arrays. */
function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className = "",
  style
}) {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [textArrayIndex, setTextArrayIndex] = React.useState(0);
  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";
  React.useEffect(() => {
    if (!currentText) return;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText(prev => prev + currentText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else if (loop) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
          setTextArrayIndex(prev => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentText, loop, speed, deleteSpeed, delay, displayText]);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style
  }, displayText, /*#__PURE__*/React.createElement("span", {
    style: {
      animation: "fs-cursor-pulse 1s cubic-bezier(0.4,0,0.6,1) infinite"
    }
  }, cursor), /*#__PURE__*/React.createElement("style", null, `@keyframes fs-cursor-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }`));
}
Object.assign(__ds_scope, { Typewriter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/Typewriter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AuthPage.jsx
try { (() => {
// FinSathi auth — sign in / sign up split screen, ported from
// uploads/login page.txt and rebranded. Right panel: deep navy stage with
// wordmark + typewriter quote (no brand imagery was provided).

const {
  Button,
  Input,
  PasswordInput,
  Typewriter,
  SilverText
} = window.FinSathiDesignSystem_400c38;
const GoogleG = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#FFC107",
  d: "M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#FF3D00",
  d: "m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#4CAF50",
  d: "M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#1976D2",
  d: "M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
}));
function SignInForm() {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    },
    autoComplete: "on",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-primary)"
    }
  }, "Sign in to your account"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      textWrap: "balance"
    }
  }, "Enter your email below to sign in")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "m@example.com",
    required: true,
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(PasswordInput, {
    name: "password",
    required: true,
    autoComplete: "current-password",
    placeholder: "Password"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    style: {
      marginTop: "8px"
    },
    type: "submit"
  }, "Sign In")));
}
function SignUpForm() {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    },
    autoComplete: "on",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-primary)"
    }
  }, "Create an account"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      textWrap: "balance"
    }
  }, "Enter your details below to sign up")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Asha Patel",
    required: true,
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "m@example.com",
    required: true,
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(PasswordInput, {
    name: "password",
    required: true,
    autoComplete: "new-password",
    placeholder: "Password"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    style: {
      marginTop: "8px"
    },
    type: "submit"
  }, "Sign Up")));
}
function AuthPage() {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const quote = isSignIn ? "Namaste! Welcome back — your journey continues." : "A new chapter awaits. Apna sathi banaiye.";
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Auth \u2014 sign in / sign up",
    style: {
      width: "100%",
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "var(--bg-page)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 24px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      position: "absolute",
      top: "24px",
      left: "28px",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tighter)",
      textTransform: "uppercase",
      fontSize: "18px",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, "FinSathi"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "350px",
      display: "grid",
      gap: "12px"
    }
  }, isSignIn ? /*#__PURE__*/React.createElement(SignInForm, null) : /*#__PURE__*/React.createElement(SignUpForm, null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "4px"
    }
  }, isSignIn ? "Don't have an account?" : "Already have an account?", /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    onClick: () => setIsSignIn(p => !p)
  }, isSignIn ? "Sign up" : "Sign in")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      fontSize: "var(--text-sm)",
      margin: "4px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: "50% 0 auto 0",
      borderTop: "1px solid var(--border-soft)"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      background: "var(--bg-page)",
      padding: "0 8px",
      color: "var(--text-muted)"
    }
  }, "Or continue with")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    type: "button"
  }, /*#__PURE__*/React.createElement(GoogleG, null), " Continue with Google"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--gradient-card)",
      boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-grid",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs-grain",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(SilverText, {
    as: "div",
    uppercase: true,
    style: {
      fontSize: "clamp(40px, 9vw, 72px)",
      lineHeight: 1,
      maxWidth: "100%"
    }
  }, "FinSathi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-devanagari)",
      color: "var(--text-secondary)",
      fontSize: "var(--text-body)",
      marginTop: "10px",
      letterSpacing: "0.06em"
    }
  }, "\u0906\u092A\u0915\u093E \u092A\u0948\u0938\u093E, \u0906\u092A\u0915\u0940 \u092D\u093E\u0937\u093E"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      height: "100px",
      background: "linear-gradient(to top, var(--bg-page), transparent)"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      position: "absolute",
      bottom: "24px",
      left: 0,
      right: 0,
      zIndex: 10,
      margin: 0,
      textAlign: "center",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "var(--text-lg)",
      fontWeight: 500
    }
  }, "\u201C", /*#__PURE__*/React.createElement(Typewriter, {
    key: quote,
    text: quote,
    speed: 55
  }), "\u201D"), /*#__PURE__*/React.createElement("cite", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: 300,
      color: "var(--text-muted)",
      fontStyle: "normal"
    }
  }, "\u2014 FinSathi"))));
}
Object.assign(window, {
  AuthPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AuthPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Dashboard.jsx
try { (() => {
// FinSathi post-login dashboard — voice-first logging, ledger, goals,
// trust score, academy, loan marketplace, Sathi AI, multi-language.
// Composes DS components from the compiled bundle.

const fsdDS = window.FinSathiDesignSystem_400c38;

/* ---------- Shared bits ---------- */

function FsdIconWell({
  icon: Icon,
  tone = "blue",
  size = 34
}) {
  const tones = {
    blue: {
      bg: "rgba(59,130,246,0.12)",
      fg: "var(--blue-400)"
    },
    emerald: {
      bg: "rgba(16,185,129,0.12)",
      fg: "var(--emerald-400)"
    },
    red: {
      bg: "rgba(239,68,68,0.12)",
      fg: "#F87171"
    },
    zinc: {
      bg: "rgba(255,255,255,0.06)",
      fg: "var(--text-muted)"
    }
  };
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: "10px",
      background: t.bg,
      color: t.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), inset 0 -1px 1px rgba(0,0,0,0.4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 16
  }));
}
function FsdPanelHead({
  kicker,
  title,
  trailing
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-kicker"
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    className: "dash-h"
  }, title)), trailing);
}

/* ---------- 1 · Voice-first logger ---------- */

function VoiceLogCard() {
  const {
    DeepCard,
    Typewriter
  } = fsdDS;
  const {
    IcMic,
    IcCheck
  } = window.FsdIcons;
  const [phase, setPhase] = React.useState("idle"); // idle | listening | logged
  const [voiceLang, setVoiceLang] = React.useState("हिंदी");
  const timer = React.useRef(null);
  const startListening = () => {
    if (phase === "listening") return;
    setPhase("listening");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPhase("logged"), 3400);
  };
  React.useEffect(() => () => clearTimeout(timer.current), []);
  return /*#__PURE__*/React.createElement(DeepCard, {
    id: "voice-log",
    className: "ds-c7",
    radius: "32px",
    style: {
      padding: "30px 32px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      scrollMarginTop: "88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "24px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      maxWidth: "330px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-kicker",
    style: {
      color: "rgba(191,219,254,0.6)"
    }
  }, "Voice log"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "28px",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tight)",
      lineHeight: "var(--leading-tight)",
      color: "var(--text-primary)"
    }
  }, "Bol kar likhiye."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      fontWeight: 300,
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, "Tap the mic and speak \u2014 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-devanagari)"
    }
  }, "\u201C\u0906\u091C \u0938\u092C\u094D\u091C\u093C\u0940 \u092A\u0947 \u20B9250 \u0916\u0930\u094D\u091A \u0939\u0941\u090F\u201D"), " \u2014 Sathi sorts it into your ledger.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      paddingTop: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fsd-pulse",
    "data-on": phase === "listening",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: startListening,
    "aria-label": "Start voice log",
    style: {
      position: "relative",
      width: "84px",
      height: "84px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      color: phase === "listening" ? "var(--blue-400)" : "var(--silver-200)",
      background: "var(--gradient-btn-dark)",
      boxShadow: "var(--shadow-btn-dark)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.4s var(--ease-tactile)"
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "";
    }
  }, /*#__PURE__*/React.createElement(IcMic, {
    size: 30
  }))), phase === "listening" ? /*#__PURE__*/React.createElement("span", {
    className: "fsd-bars",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--text-muted)"
    }
  }, "Tap to speak"))), /*#__PURE__*/React.createElement("div", {
    className: "fs-widget",
    style: {
      minHeight: "58px",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, phase === "idle" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      fontWeight: 300
    }
  }, "Your last log appears here \u2014 sab kuchh apni bhasha mein."), phase === "listening" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-devanagari)",
      fontSize: "var(--text-body)",
      color: "var(--text-primary)"
    }
  }, "\u201C", /*#__PURE__*/React.createElement(Typewriter, {
    text: "\u0906\u091C \u0926\u0942\u0927 \u092A\u0947 \u0938\u093E\u0920 \u0930\u0941\u092A\u092F\u0947 \u0916\u0930\u094D\u091A \u0939\u0941\u090F\u2026",
    speed: 70
  }), "\u201D"), phase === "logged" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FsdIconWell, {
    icon: IcCheck,
    tone: "emerald",
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Logged \u2014 Milk \xB7 Groceries"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-devanagari)"
    }
  }, "\u0926\u0942\u0927 \u2014 \u0906\u0935\u093E\u091C\u093C \u0938\u0947 \u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "#F87171"
    }
  }, "\u2212\u20B960"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--text-muted)",
      marginRight: "4px"
    }
  }, "Speaks"), ["हिंदी", "English", "தமிழ்", "मराठी"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: "dash-chip",
    "data-active": l === voiceLang,
    onClick: () => setVoiceLang(l),
    style: {
      fontFamily: l === "English" ? "var(--font-body)" : "var(--font-devanagari)"
    }
  }, l))));
}

/* ---------- 2 · Balance summary ---------- */

function BalancePanel() {
  const {
    IcArrowDownLeft,
    IcArrowUpRight
  } = window.FsdIcons;
  const row = (Icon, tone, label, value, color) => /*#__PURE__*/React.createElement("div", {
    className: "fs-widget",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement(FsdIconWell, {
    icon: Icon,
    tone: tone,
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color
    }
  }, value));
  return /*#__PURE__*/React.createElement("section", {
    className: "dash-panel ds-c5"
  }, /*#__PURE__*/React.createElement(FsdPanelHead, {
    kicker: "This month",
    title: "Balance",
    trailing: /*#__PURE__*/React.createElement("span", {
      className: "dash-pill dash-pill-emerald"
    }, "On track")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      padding: "6px 0 2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-text-matte",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "46px",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tighter)",
      lineHeight: 1
    }
  }, "\u20B918,420"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--text-muted)",
      marginTop: "8px"
    }
  }, "In hand \xB7 June")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, row(IcArrowDownLeft, "emerald", "Income", "+₹12,500", "var(--emerald-400)"), row(IcArrowUpRight, "red", "Spent", "−₹7,830", "#F87171")));
}

/* ---------- 3 · Transactions ledger ---------- */

const FSD_TXNS = [{
  title: "Kirana sale",
  sub: "Income · Voice log",
  amount: "+₹2,400",
  dir: "in",
  when: "Today"
}, {
  title: "Sabzi mandi",
  sub: "Groceries",
  amount: "−₹250",
  dir: "out",
  when: "Today"
}, {
  title: "Milk",
  sub: "Groceries · Voice log",
  amount: "−₹60",
  dir: "out",
  when: "Today"
}, {
  title: "Tailoring order",
  sub: "Income",
  amount: "+₹1,200",
  dir: "in",
  when: "Tue"
}, {
  title: "Mobile recharge",
  sub: "Utilities",
  amount: "−₹239",
  dir: "out",
  when: "Mon"
}];
function LedgerPanel() {
  const {
    Button
  } = fsdDS;
  const {
    IcArrowDownLeft,
    IcArrowUpRight
  } = window.FsdIcons;
  return /*#__PURE__*/React.createElement("section", {
    id: "transactions",
    className: "dash-panel ds-c5"
  }, /*#__PURE__*/React.createElement(FsdPanelHead, {
    kicker: "Ledger",
    title: "Transactions",
    trailing: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      size: "sm"
    }, "View all")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, FSD_TXNS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    className: "fs-widget",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "11px 14px"
    }
  }, /*#__PURE__*/React.createElement(FsdIconWell, {
    icon: t.dir === "in" ? IcArrowDownLeft : IcArrowUpRight,
    tone: t.dir === "in" ? "emerald" : "red",
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, t.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "1px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: t.dir === "in" ? "var(--emerald-400)" : "#F87171"
    }
  }, t.amount), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--text-muted)"
    }
  }, t.when))))));
}

/* ---------- 4 · Savings goals ---------- */

function GoalsPanel() {
  const {
    ProgressRing,
    GlassBadge
  } = fsdDS;
  return /*#__PURE__*/React.createElement("section", {
    id: "goals",
    className: "dash-panel ds-c4"
  }, /*#__PURE__*/React.createElement(FsdPanelHead, {
    kicker: "Savings goals",
    title: "Diwali fund"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "2px 0"
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 0.68,
    size: 150,
    strokeWidth: 11,
    metric: "\u20B98,500",
    label: "of \u20B912,500 goal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-bar",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: "21%",
      background: "var(--emerald-500)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Emergency fund"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u20B92,100 / \u20B910,000"))), /*#__PURE__*/React.createElement(GlassBadge, {
    icon: "\uD83C\uDFAF",
    tint: "blue",
    title: "Sathi nudge",
    subtitle: "Save \u20B940 a day \u2014 Diwali goal lands 2 weeks early."
  }));
}

/* ---------- 5 · Trust score ---------- */

function TrustPanel() {
  const {
    ProgressRing,
    Button
  } = fsdDS;
  const {
    IcTrendingUp
  } = window.FsdIcons;
  return /*#__PURE__*/React.createElement("section", {
    id: "trust-score",
    className: "dash-panel ds-c3",
    style: {
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(FsdPanelHead, {
    kicker: "Credit readiness",
    title: "Trust Score"
  }), /*#__PURE__*/React.createElement(ProgressRing, {
    value: 0.72,
    size: 130,
    strokeWidth: 10,
    color: "var(--emerald-500)",
    metric: "72",
    label: "of 100"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "var(--text-xs)",
      color: "var(--emerald-400)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(IcTrendingUp, {
    size: 13
  }), " +4 this month"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      fontWeight: 300,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      textWrap: "pretty"
    }
  }, "Daily logging builds your score \u2014 micro-loans unlock at every level."), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "sm",
    href: "#loans",
    style: {
      width: "100%"
    }
  }, "See loan offers"));
}

/* ---------- 6 · Sathi Academy ---------- */

const FSD_LESSONS = [{
  title: "Emergency fund kaise banayein",
  meta: "3 min · हिंदी",
  pct: 100
}, {
  title: "UPI aur online safety",
  meta: "4 min · हिंदी",
  pct: 60
}, {
  title: "Bachat ke 3 aasaan tarike",
  meta: "5 min · हिंदी",
  pct: 0
}];
function AcademyPanel() {
  const {
    Button
  } = fsdDS;
  const {
    IcBookOpen,
    IcCheck
  } = window.FsdIcons;
  return /*#__PURE__*/React.createElement("section", {
    id: "academy",
    className: "dash-panel ds-c5"
  }, /*#__PURE__*/React.createElement(FsdPanelHead, {
    kicker: "Sathi Academy",
    title: "Keep learning",
    trailing: /*#__PURE__*/React.createElement("span", {
      className: "dash-pill dash-pill-zinc"
    }, "5 / 16 lessons")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, FSD_LESSONS.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.title,
    className: "fs-widget",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement(FsdIconWell, {
    icon: l.pct === 100 ? IcCheck : IcBookOpen,
    tone: l.pct === 100 ? "emerald" : "blue",
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, l.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      whiteSpace: "nowrap",
      fontFamily: "var(--font-devanagari)"
    }
  }, l.meta)), /*#__PURE__*/React.createElement("span", {
    className: "dash-bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: `${l.pct}%`,
      background: l.pct === 100 ? "var(--emerald-500)" : "var(--blue-500)"
    }
  })))))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Continue lesson 6"));
}

/* ---------- 7 · Loan marketplace ---------- */

function LoansPanel() {
  const {
    BrutalButton,
    Button
  } = fsdDS;
  const {
    IcBanknote
  } = window.FsdIcons;
  return /*#__PURE__*/React.createElement("section", {
    id: "loans",
    className: "dash-panel ds-c7"
  }, /*#__PURE__*/React.createElement(FsdPanelHead, {
    kicker: "Loan marketplace",
    title: "Offers for you",
    trailing: /*#__PURE__*/React.createElement("span", {
      className: "dash-pill dash-pill-zinc"
    }, "Matched to score 72")
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs-widget",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement(FsdIconWell, {
    icon: IcBanknote,
    tone: "blue"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Sathi Micro Finance"), /*#__PURE__*/React.createElement("span", {
    className: "dash-pill dash-pill-emerald"
  }, "Pre-approved")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, "\u20B925,000 \xB7 1.5%/mo \xB7 12 months \xB7 EMI \u20B92,265")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BrutalButton, {
    style: {
      padding: "10px 18px",
      fontSize: "13px"
    }
  }, "View offer"))), /*#__PURE__*/React.createElement("div", {
    className: "fs-widget",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "16px",
      opacity: 0.75
    }
  }, /*#__PURE__*/React.createElement(FsdIconWell, {
    icon: IcBanknote,
    tone: "zinc"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Bandhan Partner Loan"), /*#__PURE__*/React.createElement("span", {
    className: "dash-pill dash-pill-zinc"
  }, "Unlocks at score 75")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, "\u20B950,000 \xB7 1.2%/mo \xB7 24 months")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "#trust-score"
  }, "Improve score"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      fontWeight: 300,
      color: "var(--text-muted)"
    }
  }, "Offers from RBI-registered partners. Sathi never charges you to apply."));
}

/* ---------- 8 · Sathi AI assistant ---------- */

function SathiAIPanel() {
  const {
    Typewriter
  } = fsdDS;
  const {
    IcSparkles,
    IcMic,
    IcSend
  } = window.FsdIcons;
  const [draft, setDraft] = React.useState("");
  const [asked, setAsked] = React.useState(null);
  const ask = q => {
    if (q.trim()) {
      setAsked(q.trim());
      setDraft("");
    }
  };
  const reply = "Is mahine aapne ₹7,830 kharch kiye — pichhle mahine se 12% kam. Diwali goal ke liye roz ₹40 alag rakhiye. Shabash!";
  return /*#__PURE__*/React.createElement("section", {
    id: "sathi-ai",
    className: "dash-panel ds-c12",
    style: {
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      minWidth: "230px"
    }
  }, /*#__PURE__*/React.createElement(FsdIconWell, {
    icon: IcSparkles,
    tone: "blue",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dash-h"
  }, "Ask Sathi"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-devanagari)"
    }
  }, "\u0905\u092A\u0928\u0940 \u092D\u093E\u0937\u093E \u092E\u0947\u0902 \u092A\u0942\u091B\u093F\u090F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      flex: 1
    }
  }, ["Is mahine kitna bacha?", "Diwali goal kab poora hoga?", "Loan EMI kitni hogi?"].map(q => /*#__PURE__*/React.createElement("button", {
    key: q,
    className: "dash-chip",
    onClick: () => ask(q)
  }, q))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      ask(draft);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flex: "1 1 360px",
      maxWidth: "480px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid var(--border-soft)",
      borderRadius: "14px",
      padding: "10px 8px 10px 16px",
      boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    placeholder: "Sathi se kuchh bhi poochhiye\u2026",
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "var(--text-primary)",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-body)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Ask by voice",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      display: "flex",
      padding: "4px"
    }
  }, /*#__PURE__*/React.createElement(IcMic, {
    size: 16
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Send",
    style: {
      width: "40px",
      height: "40px",
      flexShrink: 0,
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      color: "var(--ink-950)",
      background: "var(--gradient-btn-light)",
      boxShadow: "var(--shadow-btn-light)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IcSend, {
    size: 16
  })))), asked && /*#__PURE__*/React.createElement("div", {
    className: "fs-widget",
    style: {
      padding: "14px 16px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "You asked \u2014 \u201C", asked, "\u201D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: 1.65,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement(Typewriter, {
    key: asked,
    text: reply,
    speed: 18
  }))));
}

/* ---------- Page ---------- */

function DashboardPage() {
  const {
    SilverText,
    GlassBadge
  } = fsdDS;
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    "data-screen-label": "Dashboard \u2014 post-login home",
    style: {
      position: "relative",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsd-env",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-grid",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs-grain"
  })), /*#__PURE__*/React.createElement(DashboardNav, null), /*#__PURE__*/React.createElement("main", {
    className: "dash-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-c12",
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
      padding: "12px 4px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-kicker"
  }, "Thursday \xB7 12 June"), /*#__PURE__*/React.createElement(SilverText, {
    as: "h1",
    style: {
      fontSize: "40px",
      margin: 0
    }
  }, "Namaste, Asha."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-devanagari)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      letterSpacing: "0.04em"
    }
  }, "\u0906\u092A\u0915\u093E \u092A\u0948\u0938\u093E, \u090F\u0915 \u0928\u091C\u093C\u0930 \u092E\u0947\u0902\u0964")), /*#__PURE__*/React.createElement(GlassBadge, {
    icon: "\uD83D\uDD25",
    tint: "indigo",
    title: "12-day streak",
    subtitle: "Logging every day"
  })), /*#__PURE__*/React.createElement(VoiceLogCard, null), /*#__PURE__*/React.createElement(BalancePanel, null), /*#__PURE__*/React.createElement(LedgerPanel, null), /*#__PURE__*/React.createElement(GoalsPanel, null), /*#__PURE__*/React.createElement(TrustPanel, null), /*#__PURE__*/React.createElement(AcademyPanel, null), /*#__PURE__*/React.createElement(LoansPanel, null), /*#__PURE__*/React.createElement(SathiAIPanel, null)));
}
Object.assign(window, {
  DashboardPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DashboardNav.jsx
try { (() => {
// FinSathi dashboard navigation — the uploaded navigation-menu pattern
// (dropdown triggers, grid cards with blueprint-grid hover, small items with
// slide-in arrows) re-materialized in FinSathi's night-glass language.

const fsdNavDS = window.FinSathiDesignSystem_400c38;
function FsdNavGridCard({
  icon: Icon,
  title,
  desc,
  href
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "fsd-gcard",
    href: href
  }, /*#__PURE__*/React.createElement("span", {
    className: "fsd-gcard-grid",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fsd-gcard-glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(Icon, {
    size: 20,
    style: {
      color: "var(--blue-400)"
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "6px",
      fontSize: "12px",
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, desc)));
}
function FsdNavSmallItem({
  icon: Icon,
  title,
  href
}) {
  const {
    IcArrowRight
  } = window.FsdIcons;
  return /*#__PURE__*/React.createElement("a", {
    className: "fsd-sitem",
    href: href
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 15,
    style: {
      color: "var(--text-muted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", {
    className: "fsd-arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(IcArrowRight, {
    size: 14
  })));
}
const FSD_LANGS = [{
  code: "hi",
  label: "हिंदी",
  sub: "Hindi"
}, {
  code: "en",
  label: "English",
  sub: "English"
}, {
  code: "ta",
  label: "தமிழ்",
  sub: "Tamil"
}, {
  code: "mr",
  label: "मराठी",
  sub: "Marathi"
}];
function DashboardNav() {
  const {
    IcChevronDown,
    IcGlobe,
    IcMic,
    IcReceipt,
    IcTarget,
    IcShieldCheck,
    IcBanknote,
    IcGraduationCap,
    IcSparkles,
    IcCheck
  } = window.FsdIcons;
  const [open, setOpen] = React.useState(null); // 'money' | 'grow' | null
  const [langOpen, setLangOpen] = React.useState(false);
  const [lang, setLang] = React.useState(FSD_LANGS[1]);
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const onDown = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(null);
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);
  const trigger = (id, label) => /*#__PURE__*/React.createElement("button", {
    className: "fsd-trigger",
    "data-open": open === id,
    onClick: () => setOpen(open === id ? null : id),
    onMouseEnter: () => setOpen(id),
    "aria-expanded": open === id
  }, label, " ", /*#__PURE__*/React.createElement(IcChevronDown, {
    size: 12
  }));
  return /*#__PURE__*/React.createElement("header", {
    className: "fsd-nav",
    ref: rootRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsd-nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tighter)",
      textTransform: "uppercase",
      fontSize: "18px",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, "FinSathi"), /*#__PURE__*/React.createElement("nav", {
    className: "fsd-nav-center",
    onMouseLeave: () => setOpen(null),
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("a", {
    className: "fsd-trigger",
    "data-active": "true",
    href: "dashboard.html"
  }, "Dashboard"), trigger("money", "Money"), trigger("grow", "Grow"), /*#__PURE__*/React.createElement("a", {
    className: "fsd-trigger",
    href: "#sathi-ai"
  }, "Sathi AI"), open === "money" && /*#__PURE__*/React.createElement("div", {
    className: "fsd-menu-panel",
    style: {
      width: "740px",
      display: "grid",
      gridTemplateColumns: "1fr 208px",
      gap: "14px"
    },
    onMouseEnter: () => setOpen("money")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "12px",
      paddingRight: "14px",
      borderRight: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(FsdNavGridCard, {
    icon: IcMic,
    title: "Voice Log",
    desc: "Speak to add income & expenses",
    href: "#voice-log"
  }), /*#__PURE__*/React.createElement(FsdNavGridCard, {
    icon: IcReceipt,
    title: "Transactions",
    desc: "Your color-coded ledger",
    href: "#transactions"
  }), /*#__PURE__*/React.createElement(FsdNavGridCard, {
    icon: IcTarget,
    title: "Savings Goals",
    desc: "Targets with smart nudges",
    href: "#goals"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(FsdNavSmallItem, {
    icon: IcSparkles,
    title: "Ask Sathi AI",
    href: "#sathi-ai"
  }), /*#__PURE__*/React.createElement(FsdNavSmallItem, {
    icon: IcGlobe,
    title: "Language settings",
    href: "#top"
  }))), open === "grow" && /*#__PURE__*/React.createElement("div", {
    className: "fsd-menu-panel",
    style: {
      width: "560px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "12px"
    },
    onMouseEnter: () => setOpen("grow")
  }, /*#__PURE__*/React.createElement(FsdNavGridCard, {
    icon: IcShieldCheck,
    title: "Trust Score",
    desc: "Build your credit readiness",
    href: "#trust-score"
  }), /*#__PURE__*/React.createElement(FsdNavGridCard, {
    icon: IcBanknote,
    title: "Loan Marketplace",
    desc: "Offers matched to your profile",
    href: "#loans"
  }), /*#__PURE__*/React.createElement(FsdNavGridCard, {
    icon: IcGraduationCap,
    title: "Sathi Academy",
    desc: "Short lessons, easy habits",
    href: "#academy"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fsd-trigger",
    "data-open": langOpen,
    onClick: () => {
      setLangOpen(!langOpen);
      setOpen(null);
    },
    "aria-expanded": langOpen,
    style: {
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(IcGlobe, {
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: lang.code === "en" ? "var(--font-body)" : "var(--font-devanagari)"
    }
  }, lang.label), /*#__PURE__*/React.createElement(IcChevronDown, {
    size: 12
  })), langOpen && /*#__PURE__*/React.createElement("div", {
    className: "fsd-lang-panel"
  }, FSD_LANGS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.code,
    className: "fsd-lang-item",
    "data-active": l.code === lang.code,
    onClick: () => {
      setLang(l);
      setLangOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-devanagari)",
      minWidth: "58px",
      textAlign: "left"
    }
  }, l.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, l.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      color: "var(--emerald-400)",
      opacity: l.code === lang.code ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement(IcCheck, {
    size: 13
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.05)",
      color: "var(--silver-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: "14px",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
      fontFamily: "var(--font-devanagari)",
      cursor: "pointer"
    },
    title: "Asha Patel"
  }, "\u0905"))));
}
Object.assign(window, {
  DashboardNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DashboardNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingHero.jsx
try { (() => {
// FinSathi cinematic landing hero — port of the GSAP pinned scroll scene
// from uploads/landing page.txt, rebranded with FinSathi copy and
// composing DS components from the compiled bundle.

const {
  Button,
  GlassBadge,
  SilverText
} = window.FinSathiDesignSystem_400c38;
function LandingHero() {
  const containerRef = React.useRef(null);
  const mainCardRef = React.useRef(null);
  const mockupRef = React.useRef(null);
  const requestRef = React.useRef(0);

  // Mouse: card sheen + phone tilt
  React.useEffect(() => {
    const handleMouseMove = e => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          mainCardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2
          });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Cinematic scroll timeline
  React.useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const counter = {
      v: 0
    };
    const fmt = n => "₹" + Math.round(n).toLocaleString("en-IN");
    const ctx = gsap.context(() => {
      gsap.set(".text-track", {
        autoAlpha: 0,
        y: 60,
        scale: 0.85,
        filter: "blur(20px)",
        rotationX: -20
      });
      gsap.set(".text-days", {
        autoAlpha: 1,
        clipPath: "inset(0 100% 0 0)"
      });
      gsap.set(".main-card", {
        y: window.innerHeight + 200,
        autoAlpha: 1
      });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], {
        autoAlpha: 0
      });
      gsap.set(".cta-wrapper", {
        autoAlpha: 0,
        scale: 0.8,
        filter: "blur(30px)"
      });
      const introTl = gsap.timeline({
        delay: 0.3
      });
      introTl.to(".text-track", {
        duration: 1.8,
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        rotationX: 0,
        ease: "expo.out"
      }).to(".text-days", {
        duration: 1.4,
        clipPath: "inset(0 0% 0 0)",
        ease: "power4.inOut"
      }, "-=1.0");
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });
      scrollTl.to([".hero-text-wrapper", ".bg-grid-stage"], {
        scale: 1.15,
        filter: "blur(20px)",
        opacity: 0.2,
        ease: "power2.inOut",
        duration: 2
      }, 0).to(".main-card", {
        y: 0,
        ease: "power3.inOut",
        duration: 2
      }, 0).to(".main-card", {
        width: "100%",
        height: "100%",
        borderRadius: "0px",
        ease: "power3.inOut",
        duration: 1.5
      }).fromTo(".mockup-scroll-wrapper", {
        y: 300,
        z: -500,
        rotationX: 50,
        rotationY: -30,
        autoAlpha: 0,
        scale: 0.6
      }, {
        y: 0,
        z: 0,
        rotationX: 0,
        rotationY: 0,
        autoAlpha: 1,
        scale: 1,
        ease: "expo.out",
        duration: 2.5
      }, "-=0.8").fromTo(".phone-widget", {
        y: 40,
        autoAlpha: 0,
        scale: 0.95
      }, {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        stagger: 0.15,
        ease: "back.out(1.2)",
        duration: 1.5
      }, "-=1.5").to(".progress-ring", {
        strokeDashoffset: 60,
        duration: 2,
        ease: "power3.inOut"
      }, "-=1.2").to(counter, {
        v: 12500,
        duration: 2,
        ease: "expo.out",
        onUpdate: () => {
          document.querySelectorAll(".counter-val").forEach(el => {
            el.textContent = fmt(counter.v);
          });
        }
      }, "-=2.0").fromTo(".floating-badge", {
        y: 100,
        autoAlpha: 0,
        scale: 0.7,
        rotationZ: -10
      }, {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        rotationZ: 0,
        ease: "back.out(1.5)",
        duration: 1.5,
        stagger: 0.2
      }, "-=2.0").fromTo(".card-left-text", {
        x: -50,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: "power4.out",
        duration: 1.5
      }, "-=1.5").fromTo(".card-right-text", {
        x: 50,
        autoAlpha: 0,
        scale: 0.8
      }, {
        x: 0,
        autoAlpha: 1,
        scale: 1,
        ease: "expo.out",
        duration: 1.5
      }, "<").to({}, {
        duration: 2.5
      }).set(".hero-text-wrapper", {
        autoAlpha: 0
      }).set(".cta-wrapper", {
        autoAlpha: 1
      }).to({}, {
        duration: 1.5
      }).to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
        scale: 0.9,
        y: -40,
        z: -200,
        autoAlpha: 0,
        ease: "power3.in",
        duration: 1.2,
        stagger: 0.05
      }).to(".main-card", {
        width: isMobile ? "92vw" : "85vw",
        height: isMobile ? "92vh" : "85vh",
        borderRadius: isMobile ? "32px" : "40px",
        ease: "expo.inOut",
        duration: 1.8
      }, "pullback").to(".cta-wrapper", {
        scale: 1,
        filter: "blur(0px)",
        ease: "expo.inOut",
        duration: 1.8
      }, "pullback").to(".main-card", {
        y: -window.innerHeight - 300,
        ease: "power3.in",
        duration: 1.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  const storeKicker = {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "var(--tracking-wider)",
    textTransform: "uppercase",
    marginBottom: "-2px",
    fontFamily: "var(--font-body)"
  };
  const storeName = {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "var(--tracking-tight)",
    fontFamily: "var(--font-body)"
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    "data-screen-label": "Landing \u2014 cinematic hero",
    style: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-page)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      perspective: "1500px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-grain",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs-grid bg-grid-stage",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: "24px",
      right: "28px",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "login.html"
  }, "Sign in")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: "24px",
      left: "28px",
      zIndex: 100,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tighter)",
      textTransform: "uppercase",
      fontSize: "18px",
      color: "var(--text-primary)"
    }
  }, "FinSathi"), /*#__PURE__*/React.createElement("div", {
    className: "hero-text-wrapper",
    style: {
      position: "absolute",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "100vw",
      padding: "0 16px",
      boxSizing: "border-box",
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-track fs-text-matte",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-hero)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tight)",
      lineHeight: 1.05,
      margin: "0 0 8px",
      visibility: "hidden"
    }
  }, "Your money,"), /*#__PURE__*/React.createElement(SilverText, {
    as: "h1",
    className: "text-days",
    style: {
      fontSize: "var(--text-hero)",
      lineHeight: 1.05,
      visibility: "hidden"
    }
  }, "in your language.")), /*#__PURE__*/React.createElement("div", {
    className: "cta-wrapper",
    style: {
      position: "absolute",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "100vw",
      padding: "0 16px",
      boxSizing: "border-box",
      visibility: "hidden",
      pointerEvents: "auto",
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement(SilverText, {
    as: "h2",
    style: {
      fontSize: "var(--text-display)",
      marginBottom: "24px"
    }
  }, "Start saving today."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-lg)",
      margin: "0 0 48px",
      maxWidth: "36rem",
      fontWeight: 300,
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Join thousands of households building savings with a sathi who speaks your language."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    href: "#",
    "aria-label": "Download on the App Store"
  }, /*#__PURE__*/React.createElement(AppleLogo, null), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...storeKicker,
      color: "var(--zinc-500)",
      display: "block"
    }
  }, "Download on the"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...storeName,
      display: "block"
    }
  }, "App Store"))), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    href: "#",
    "aria-label": "Get it on Google Play"
  }, /*#__PURE__*/React.createElement(PlayLogo, null), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...storeKicker,
      color: "var(--silver-400)",
      display: "block"
    }
  }, "Get it on"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...storeName,
      display: "block"
    }
  }, "Google Play"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      perspective: "1500px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: mainCardRef,
    className: "main-card",
    style: {
      position: "relative",
      overflow: "hidden",
      pointerEvents: "auto",
      width: "85vw",
      height: "85vh",
      borderRadius: "40px",
      background: "var(--gradient-card)",
      boxShadow: "var(--shadow-card-deep)",
      border: "1px solid var(--border-hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      visibility: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      pointerEvents: "none",
      zIndex: 50,
      background: "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%)",
      mixBlendMode: "screen"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "0 48px",
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr 1fr",
      alignItems: "center",
      gap: "32px",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-left-text",
    style: {
      visibility: "hidden"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "var(--white)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h1)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tight)",
      margin: "0 0 20px"
    }
  }, "Guidance that listens."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(219,234,254,0.7)",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)",
      fontWeight: 600
    }
  }, "FinSathi"), " pairs voice-first AI with practical financial guidance \u2014 savings, credit, and government schemes explained in the language you think in.")), /*#__PURE__*/React.createElement("div", {
    className: "mockup-scroll-wrapper",
    style: {
      position: "relative",
      width: "100%",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
      visibility: "hidden",
      perspective: "1000px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PhoneMockup, {
    ref: mockupRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "floating-badge",
    style: {
      position: "absolute",
      top: "48px",
      left: "-40px",
      zIndex: 30,
      visibility: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GlassBadge, {
    icon: "\uD83C\uDF99\uFE0F",
    title: "Voice first",
    subtitle: "\u0939\u093F\u0902\u0926\u0940 \xB7 \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \xB7 \u09AC\u09BE\u0982\u09B2\u09BE + 9 more"
  })), /*#__PURE__*/React.createElement("div", {
    className: "floating-badge",
    style: {
      position: "absolute",
      bottom: "80px",
      right: "-40px",
      zIndex: 30,
      visibility: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GlassBadge, {
    icon: "\uD83E\uDD1D",
    title: "Sathi check-in",
    subtitle: "Goal shared successfully",
    tint: "indigo"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "card-right-text",
    style: {
      display: "flex",
      justifyContent: "flex-end",
      zIndex: 20,
      visibility: "hidden"
    }
  }, /*#__PURE__*/React.createElement(SilverText, {
    as: "h2",
    uppercase: true,
    style: {
      fontSize: "96px",
      lineHeight: 1
    }
  }, "FinSathi"))))));
}
Object.assign(window, {
  LandingHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
// Shared website-kit pieces: icons + PhoneMockup.
// Composes DS components from the compiled bundle.

const DS = window.FinSathiDesignSystem_400c38;
const MicIcon = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 10v2a7 7 0 0 1-14 0v-2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22"
}));
const CheckIcon = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const AppleLogo = ({
  size = 30
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  fill: "currentColor",
  viewBox: "0 0 384 512",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
}));
const PlayLogo = ({
  size = 26
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  fill: "currentColor",
  viewBox: "0 0 512 512",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
}));

/** iPhone hardware mockup with the FinSathi in-app savings screen.
    Ring + counter are raw nodes (class hooks) so GSAP can scrub them. */
const PhoneMockup = React.forwardRef(function PhoneMockup(props, ref) {
  const {
    WidgetRow
  } = DS;
  const hwBtn = {
    position: "absolute",
    width: "3px",
    background: "linear-gradient(90deg, #404040 0%, #171717 100%)",
    boxShadow: "-2px 0 5px rgba(0,0,0,0.8), inset -1px 0 1px rgba(255,255,255,0.15), inset 1px 0 2px rgba(0,0,0,0.8)",
    borderRadius: "4px 0 0 4px"
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: "280px",
      height: "580px",
      borderRadius: "48px",
      backgroundColor: "#111",
      boxShadow: "inset 0 0 0 2px #52525B, inset 0 0 0 7px #000, 0 40px 80px -15px rgba(0,0,0,0.9), 0 15px 25px -5px rgba(0,0,0,0.7)",
      transformStyle: "preserve-3d",
      willChange: "transform",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      ...hwBtn,
      top: "120px",
      left: "-3px",
      height: "25px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      ...hwBtn,
      top: "160px",
      left: "-3px",
      height: "45px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      ...hwBtn,
      top: "220px",
      left: "-3px",
      height: "45px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      ...hwBtn,
      top: "170px",
      right: "-3px",
      left: "auto",
      height: "70px",
      borderRadius: "0 4px 4px 0",
      transform: "scaleX(-1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "7px",
      background: "var(--bg-screen)",
      borderRadius: "40px",
      overflow: "hidden",
      boxShadow: "inset 0 0 15px rgba(0,0,0,1)",
      color: "#fff",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 40,
      pointerEvents: "none",
      background: "linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "5px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "28px",
      background: "#000",
      borderRadius: "999px",
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 12px",
      boxShadow: "inset 0 -1px 2px rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-live-dot",
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "#22C55E",
      boxShadow: "0 0 8px rgba(34,197,94,0.8)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      padding: "48px 20px 32px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-widget",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      color: "var(--silver-400)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      fontWeight: 700,
      marginBottom: "4px",
      fontFamily: "var(--font-body)"
    }
  }, "Today"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "20px",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tight)",
      fontFamily: "var(--font-display)",
      textShadow: "0 2px 4px rgba(0,0,0,0.5)"
    }
  }, "Savings")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.05)",
      color: "var(--silver-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: "13px",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
      fontFamily: "var(--font-body)"
    }
  }, "\u0905")), /*#__PURE__*/React.createElement("div", {
    className: "phone-widget",
    style: {
      position: "relative",
      width: "176px",
      height: "176px",
      margin: "0 auto 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.8))"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "88",
    cy: "88",
    r: "64",
    fill: "none",
    stroke: "rgba(255,255,255,0.03)",
    strokeWidth: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "progress-ring",
    cx: "88",
    cy: "88",
    r: "64",
    fill: "none",
    stroke: "var(--blue-500)",
    strokeWidth: "12"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "counter-val",
    style: {
      fontSize: "30px",
      fontWeight: 700,
      letterSpacing: "var(--tracking-tighter)",
      fontFamily: "var(--font-display)"
    }
  }, "\u20B90"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "8px",
      color: "var(--text-secondary)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      fontWeight: 700,
      marginTop: "2px",
      fontFamily: "var(--font-body)"
    }
  }, "Saved this year"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-widget"
  }, /*#__PURE__*/React.createElement(WidgetRow, {
    icon: /*#__PURE__*/React.createElement(MicIcon, null),
    title: "Voice note saved",
    subtitle: "Budget for Diwali",
    trailing: "\u20B93,000"
  })), /*#__PURE__*/React.createElement("div", {
    className: "phone-widget"
  }, /*#__PURE__*/React.createElement(WidgetRow, {
    icon: /*#__PURE__*/React.createElement(CheckIcon, null),
    tint: "emerald",
    title: "Goal reached",
    subtitle: "Emergency fund",
    trailing: "\u20B95,000"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "120px",
      height: "4px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "999px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.5)"
    }
  }))));
});
Object.assign(window, {
  MicIcon,
  CheckIcon,
  AppleLogo,
  PlayLogo,
  PhoneMockup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/dashIcons.jsx
try { (() => {
// FinSathi dashboard icon set — inline Lucide (24px grid, stroke 2, currentColor).
// Shared by DashboardNav.jsx and Dashboard.jsx via window.FsdIcons.

const fsdMakeIcon = (children, displayName) => {
  const Icon = ({
    size = 16,
    style
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, children);
  Icon.displayName = displayName;
  return Icon;
};
const IcMic = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 10v2a7 7 0 0 1-14 0v-2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22"
})), "IcMic");
const IcCheck = fsdMakeIcon(/*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}), "IcCheck");
const IcChevronDown = fsdMakeIcon(/*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}), "IcChevronDown");
const IcArrowRight = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
})), "IcArrowRight");
const IcArrowUpRight = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M7 7h10v10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7"
})), "IcArrowUpRight");
const IcArrowDownLeft = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M17 7 7 17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 17H7V7"
})), "IcArrowDownLeft");
const IcGlobe = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12h20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
})), "IcGlobe");
const IcTarget = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
})), "IcTarget");
const IcShieldCheck = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 12 2 2 4-4"
})), "IcShieldCheck");
const IcBookOpen = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
})), "IcBookOpen");
const IcBanknote = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 12h.01M18 12h.01"
})), "IcBanknote");
const IcReceipt = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 8H8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 12H8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 16H8"
})), "IcReceipt");
const IcSparkles = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 3v4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 5h-4"
})), "IcSparkles");
const IcSend = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "m22 2-7 20-4-9-9-4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 2 11 13"
})), "IcSend");
const IcGraduationCap = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 10v6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
})), "IcGraduationCap");
const IcTrendingUp = fsdMakeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 7 13.5 15.5 8.5 10.5 2 17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 7h6v6"
})), "IcTrendingUp");
window.FsdIcons = {
  IcMic,
  IcCheck,
  IcChevronDown,
  IcArrowRight,
  IcArrowUpRight,
  IcArrowDownLeft,
  IcGlobe,
  IcTarget,
  IcShieldCheck,
  IcBookOpen,
  IcBanknote,
  IcReceipt,
  IcSparkles,
  IcSend,
  IcGraduationCap,
  IcTrendingUp
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/dashIcons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrutalButton = __ds_scope.BrutalButton;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DeepCard = __ds_scope.DeepCard;

__ds_ns.GlassBadge = __ds_scope.GlassBadge;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.WidgetRow = __ds_scope.WidgetRow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.PasswordInput = __ds_scope.PasswordInput;

__ds_ns.SilverText = __ds_scope.SilverText;

__ds_ns.SpecialText = __ds_scope.SpecialText;

__ds_ns.Typewriter = __ds_scope.Typewriter;

})();
