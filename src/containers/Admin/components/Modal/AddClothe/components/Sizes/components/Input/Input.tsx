import clsx from "clsx";
import { RefObject, useState } from "react";

interface Props {
  handleChange(v: string): void;
  value: string;
  inputRef: RefObject<HTMLInputElement>;
  isEmpty: boolean;
}

export default function Input({
  handleChange,
  value,
  inputRef,
  isEmpty,
}: Props) {
  const [focus, setFocus] = useState(false);

  const CLASS = clsx(
    "outline outline-[2px]",
    "rounded",
    "focus:outline-2 focus:outline-blue-500",
    "py-1 px-2.5",
    "text-sm",
    "transition-all duration-200",

    { "w-full": isEmpty, "w-[140px]": !isEmpty },

    { "outline-blue-500 shadow-input": focus, "outline-gray-200": !focus }
  );

  return (
    <input
      ref={inputRef}
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      value={value}
      className={CLASS}
      name="product-size"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder="Talla"
    />
  );
}
