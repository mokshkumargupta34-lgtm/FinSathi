import * as React from "react";

/**
 * Neo-brutalist button: 2px border, hard 4px offset shadow, square corners.
 * Hover shifts -2px with 6px shadow; press collapses into the shadow.
 */
export interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Background color. @default "var(--bg-page)" */
  color?: string;
  /** @default "var(--text-primary)" */
  textColor?: string;
  /** @default true */
  hasBorder?: boolean;
  borderColor?: string;
  /** @default true */
  hasShadow?: boolean;
  shadowColor?: string;
  /** Corner radius in px. @default 0 */
  radius?: number;
  children?: React.ReactNode;
}

export declare function BrutalButton(props: BrutalButtonProps): JSX.Element;
