import * as React from "react";

/** Circular progress ring with center metric; animates its sweep on mount. */
export interface ProgressRingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill fraction 0–1. @default 0.85 */
  value?: number;
  /** Outer size in px. @default 176 */
  size?: number;
  /** @default 12 */
  strokeWidth?: number;
  /** Ring color. @default "var(--blue-500)" */
  color?: string;
  /** Big center figure, e.g. "₹12.5k" or 365. */
  metric?: React.ReactNode;
  /** Micro uppercase label under the metric. */
  label?: string;
  /** Sweep animation ms. @default 2000 */
  duration?: number;
}

export declare function ProgressRing(props: ProgressRingProps): JSX.Element;
