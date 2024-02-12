import clsx from "clsx";
import React, { useId } from "react";

interface Props {
  value: string;
  placeholder: string;
  name: string;
  handleChange(value: string): void;
}

export default function Message({
  value,
  placeholder,
  name,
  handleChange,
}: Props) {
  const id = useId();

  const CLASS = clsx(
    "h-[130px]",
    "outline outline-[2px] outline-gray-300",
    "rounded-sm",
    "px-5 py-2",
    "focus:outline-gray-500"
  );

  return (
    <textarea
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      className={CLASS}
      spellCheck={false}
      onChange={(e) => handleChange(e.target.value)}
    ></textarea>
  );
}
