Inset widget row — list items inside dark app screens (transactions, goals, reminders) with a tinted icon well.

```jsx
const { WidgetRow } = window.FinSathiDesignSystem_400c38;

<WidgetRow
  icon={<CheckIcon />}
  tint="emerald"
  title="Goal reached"
  subtitle="Emergency fund"
  trailing="₹5,000"
/>
```

- `tint`: `blue` (default) or `emerald` for success/growth rows.
- `trailing` renders right-aligned in mono — ideal for ₹ amounts.
- Stack with 12px gaps inside a phone screen or DeepCard.
