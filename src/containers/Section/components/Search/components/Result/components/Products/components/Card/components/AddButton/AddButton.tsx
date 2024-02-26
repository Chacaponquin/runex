import { Bag } from "@modules/app/modules/icon/components";
import clsx from "clsx";

interface Props {
  handleClick(): void;
}

export default function AddButton({ handleClick }: Props) {
  const CLASS = clsx(
    "flex items-center justify-center",
    "gap-x-3",
    "text-white",
    "px-4 py-2",
    "text-base",
    "rounded",
    "bg-blue-500",
    "stroke-white",
    "hover:opacity-70",
    "duration-300 transition-all"
  );

  return (
    <button
      className={CLASS}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <Bag size={22} />
      <p className="font-fontMedium">Añadir</p>
    </button>
  );
}
