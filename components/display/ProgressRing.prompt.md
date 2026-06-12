Hero metric ring — the in-app progress visual (savings goals, streaks). Sweeps to its value on mount.

```jsx
const { ProgressRing } = window.FinSathiDesignSystem_400c38;

<ProgressRing value={0.85} metric="₹12.5k" label="Saved this year" />
<ProgressRing value={0.6} size={120} color="var(--emerald-500)" metric="24" label="Day streak" />
```

- `value` is 0–1; ring sweeps over 2s with the brand's power ease.
- `metric` renders big in display type; `label` is the micro uppercase kicker.
- Lives inside dark screens/DeepCards; default blue, emerald for growth.
