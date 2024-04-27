"use client";

import { IconProps } from "@modules/app/modules/icon/interfaces";

interface Props {
  handleClick(): void;
  icon: React.FC<IconProps>;
}

export default function Button({ handleClick, icon }: Props) {
  return (
    <button
      className="hover:stroke-blue-500 transition-all duration-200"
      onClick={handleClick}
    >
      {icon({ size: 22 })}
    </button>
  );
}
