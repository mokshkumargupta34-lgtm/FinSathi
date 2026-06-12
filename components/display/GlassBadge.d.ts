import * as React from "react";

/** Frosted glass floating badge with tinted icon well. */
export interface GlassBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Emoji or small icon node for the circular well. */
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  /** Icon well tint. @default "blue" */
  tint?: "blue" | "indigo" | "emerald";
}

export declare function GlassBadge(props: GlassBadgeProps): JSX.Element;
