import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";
import React from "react";

interface Props {
  disabled: boolean;
  icon: React.FC<IconProps>;
  handleClick(): void;
}

export default function Button({ disabled, icon, handleClick }: Props) {
  const CLASS = clsx(
    "flex items-center justify-center",
    "shadow-md",
    "rounded-full",
    "p-3",
    { "bg-gray-100 fill-black": disabled, "bg-blue-500 fill-white": !disabled }
  );

  return (
    <button className={CLASS} disabled={disabled} onClick={handleClick}>
      {icon({ size: 22 })}
    </button>
  );
}
