# FinSathi website UI kit

Interactive recreation of the FinSathi marketing site, built from `uploads/landing page.txt` (cinematic GSAP scroll hero) and `uploads/login page.txt` (auth split layout), rebranded with FinSathi copy.

- `index.html` — landing page. Pinned scroll scene: hero taglines → deep navy card rises and expands full-bleed → iPhone mockup reveals with savings ring + widget rows + glass badges → CTA pullback with App Store / Play Store tactile buttons. "Sign in" (top right) links to the auth page.
- `login.html` — sign in / sign up split screen with typewriter quote panel.
- `components.jsx` — PhoneMockup (bezel, dynamic island, in-app savings screen) + shared icons.
- `LandingHero.jsx` — the scroll scene (GSAP + ScrollTrigger from CDN).
- `AuthPage.jsx` — auth forms composing DS `Input`, `PasswordInput`, `Button`, `Typewriter`.

The in-phone app screen is the only glimpse of the FinSathi mobile app provided by the sources; no standalone app kit was invented.
