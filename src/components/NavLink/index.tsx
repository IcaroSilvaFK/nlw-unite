import type { ReactNode, ComponentProps } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"a">;

export function NavLink(props: Props) {
  const { children, ...rest } = props;

  return (
    <a className="font-medium text-sm text-zinc-300" {...rest}>
      {children}
    </a>
  );
}
