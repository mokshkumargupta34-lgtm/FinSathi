import * as React from "react";

/**
 * Mono scramble/decode reveal — glyphs flicker (_!X$0-+*#) then resolve
 * left-to-right into the final text.
 */
export interface SpecialTextProps {
  /** The text to decode. Plain string only. */
  children: string;
  /** Ms per tick. @default 20 */
  speed?: number;
  /** Seconds before starting. @default 0 */
  delay?: number;
  className?: string;
  /** Wait until scrolled into view. @default false */
  inView?: boolean;
  /** Only animate the first time it enters view. @default true */
  once?: boolean;
  style?: React.CSSProperties;
}

export declare function SpecialText(props: SpecialTextProps): JSX.Element;
