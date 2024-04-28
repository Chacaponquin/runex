import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  first: boolean;
}

export default function Td({ children, first }: Props) {
  const CLASS = clsx(
    "text-center",
    "py-2.5",
    "border-b-[2px] border-gray-100",
    "text-sm",

    { "px-4": !first }
  );

  return <td className={CLASS}>{children}</td>;
}
