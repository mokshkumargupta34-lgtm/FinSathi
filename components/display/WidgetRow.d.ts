import * as React from "react";

/** Inset widget row for dark app screens — tinted icon well, title/subtitle, optional trailing value. */
export interface WidgetRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small icon node (Lucide 16px stroke) for the square well. */
  icon?: React.ReactNode;
  /** Icon well tint. @default "blue" */
  tint?: "blue" | "emerald";
  title?: string;
  subtitle?: string;
  /** Right-aligned mono value, e.g. "₹2,400". */
  trailing?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function WidgetRow(props: WidgetRowProps): JSX.Element;
