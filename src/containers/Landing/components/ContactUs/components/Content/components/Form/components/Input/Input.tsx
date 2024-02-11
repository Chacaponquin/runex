"use client";

import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";
import React, { useId, useState } from "react";

interface Props {
  placeholder: string;
  value: string;
  name: string;
  handleChange(value: string): void;
  type: "text" | "email";
  icon: React.FC<IconProps>;
}

export default function Input({
  placeholder,
  value,
  name,
  handleChange,
  type,
  icon,
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
    "rounded-sm",
    { "outline-gray-500": focus, "outline-gray-300": !focus }
  );

  return (
    <div className={CLASS}>
      {icon({ size: 22 })}

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
