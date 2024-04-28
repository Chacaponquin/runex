import clsx from "clsx";

interface Props {
  text: string;
  first: boolean;
}

export default function Th({ text, first }: Props) {
  const CLASS = clsx(
    "font-normal",
    "font-fontMedium",
    "py-3",
    "uppercase",
    "text-sm",
    "text-gray-500",
    "border-b-[2px] border-gray-100",
    {
      "text-left": first,
      "text-center": !first,
    },
    { "px-4": !first }
  );

  return <th className={CLASS}>{text}</th>;
}
