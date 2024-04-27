"use client";

import clsx from "clsx";
import { Sizes } from "../../interfaces/dimension";
import { useState } from "react";

interface Props {
  name: string;
  value: string;
  onChange(v: string): void;
  id?: string;
  placeholder: string;
  size: Sizes;
}

export default function Textarea({
  name,
  onChange,
  value,
  id,
  placeholder,
  size,
}: Props) {
  const [focus, setFocus] = useState(false);

  const CLASS = clsx(
    "h-[130px]",
    "outline outline-[2px] outline-gray-200",
    "rounded",
    "transition-all duration-200",
    "focus:outline-blue-500 focus:shadow-input",

    {
      "text-sm": size === "sm",
      "text-base": size === "lg",
      "text-lg": size === "xl",
    },

    { "outline-blue-500 shadow-input": focus, "outline-gray-200": !focus },

    {
      "px-3": size === "sm",
      "px-4": size === "lg",
      "px-5": size === "xl",
    },

    {
      "py-1.5": size === "sm",
      "py-2": size === "lg",
    }
  );

  return (
    <textarea
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      className={CLASS}
      spellCheck={false}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    ></textarea>
  );
}
