"use client";

import { Check } from "@modules/app/modules/icon/components";
import clsx from "clsx";
import { useId } from "react";
import { Sizes } from "../../interfaces/dimension";

interface Props {
  checked: boolean;
  size: Sizes;
  onChange(v: boolean): void;
}

export default function Checkbox({ checked, onChange, size }: Props) {
  const id = useId();

  const CLASS = clsx(
    "flex items-center justify-center",
    "border-[2px]",
    "rounded",

    { "border-gray-100": !checked, "border-blue-500": checked },

    { "bg-blue-500": checked, "bg-gray-50": !checked },

    {
      "stroke-black": !checked,
      "stroke-white": checked,
    },

    {
      "min-w-[20px] min-h-[20px]": size === "sm",
      "min-w-[25px] min-h-[25px]": size === "lg",
      "min-w-[30px] min-h-[30px]": size === "xl",
    }
  );

  function handleChange() {
    onChange(!checked);
  }

  return (
    <button className={CLASS} id={id} onClick={handleChange} type="button">
      {checked && <Check size={12} />}
    </button>
  );
}
