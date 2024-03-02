import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";
import React from "react";

interface Props {
  icon: React.FC<IconProps>;
  name: string;
  handleClick(): void;
  selected: boolean;
}

export default function Card({ handleClick, icon, name, selected }: Props) {
  const CLASS = clsx(
    "flex justify-center items-center",
    "w-full",
    "border-2",
    "rounded-lg",
    "py-4 px-3",
    "gap-x-4",
    "cursor-pointer",

    { "stroke-black": !selected, "stroke-blue-500": selected },

    { "border-gray-200": !selected, "border-blue-500": selected },

    { "bg-blue-500/10": selected }
  );

  return (
    <article className={CLASS} onClick={handleClick}>
      <i>{icon({ size: 30 })}</i>
      <h2 className="text-base">{name}</h2>
    </article>
  );
}
