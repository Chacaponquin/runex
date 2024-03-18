"use client";

import clsx from "clsx";
import { Sizes } from "../../interfaces/dimension";
import { useState } from "react";

interface Props {
  placeholder: string;
  name: string;
  value: string;
  onChange(v: string): void;
  size: Sizes;
  type: "text" | "email" | "password";
}

export default function InputText({
  name,
  onChange,
  placeholder,
  size,
  type,
  value,
}: Props) {
  const [focus, setFocus] = useState(false);

  const CLASS = clsx(
    "rounded",
    "outline outline-[2px]",
    "transition-all duration-200",
    {
      "py-1.5": size === "sm",
      "py-2": size === "lg",
    },

    {
      "px-3": size === "sm",
      "px-4": size === "lg",
      "px-5": size === "xl",
    },

    { "outline-blue-500 shadow-input": focus, "outline-gray-200": !focus },

    {
      "text-sm": size === "sm",
      "text-base": size === "lg",
      "text-lg": size === "xl",
    }
  );

  return (
    <input
      type={type}
      className={CLASS}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
}
