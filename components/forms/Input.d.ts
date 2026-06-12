import * as React from "react";

/** Dark-surface text input: 44px tall, 10px radius, hairline border. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Renders a Label above the field when set. */
  label?: string;
}

export declare function Input(props: InputProps): JSX.Element;
