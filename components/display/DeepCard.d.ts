import * as React from "react";

/** Deep navy gradient card with monumental shadow stack and mouse sheen. */
export interface DeepCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mouse-following radial sheen overlay. @default true */
  sheen?: boolean;
  /** Override border radius (default var(--radius-card), 40px). */
  radius?: string;
  children?: React.ReactNode;
}

export declare function DeepCard(props: DeepCardProps): JSX.Element;
