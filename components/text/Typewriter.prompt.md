Typewriter text with blinking cursor — used for welcoming quotes on auth screens and rotating value props.

```jsx
const { Typewriter } = window.FinSathiDesignSystem_400c38;

<Typewriter text="Welcome back! Your journey continues." speed={60} />
<Typewriter text={["Save in Hindi.", "Save in Tamil.", "Save in Bangla."]} loop />
```

Keep typed strings short and warm; on auth screens wrap in quotation marks with a `— FinSathi` cite below.
