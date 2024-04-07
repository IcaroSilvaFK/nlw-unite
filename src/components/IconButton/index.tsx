import type { ButtonHTMLAttributes, ReactNode } from "react";
import { mergeCss } from "../../utils/mergeCss";

type Props = {
  children: ReactNode;
  transparent?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton(props: Props) {
  const { children, transparent = false, ...rest } = props;

  return (
    <button
      className={mergeCss(
        "border border-white/10 rounded-md p-1.5 disabled:cursor-not-allowed disabled:opacity-45",
        transparent ? "bg-white/10" : "bg-black/20"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
