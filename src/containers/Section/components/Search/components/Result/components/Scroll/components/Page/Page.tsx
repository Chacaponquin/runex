import clsx from "clsx";
import React from "react";

interface Props {
  page: number;
  selected: boolean;
  handleClick(): void;
}

export default function Page({ page, selected, handleClick }: Props) {
  const CLASS = clsx(
    "py-1 px-2",
    "border-[1px]",
    "text-base",
    "rounded-sm",

    { "text-gray-700": !selected, "text-blue-500": selected },
    { "border-gray-700": !selected, "border-blue-500": selected }
  );

  return (
    <button className={CLASS} onClick={handleClick}>
      {page}
    </button>
  );
}
