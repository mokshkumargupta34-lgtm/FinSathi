Dark-surface text input used across FinSathi auth and forms — hairline border, soft inset depth, brightens subtly on focus.

```jsx
const { Input } = window.FinSathiDesignSystem_400c38;

<Input label="Email" type="email" placeholder="m@example.com" />
<Input placeholder="Unlabeled field" />
```

Pass `label` for the standard Label+field stack; placeholders are lowercase examples ("m@example.com"), never instructions.
