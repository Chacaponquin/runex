import clsx from "clsx";
import { TableElement } from "../../../../interfaces";

interface Props {
  children: TableElement;
  isFirst: boolean;
  isLast: boolean;
}

export default function Td({ children, isFirst, isLast }: Props) {
  const CLASS = clsx("py-2.5", { "pl-4": isFirst }, { "pr-3": !isLast });

  return <td className={CLASS}>{children}</td>;
}
