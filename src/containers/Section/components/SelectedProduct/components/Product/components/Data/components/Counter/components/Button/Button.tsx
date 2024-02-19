import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";
import React from "react";

interface Props {
  icon: React.FC<IconProps>;
  handleClick(): void;
  disabled: boolean;
}

export default function Button({ disabled, handleClick, icon }: Props) {
  const CLASS = clsx("px-2 py-1.5", { "stroke-black": !disabled });

  return (
    <button className={CLASS} onClick={handleClick}>
      {icon({ size: 18 })}
    </button>
  );
}
