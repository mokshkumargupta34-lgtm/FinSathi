import React from "react";

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
export function SpecialText({
  children,
  speed = 20,
  delay = 0,
  className = "",
  inView = false,
  once = true,
  style,
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
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setTimeout(() => setStarted(true), Math.max(0, delay * 1000));
          if (once) obs.disconnect();
        }
      },
      { rootMargin: "-100px" }
    );
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
        if (step >= maxSteps) { phase = 2; step = 0; }
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

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        display: "inline-flex",
        fontFamily: "var(--font-mono)",
        fontWeight: "var(--weight-medium)",
        whiteSpace: "pre",
        ...style,
      }}
    >
      {display}
    </span>
  );
}
