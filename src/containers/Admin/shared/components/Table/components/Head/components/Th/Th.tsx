import clsx from "clsx";

interface Props {
  text: string;
  isFirst: boolean;
}

export default function Th({ text, isFirst }: Props) {
  const CLASS = clsx(
    "text-sm",
    "text-gray-700",
    "font-normal",
    "text-left",
    "py-3",
    "font-fontMedium",
    "rounded",
    "uppercase",
    { "pl-4": isFirst }
  );

  return <th className={CLASS}>{text}</th>;
}
