import React from "react";

interface Props {
  handleFocus(): void;
  handleBlur(): void;
}

export default function Input({ handleBlur, handleFocus }: Props) {
  return (
    <input
      type="text"
      placeholder="Search"
      className="outline-none w-full"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}
