import * as React from "react";

/**
 * Tactile skeuomorphic button. Lifts -3px on hover, sinks +1px on press.
 * "light" is the primary CTA on dark surfaces; "dark" is the secondary.
 * @startingPoint section="Components" subtitle="Tactile light/dark CTA buttons" viewport="700x300"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual material. @default "light" */
  variant?: "light" | "dark" | "ghost" | "link";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Renders an <a> instead of <button>. */
  href?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
