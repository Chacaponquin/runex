import clsx from "clsx";
import { RefObject } from "react";

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
  const CLASS = clsx(
    "outline outline-2 outline-gray-200",
    "rounded",
    "focus:outline-2 focus:outline-blue-500",
    "py-0.5 px-2",
    "text-sm",

    { "w-full": isEmpty, "w-[140px]": !isEmpty }
  );

  return (
    <input
      ref={inputRef}
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      value={value}
      className={CLASS}
      name="product-size"
    />
  );
}
