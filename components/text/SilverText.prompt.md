Silver matte gradient display text — the hero-line and wordmark material. Only on dark surfaces.

```jsx
const { SilverText } = window.FinSathiDesignSystem_400c38;

<SilverText as="h1" style={{ fontSize: 96 }}>not just the days.</SilverText>
<SilverText as="h2" uppercase style={{ fontSize: 128 }}>FinSathi</SilverText>
```

- Renders in `--font-display` bold, tracking −0.04em; `uppercase` gives the black-caps wordmark.
- Use for the punchline line of a two-line tagline (line 1 stays solid white via `.fs-text-matte`).
