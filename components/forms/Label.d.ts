import * as React from "react";

/** Form field label — 14px medium, white on dark. */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

export declare function Label(props: LabelProps): JSX.Element;
