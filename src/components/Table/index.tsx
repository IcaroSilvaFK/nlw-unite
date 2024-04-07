import { ComponentProps } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {} & ComponentProps<"table">;

export function Table(props: Props) {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props} />
    </div>
  );
}
