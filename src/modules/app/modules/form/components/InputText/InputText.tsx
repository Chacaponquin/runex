"use client";

import clsx from "clsx";
import { Sizes } from "../../interfaces/dimension";

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
  const CLASS = clsx("outline-none", {
    "px-4 py-1": size === "sm",
    "px-5 py-1.5": size === "lg",
  });

  return (
    <input
      type={type}
      className={CLASS}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
