import { Bag } from "@modules/app/modules/icon/components";
import clsx from "clsx";

interface Props {
  handleClick(): void;
}

export default function AddButton({ handleClick }: Props) {
  const CLASS = clsx(
    "flex items-center justify-center",
    "bg-blue-500",
    "px-3 py-2",
    "text-sm",
    "stroke-white",
    "text-white",
    "rounded",
    "transition-all duration-300",
    "hover:opacity-70",
    "gap-x-2.5"
  );

  return (
    <button className={CLASS} onClick={handleClick}>
      <Bag size={20} />
      <p className="font-fontMedium">Añadir</p>
    </button>
  );
}
