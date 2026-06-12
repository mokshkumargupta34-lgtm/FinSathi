import * as React from "react";

/** Silver matte gradient display text (white → zinc) with deep drop shadows. */
export interface SilverTextProps extends React.HTMLAttributes<HTMLElement> {
  /** Element tag to render. @default "span" */
  as?: string;
  /** Physical drop shadows under the glyphs. @default true */
  shadow?: boolean;
  /** Black-caps wordmark treatment. @default false */
  uppercase?: boolean;
  children?: React.ReactNode;
}

export declare function SilverText(props: SilverTextProps): JSX.Element;
