Neo-brutalist hard-shadow button — use sparingly for one loud, high-emphasis action (e.g. a hackathon CTA or playful moment); the tactile `Button` covers everything else.

```jsx
const { BrutalButton } = window.FinSathiDesignSystem_400c38;

<BrutalButton>Deploy Doom</BrutalButton>
<BrutalButton color="var(--blue-500)" textColor="#fff" shadowColor="#fff">Try voice mode</BrutalButton>
```

- Defaults: page-ink background, white text, 2px white border, 4px white hard shadow, square corners.
- `radius` accepts px if you must soften it; brand default is 0.
- Press animation translates the button into its shadow — keep `hasShadow` on.
