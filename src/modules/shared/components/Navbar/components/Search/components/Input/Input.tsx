import React from "react";

interface Props {
  handleFocus(): void;
  handleBlur(): void;
  value: string;
  handleChange(v: string): void;
}

export default function Input({
  handleBlur,
  handleFocus,
  value,
  handleChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search"
      className="outline-none w-full bg-transparent"
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
