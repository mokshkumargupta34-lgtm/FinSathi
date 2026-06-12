import * as React from "react";

/** Password field with Lucide eye/eye-off visibility toggle. */
export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** @default "Password" */
  label?: string;
}

export declare function PasswordInput(props: PasswordInputProps): JSX.Element;
