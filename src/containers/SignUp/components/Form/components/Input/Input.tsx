"use client";

import clsx from "clsx";
import { useId, useState } from "react";

interface Props {
  placeholder: string;
  type: "password" | "email" | "text";
  name: string;
  value: string;
  handleChange(value: string): void;
}

export default function Input({
  placeholder,
  type,
  name,
  handleChange,
  value,
}: Props) {
  const [focus, setFocus] = useState(false);

  const id = useId();

  const CLASS = clsx(
    "w-full",
    "flex flex-col",
    "px-6 py-2.5 esm:px-5",
    "rounded esm:rounded",
    "bg-gray-100",
    { "outline outline-blue-400": focus }
  );

  function handleFocus() {
    setFocus(true);
  }

  function handleNotFocus() {
    setFocus(false);
  }

  return (
    <div className={CLASS}>
      <label
        htmlFor={id}
        className="font-fontMedium mb-1 esm:mb-0 text-sm text-gray-600"
      >
        {placeholder}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        className="outline-none bg-transparent text-base font-fontMedium"
        onFocus={handleFocus}
        onBlur={handleNotFocus}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
