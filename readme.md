# FinSathi Design System

**FinSathi** is an AI-powered financial inclusion platform for underserved and vernacular-language users in India. It combines **voice-first interaction** with intelligent financial guidance to make money management accessible to everyone — your *sathi* (companion) for money.

This design system captures FinSathi's visual language: a **cinematic, night-mode world** of deep navy, silver matte typography, physical skeuomorphic materials (tactile buttons, deep cards, frosted glass), and terminal-flavored text effects — softened by warm, plain-spoken copy in English and Devanagari.

## Sources

| Source | What it provided |
|---|---|
| `uploads/landing page.txt` | Cinematic landing hero (GSAP scroll scene): deep navy card, film grain + grid environment, silver matte text, iPhone mockup, glass badges, tactile App Store / Play Store buttons |
| `uploads/login page.txt` | Auth UI (sign in / sign up split layout), Typewriter effect, shadcn-style Input/Label/Button primitives |
| `uploads/buttons.txt` | BrutalButton — neo-brutalist hard-shadow accent button |
| `uploads/text effects.txt` | SpecialText — mono scramble/decode reveal effect |
| [github.com/mokshkumargupta34-lgtm/FinSathi](https://github.com/mokshkumargupta34-lgtm/FinSathi) | **Repo was empty (no commits) at build time.** Re-check it for product code; building against the real codebase would improve fidelity. |

Readers with access should explore these sources directly to deepen designs built on this system.

## Products represented

1. **Marketing website** (`ui_kits/website/`) — the cinematic landing page + auth (sign in / sign up).
2. **Mobile app (glimpse)** — the in-phone "Journey/Savings" screen that appears inside the landing hero's iPhone mockup (progress ring, widget rows). No standalone app codebase was provided; the kit reproduces only what the hero reveals.

---

## CONTENT FUNDAMENTALS

- **Voice:** Direct, warm, second-person. "Track the journey, not just the days." → FinSathi equivalent: "Your money, in your language." The product speaks *to* you ("Start your journey", "Join thousands of others") and refers to itself by brand name in bold inline mentions.
- **Taglines:** Two-line poetic contrasts. Line 1 sets up ("Track the journey,"), line 2 lands the twist in heavier silver type ("not just the days."). Sentence case, ends with a period.
- **Headings:** Short declaratives with a period: "Accountability, redefined." "Start your recovery." Often a comma-flip structure: "*X*, redefined."
- **Body copy:** One or two sentences, plain words, benefit-led. Light weight, relaxed leading.
- **Microcopy / kickers:** ALL-CAPS micro labels with wide tracking: "TODAY", "DOWNLOAD ON THE", "GET IT ON". Status confirmations are calm and past-tense: "Shared successfully", "Milestone unlocked".
- **Vernacular:** FinSathi serves Hindi-first and vernacular users — pair English headlines with Devanagari subtext (e.g. "आपका पैसा, आपकी भाषा") using `--font-devanagari`. Never machine-translate carelessly; keep the same warm register.
- **Emoji:** Used **sparingly and only inside glass badges** as friendly icons (🔥 streaks, 🤝 companionship, 🎙️ voice). Never in headings or body copy.
- **Forms:** Terse, standard labels ("Email", "Password", "Full Name"); helper text balanced and quiet ("Enter your email below to sign in").
- **Numbers:** Hero metrics are big and proud (365 / ₹12,500) with a micro uppercase label beneath ("DAYS SOBER" → "SAVED THIS YEAR").

## VISUAL FOUNDATIONS

- **Color:** A night world. Page ink `#050914`; the signature **deep navy gradient card** `#162C6D → #0A101D`; electric blue `#3B82F6` as the single accent; emerald for success/growth; zinc/silver hardware neutrals. Light surfaces exist *only* as the white tactile button. No purple gradients, no rainbow.
- **Type:** Display = Space Grotesk (bold, tracking −0.04em, often UPPERCASE black caps for the wordmark). Body = IBM Plex Sans (+ Devanagari sibling). Mono = IBM Plex Mono, reserved for scramble effects and data. Hero text is rendered as **silver matte gradient** (`.fs-text-silver`) with deep drop shadows — type is treated as a physical material.
- **Backgrounds:** Flat ink, layered with two environment overlays: a **film-grain** SVG noise at 5% (mix-blend overlay) and a **blueprint grid** (60px, 5% white lines) radially masked to fade at the edges. No photography provided; imagery slots are dark UI mockups.
- **Materials & shadows:** Skeuomorphism is the brand's core motif. Every surface has a stacked shadow recipe (see `tokens/spacing.css`): deep cards (`--shadow-card-deep`), tactile buttons with inset top highlight + bottom inset shade, inset widget rows, frosted glass badges (24px blur + 1px white ring). A mouse-following **sheen** (radial white at 6%, screen blend) lights the deep card.
- **Borders:** Hairlines only — `rgba(255,255,255,0.04)` on cards, `0.10` on glass. The exception: **BrutalButton** uses a 2px solid border + hard 4px offset shadow, square corners — an intentional brutalist counterpoint for high-emphasis moments.
- **Radii:** Inputs 10px → widgets/badges 16px → CTA buttons 20px → deep cards 32–40px. Brutal button: 0.
- **Motion:** Cinematic and physical. Entrances: blur(20px)→0 + rise + scale, `expo.out`, ~1.4–1.8s. Scroll scenes are pinned and scrubbed (GSAP ScrollTrigger). Counters count up; progress rings sweep; text reveals via clip-path wipes, typewriter, or mono scramble. Easing tokens: `--ease-tactile` (0.25,1,0.5,1) for presses, `--ease-expo` for reveals.
- **Hover:** Buttons **lift** −3px with grown shadow (never color-only). Links underline. Icons scale 1.05.
- **Press:** Buttons **sink** +1px with inset shadow and slightly darker gradient; brutal button translates into its shadow (4px,4px → shadow-none).
- **Transparency & blur:** Frosted glass (24px backdrop blur) is reserved for floating badges/overlays sitting above the phone mockup; widget rows use near-transparent white gradients instead of blur.
- **Layout:** Full-viewport pinned scenes; content max-width 80rem (7xl); generous vertical rhythm; the deep card is the stage — content lives inside it on a 3-column grid (text / phone / wordmark).
- **Cards:** Deep navy gradient, 1px hairline, monumental shadow stack, 40px radius, optional sheen. Inside dark screens: inset widget rows at 16px radius.

## ICONOGRAPHY

- **Icon system: [Lucide](https://lucide.dev)** (the source components import `lucide-react` — Eye/EyeOff etc.). Load from CDN in prototypes: `https://unpkg.com/lucide@latest` or use inline 24×24, `stroke-width: 2`, `stroke: currentColor`, no fill. This matches the hero's inline stroked check/checkmark icons.
- **Brand/store logos:** Authentic Apple App Store & Google Play solid glyphs are embedded inline in `ui_kits/website/` (filled, `currentColor`).
- **Emoji as icons:** Yes — but only inside glass badge chips (🔥 🤝 🎙️), sized ~20px, on a tinted circular well with `--border-accent`.
- **No icon font.** No PNG icons. No custom SVG illustration set was provided — **do not hand-draw illustrations**; use UI mockups (phone frames, widgets) as the imagery.
- **Logo:** No logo file exists in the sources. The brand mark is the **wordmark**: "FINSATHI" in Space Grotesk 700, uppercase, tracking −0.04em, silver matte gradient. See `assets/wordmark.html` card. *(Ask the user for a real logo file.)*

## FONT SUBSTITUTION FLAG

No font binaries were provided. Substitutes from Google Fonts (loaded via `tokens/fonts.css`):
- Display → **Space Grotesk** · Body → **IBM Plex Sans** (+ **IBM Plex Sans Devanagari**) · Mono → **IBM Plex Mono**

If FinSathi has licensed fonts, supply the files and we'll swap in real `@font-face` rules.

---

## Index

| Path | Contents |
|---|---|
| `styles.css` | Global entry — imports every token file below |
| `tokens/colors.css` | Base palette + semantic aliases |
| `tokens/typography.css` | Font stacks, scale, weights, tracking |
| `tokens/spacing.css` | Spacing, radii, all skeuomorphic shadow stacks |
| `tokens/effects.css` | Easing tokens + utility classes (`.fs-grain`, `.fs-grid`, `.fs-text-silver`, `.fs-glass`, `.fs-card-deep`, `.fs-widget`) |
| `tokens/fonts.css` | Google Fonts imports (substitutes — see flag above) |
| `components/core/` | `Button` (tactile light/dark), `BrutalButton` |
| `components/forms/` | `Input`, `PasswordInput`, `Label` |
| `components/text/` | `SpecialText` (scramble), `Typewriter`, `SilverText` |
| `components/display/` | `GlassBadge`, `DeepCard`, `WidgetRow`, `ProgressRing` |
| `ui_kits/website/` | Landing page + auth — interactive recreation (`index.html`) |
| `guidelines/` | Foundation specimen cards (Design System tab) |
| `assets/` | Wordmark card |
| `SKILL.md` | Agent-skill entry point |
