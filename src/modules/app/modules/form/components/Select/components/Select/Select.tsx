import { ArrowDown } from "@modules/app/modules/icon/components";
import clsx from "clsx";

interface Props {
  text: string;
  onClick(): void;
  openOptions: boolean;
}

export default function Select({ text, openOptions }: Props) {
  const CLASS = clsx(
    "w-full",
    "cursor-pointer",
    "gap-5",
    "rounded",
    "whitespace-nowrap",
    "transition-all duration-300",
    "flex items-center justify-between",
    "text-black",
    "border-2 border-gray-200",
    "px-4 py-2",

    { "border-blue-500": openOptions, "hover:border-blue-500": !openOptions }
  );

  return (
    <button className={CLASS} type="button">
      <p className="pointer-events-none overflow-x-auto no-scroll">{text}</p>

      <i className="stroke-black ">
        <ArrowDown size={18} />
      </i>
    </button>
  );
}
