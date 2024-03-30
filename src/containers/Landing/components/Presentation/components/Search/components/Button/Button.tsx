import clsx from "clsx";
import React from "react";

export default function Button() {
  const CLASS = clsx(
    "text-white",
    "bg-blue-500",
    "font-fontMedium",
    "transition-all duration-200 hover:opacity-70",
    "text-lg esm:text-base",
    "px-5 esm:px-3 py-2 esm:py-1.5",
    "rounded"
  );

  return (
    <button type="submit" className={CLASS}>
      Buscar
    </button>
  );
}
