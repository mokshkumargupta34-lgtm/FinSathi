Tactile, physical CTA button (the App Store / Play Store buttons from the landing hero) — use for all primary and secondary actions on FinSathi's dark surfaces.

```jsx
const { Button } = window.FinSathiDesignSystem_400c38;

<Button variant="light" size="lg">Get FinSathi</Button>
<Button variant="dark" size="lg">Watch demo</Button>
<Button variant="ghost">Sign in</Button>
<Button variant="link">Learn more</Button>
```

- `variant`: `light` (white, primary on dark), `dark` (zinc, secondary), `ghost` (hairline outline), `link` (underline on hover).
- `size`: `sm` / `md` / `lg`. Pass `href` to render an anchor.
- Hover lifts −3px with a grown shadow stack; press sinks +1px with inset shadow. Never restyle with flat colors — the gradient + shadow stack IS the brand.
