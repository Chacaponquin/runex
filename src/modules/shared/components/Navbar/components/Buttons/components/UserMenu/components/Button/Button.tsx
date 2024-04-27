import { IconProps } from "@modules/app/modules/icon/interfaces";
import React from "react";

interface Props {
  icon: React.FC<IconProps>;
  text: string;
  handleClick?: () => void;
}

export default function Button({ icon, text, handleClick }: Props) {
  return (
    <button
      className="flex gap-x-3 px-6 py-3 hover:bg-gray-50 w-full"
      onClick={handleClick}
    >
      <i className="stroke-black">{icon({ size: 22 })}</i>
      <span className="text-base">{text}</span>
    </button>
  );
}
