Terminal-style scramble/decode text reveal — for kickers, section labels, and data moments where FinSathi's AI "computes" an answer.

```jsx
const { SpecialText } = window.FinSathiDesignSystem_400c38;

<SpecialText style={{ fontSize: 36, color: "var(--text-primary)" }}>Make it beautiful</SpecialText>
<SpecialText inView delay={0.3} speed={30}>VOICE-FIRST BANKING</SpecialText>
```

- Always renders in `--font-mono`; pass size/color via `style` or `className`.
- `inView` starts the effect on scroll; `speed` is ms per tick (20 default, higher = slower).
- Use on short strings (≤ 30 chars); body copy should never scramble.
