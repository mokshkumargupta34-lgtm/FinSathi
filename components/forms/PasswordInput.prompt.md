Password field with a show/hide eye toggle — the standard credential input for FinSathi auth.

```jsx
const { PasswordInput } = window.FinSathiDesignSystem_400c38;

<PasswordInput placeholder="Password" autoComplete="current-password" />
<PasswordInput label="New password" autoComplete="new-password" />
```

`label` defaults to "Password". The toggle uses Lucide `eye` / `eye-off` glyphs at 16px.
