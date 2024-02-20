import { useId, useState } from "react";
import { Search as IconSearch } from "@modules/app/modules/icon/components";
import clsx from "clsx";

export default function Search() {
  const [focus, setFocus] = useState(false);
  const id = useId();

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  const CLASS = clsx(
    "w-full max-w-[450px]",
    "flex items-center",
    "bg-white",
    "gap-x-5",
    "stroke-black",
    "px-8 py-4 esm:px-7 esm:py-3",
    "rounded-full",
    "transition-all duration-200",
    {
      "shadow-search !border-blue-500": focus,
      "hover:shadow-search hover:border-blue-500": !focus,
    }
  );

  return (
    <search className={CLASS}>
      <i>
        <IconSearch size={25} />
      </i>

      <input
        type="text"
        id={id}
        name="search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="outline-none text-lg w-full"
        placeholder="Search Here"
      />
    </search>
  );
}
