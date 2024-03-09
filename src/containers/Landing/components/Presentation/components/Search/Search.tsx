"use client";

import { Search as IconSearch } from "@modules/app/modules/icon/components";
import clsx from "clsx";
import { Button, Input } from "./components";
import { useSearch } from "./hooks";

export default function Search() {
  const { focus, handleBlur, handleFocus, id, handleSubmit } = useSearch();

  const CLASS = clsx(
    "w-full",
    "flex items-center",
    "gap-x-5",
    "stroke-black",
    "bg-gray-50",
    "px-7 py-3.5 esm:px-6 esm:py-3",
    "rounded-l-md",
    "transition-all duration-200"
  );

  return (
    <form
      className="flex items-center shadow-lg w-full max-w-[580px]"
      onSubmit={handleSubmit}
    >
      <search className={CLASS}>
        <i>
          <IconSearch size={23} />
        </i>

        <Input handleBlur={handleBlur} handleFocus={handleFocus} id={id} />
      </search>

      <Button />
    </form>
  );
}
