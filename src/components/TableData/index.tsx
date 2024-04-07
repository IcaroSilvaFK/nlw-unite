import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
} & ComponentProps<"td">;

export function TableData(props: Props) {
  const { children, className, ...rest } = props;
  return (
    <td
      className={twMerge("py-3 px-4 text-sm text-zinc-400", className)}
      {...rest}
    >
      {children}
    </td>
  );
}
