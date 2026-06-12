// FinSathi auth — sign in / sign up split screen, ported from
// uploads/login page.txt and rebranded. Right panel: deep navy stage with
// wordmark + typewriter quote (no brand imagery was provided).

const { Button, Input, PasswordInput, Typewriter, SilverText } = window.FinSathiDesignSystem_400c38;

const GoogleG = () => (
  <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
    <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
  </svg>
);

const VALID_EMAIL = "moksh@finsathi.com";
const VALID_PASSWORD = "FinSathi@2026";

function SignInForm() {
  const [error, setError] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      window.location.href = "dashboard.html";
    } else {
      setError("Invalid email or password.");
    }
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="on" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 700, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>Sign in to your account</h1>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)", textWrap: "balance" }}>Enter your email below to sign in</p>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <Input label="Email" name="email" type="email" placeholder="m@example.com" required autoComplete="email" />
        <PasswordInput name="password" required autoComplete="current-password" placeholder="Password" />
        {error && <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "#f87171", textAlign: "center" }}>{error}</p>}
        <Button variant="light" style={{ marginTop: "8px" }} type="submit">Sign In</Button>
      </div>
    </form>
  );
}

function SignUpForm() {
  return (
    <form onSubmit={(e) => { e.preventDefault(); window.location.href = "dashboard.html"; }} autoComplete="on" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 700, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>Create an account</h1>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)", textWrap: "balance" }}>Enter your details below to sign up</p>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <Input label="Full Name" name="name" type="text" placeholder="Asha Patel" required autoComplete="name" />
        <Input label="Email" name="email" type="email" placeholder="m@example.com" required autoComplete="email" />
        <PasswordInput name="password" required autoComplete="new-password" placeholder="Password" />
        <Button variant="light" style={{ marginTop: "8px" }} type="submit">Sign Up</Button>
      </div>
    </form>
  );
}

function AuthPage() {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const quote = isSignIn
    ? "Namaste! Welcome back — your journey continues."
    : "A new chapter awaits. Apna sathi banaiye.";

  return (
    <div data-screen-label="Auth — sign in / sign up" style={{ width: "100%", minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--bg-page)", fontFamily: "var(--font-body)" }}>
      {/* Form column */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px", position: "relative" }}>
        <a href="index.html" style={{ position: "absolute", top: "24px", left: "28px", fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "var(--tracking-tighter)", textTransform: "uppercase", fontSize: "18px", color: "var(--text-primary)", textDecoration: "none" }}>FinSathi</a>
        <div style={{ width: "350px", display: "grid", gap: "12px" }}>
          {isSignIn ? <SignInForm /> : <SignUpForm />}
          <div style={{ textAlign: "center", fontSize: "var(--text-sm)", color: "var(--text-muted)", display: "flex", justifyContent: "center", alignItems: "center", gap: "4px" }}>
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <Button variant="link" size="sm" onClick={() => setIsSignIn((p) => !p)}>{isSignIn ? "Sign up" : "Sign in"}</Button>
          </div>
          <div style={{ position: "relative", textAlign: "center", fontSize: "var(--text-sm)", margin: "4px 0" }}>
            <span style={{ position: "absolute", inset: "50% 0 auto 0", borderTop: "1px solid var(--border-soft)" }} aria-hidden="true"></span>
            <span style={{ position: "relative", zIndex: 1, background: "var(--bg-page)", padding: "0 8px", color: "var(--text-muted)" }}>Or continue with</span>
          </div>
          <Button variant="ghost" type="button"><GoogleG /> Continue with Google</Button>
        </div>
      </div>

      {/* Brand stage column */}
      <div style={{ position: "relative", overflow: "hidden", background: "var(--gradient-card)", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div className="fs-grid" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.6 }}></div>
        <div className="fs-grain" aria-hidden="true"></div>
        <SilverText as="div" uppercase style={{ fontSize: "clamp(40px, 9vw, 72px)", lineHeight: 1, maxWidth: "100%" }}>FinSathi</SilverText>
        <div style={{ fontFamily: "var(--font-devanagari)", color: "var(--text-secondary)", fontSize: "var(--text-body)", marginTop: "10px", letterSpacing: "0.06em" }}>आपका पैसा, आपकी भाषा</div>

        <div style={{ position: "absolute", inset: "auto 0 0 0", height: "100px", background: "linear-gradient(to top, var(--bg-page), transparent)" }} aria-hidden="true"></div>
        <blockquote style={{ position: "absolute", bottom: "24px", left: 0, right: 0, zIndex: 10, margin: 0, textAlign: "center", color: "var(--text-primary)" }}>
          <p style={{ margin: "0 0 8px", fontSize: "var(--text-lg)", fontWeight: 500 }}>
            “<Typewriter key={quote} text={quote} speed={55} />”
          </p>
          <cite style={{ display: "block", fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--text-muted)", fontStyle: "normal" }}>— FinSathi</cite>
        </blockquote>
      </div>
    </div>
  );
}

Object.assign(window, { AuthPage });
