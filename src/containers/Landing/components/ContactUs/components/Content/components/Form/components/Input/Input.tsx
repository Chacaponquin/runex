"use client";

import clsx from "clsx";
import React, { useId, useState } from "react";

interface Props {
  placeholder: string;
  value: string;
  name: string;
  handleChange(value: string): void;
  type: "text" | "email";
}

export default function Input({
  placeholder,
  value,
  name,
  handleChange,
  type,
}: Props) {
  const id = useId();

  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  const CLASS = clsx(
    "flex items-center",
    "gap-x-5",
    "px-5",
    "outline outline-[2px]",
    "stroke-gray-500",
    "rounded",
    "transition-all duration-200",

    { "outline-blue-500 shadow-input": focus, "outline-gray-200": !focus }
  );

  return (
    <div className={CLASS}>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className="outline-none py-2 w-full"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
