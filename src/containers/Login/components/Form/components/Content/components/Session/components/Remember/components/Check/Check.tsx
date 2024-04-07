import { Check as IconCheck } from "@modules/app/modules/icon/components";
import clsx from "clsx";
import { useId } from "react";

interface Props {
  handleChange(): void;
  remember: boolean;
}

export default function Check({ handleChange, remember }: Props) {
  const id = useId();

  const CLASS = clsx(
    "min-w-[20px] min-h-[20px]",
    "flex items-center justify-center",
    "border-[2px]",
    "rounded",

    { "border-gray-100": !remember, "border-blue-500": remember },

    { "bg-blue-500": remember, "bg-gray-50": !remember },

    {
      "stroke-black": !remember,
      "stroke-white": remember,
    }
  );

  return (
    <button className={CLASS} id={id} onClick={handleChange} type="button">
      {remember && <IconCheck size={12} />}
    </button>
  );
}
