import type { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"th">;

export function TableHead(props: Props) {
  const { children, ...rest } = props;

  return (
    <th className="py-3 px-4 text-sm font-semibold text-left" {...rest}>
      {children}
    </th>
  );
}
