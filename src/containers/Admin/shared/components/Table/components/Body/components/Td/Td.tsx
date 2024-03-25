import clsx from "clsx";
import { TableElement } from "../../../../interfaces";

interface Props {
  children: TableElement;
  isFirst: boolean;
}

export default function Td({ children, isFirst }: Props) {
  return <td className={clsx("py-2.5", { "pl-4": isFirst })}>{children}</td>;
}
