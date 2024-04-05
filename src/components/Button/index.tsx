import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
  const { children, ...rest } = props;

  return (
    <button
      className="bg-white/10 border border-white/10 rounded-md p-1.5"
      {...rest}
    >
      {children}
    </button>
  );
}
