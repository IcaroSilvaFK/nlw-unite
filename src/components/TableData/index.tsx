import type { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"td">;

export function TableData(props: Props) {
  const { children, ...rest } = props;
  return (
    <td className="py-3 px-4 text-sm text-zinc-400" {...rest}>
      {children}
    </td>
  );
}
