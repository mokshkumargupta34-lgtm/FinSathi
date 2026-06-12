// FinSathi cinematic landing hero — port of the GSAP pinned scroll scene
// from uploads/landing page.txt, rebranded with FinSathi copy and
// composing DS components from the compiled bundle.

const { Button, GlassBadge, SilverText } = window.FinSathiDesignSystem_400c38;

function LandingHero() {
  const containerRef = React.useRef(null);
  const mainCardRef = React.useRef(null);
  const mockupRef = React.useRef(null);
  const requestRef = React.useRef(0);

  // Mouse: card sheen + phone tilt
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          mainCardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, { rotationY: xVal * 12, rotationX: -yVal * 12, ease: "power3.out", duration: 1.2 });
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
    const counter = { v: 0 };
    const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-stage"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(counter, {
          v: 12500, duration: 2, ease: "expo.out",
          onUpdate: () => {
            document.querySelectorAll(".counter-val").forEach((el) => { el.textContent = fmt(counter.v); });
          },
        }, "-=2.0")
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        .to(".main-card", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut",
          duration: 1.8,
        }, "pullback")
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const storeKicker = { fontSize: "10px", fontWeight: 700, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", marginBottom: "-2px", fontFamily: "var(--font-body)" };
  const storeName = { fontSize: "20px", fontWeight: 700, lineHeight: 1, letterSpacing: "var(--tracking-tight)", fontFamily: "var(--font-body)" };

  return (
    <div
      ref={containerRef}
      data-screen-label="Landing — cinematic hero"
      style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-page)", color: "var(--text-primary)", fontFamily: "var(--font-body)", perspective: "1500px" }}
    >
      <div className="fs-grain" aria-hidden="true"></div>
      <div className="fs-grid bg-grid-stage" aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.5 }}></div>

      {/* Top-right nav to auth */}
      <div style={{ position: "fixed", top: "24px", right: "28px", zIndex: 100, display: "flex", alignItems: "center", gap: "16px" }}>
        <Button variant="ghost" size="sm" href="login.html">Sign in</Button>
      </div>
      <div style={{ position: "fixed", top: "24px", left: "28px", zIndex: 100, fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "var(--tracking-tighter)", textTransform: "uppercase", fontSize: "18px", color: "var(--text-primary)" }}>
        FinSathi
      </div>

      {/* Hero taglines */}
      <div className="hero-text-wrapper" style={{ position: "absolute", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100vw", padding: "0 16px", boxSizing: "border-box", willChange: "transform" }}>
        <h1 className="text-track fs-text-matte" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-hero)", fontWeight: 700, letterSpacing: "var(--tracking-tight)", lineHeight: 1.05, margin: "0 0 8px", visibility: "hidden" }}>
          Your money,
        </h1>
        <SilverText as="h1" className="text-days" style={{ fontSize: "var(--text-hero)", lineHeight: 1.05, visibility: "hidden" }}>
          in your language.
        </SilverText>
      </div>

      {/* CTA phase */}
      <div className="cta-wrapper" style={{ position: "absolute", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100vw", padding: "0 16px", boxSizing: "border-box", visibility: "hidden", pointerEvents: "auto", willChange: "transform" }}>
        <SilverText as="h2" style={{ fontSize: "var(--text-display)", marginBottom: "24px" }}>Start saving today.</SilverText>
        <p style={{ color: "var(--text-muted)", fontSize: "var(--text-lg)", margin: "0 0 48px", maxWidth: "36rem", fontWeight: 300, lineHeight: "var(--leading-relaxed)" }}>
          Join thousands of households building savings with a sathi who speaks your language.
        </p>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="light" size="lg" href="#" aria-label="Download on the App Store">
            <AppleLogo />
            <span style={{ textAlign: "left", display: "block" }}>
              <span style={{ ...storeKicker, color: "var(--zinc-500)", display: "block" }}>Download on the</span>
              <span style={{ ...storeName, display: "block" }}>App Store</span>
            </span>
          </Button>
          <Button variant="dark" size="lg" href="#" aria-label="Get it on Google Play">
            <PlayLogo />
            <span style={{ textAlign: "left", display: "block" }}>
              <span style={{ ...storeKicker, color: "var(--silver-400)", display: "block" }}>Get it on</span>
              <span style={{ ...storeName, display: "block" }}>Google Play</span>
            </span>
          </Button>
        </div>
      </div>

      {/* Deep navy card stage */}
      <div style={{ position: "absolute", inset: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card"
          style={{
            position: "relative", overflow: "hidden", pointerEvents: "auto",
            width: "85vw", height: "85vh", borderRadius: "40px",
            background: "var(--gradient-card)",
            boxShadow: "var(--shadow-card-deep)",
            border: "1px solid var(--border-hairline)",
            display: "flex", alignItems: "center", justifyContent: "center",
            visibility: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", zIndex: 50, background: "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%)", mixBlendMode: "screen" }}></div>

          <div style={{ position: "relative", width: "100%", height: "100%", maxWidth: "80rem", margin: "0 auto", padding: "0 48px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", alignItems: "center", gap: "32px", zIndex: 10 }}>

            <div className="card-left-text" style={{ visibility: "hidden" }}>
              <h3 style={{ color: "var(--white)", fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 700, letterSpacing: "var(--tracking-tight)", margin: "0 0 20px" }}>
                Guidance that listens.
              </h3>
              <p style={{ color: "rgba(219,234,254,0.7)", fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", margin: 0 }}>
                <strong style={{ color: "var(--white)", fontWeight: 600 }}>FinSathi</strong> pairs voice-first AI with practical financial guidance — savings, credit, and government schemes explained in the language you think in.
              </p>
            </div>

            <div className="mockup-scroll-wrapper" style={{ position: "relative", width: "100%", height: "600px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, visibility: "hidden", perspective: "1000px" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PhoneMockup ref={mockupRef} />

                <div className="floating-badge" style={{ position: "absolute", top: "48px", left: "-40px", zIndex: 30, visibility: "hidden" }}>
                  <GlassBadge icon="🎙️" title="Voice first" subtitle="हिंदी · தமிழ் · বাংলা + 9 more" />
                </div>
                <div className="floating-badge" style={{ position: "absolute", bottom: "80px", right: "-40px", zIndex: 30, visibility: "hidden" }}>
                  <GlassBadge icon="🤝" title="Sathi check-in" subtitle="Goal shared successfully" tint="indigo" />
                </div>
              </div>
            </div>

            <div className="card-right-text" style={{ display: "flex", justifyContent: "flex-end", zIndex: 20, visibility: "hidden" }}>
              <SilverText as="h2" uppercase style={{ fontSize: "96px", lineHeight: 1 }}>FinSathi</SilverText>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LandingHero });
