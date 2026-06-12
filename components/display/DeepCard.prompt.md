The signature FinSathi surface — deep navy gradient card (#162C6D → #0A101D) with a monumental shadow stack, hairline border, and a mouse-following sheen.

```jsx
const { DeepCard } = window.FinSathiDesignSystem_400c38;

<DeepCard style={{ padding: 48 }}>
  <h3 style={{ color: "var(--white)" }}>Financial guidance, for everyone.</h3>
</DeepCard>
```

- Use as the hero stage, feature panels, or any moment that needs physical weight.
- `sheen={false}` for small/static cards; `radius` to drop to 32px on mobile widths.
- Content inside is white/blue-muted text; never put it on a light background.
