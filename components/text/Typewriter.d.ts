import * as React from "react";

/** Typewriter effect with blinking cursor. Pass an array + loop to cycle phrases. */
export interface TypewriterProps {
  text: string | string[];
  /** Ms per typed character. @default 100 */
  speed?: number;
  /** @default "|" */
  cursor?: string;
  /** Cycle through array entries. @default false */
  loop?: boolean;
  /** Ms per deleted character. @default 50 */
  deleteSpeed?: number;
  /** Ms pause before deleting. @default 1500 */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export declare function Typewriter(props: TypewriterProps): JSX.Element;
