"use client";

import { IconProps } from "@modules/app/modules/icon/interfaces";

interface Props {
  handleClick(): void;
  children?: React.ReactNode;
  icon: React.FC<IconProps>;
}

export default function Button({ children, handleClick, icon }: Props) {
  return (
    <div className="relative flex flex-col">
      <button
        className="hover:stroke-blue-500 transition-all duration-200"
        onClick={handleClick}
      >
        {icon({ size: 22 })}
      </button>

      {children}
    </div>
  );
}