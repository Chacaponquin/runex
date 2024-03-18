import React from "react";
import { User } from "./components";
import clsx from "clsx";

export default function Navbar() {
  const CLASS = clsx(
    "flex justify-end items-center",
    "mb-4",
    "rounded-lg",
    "py-3 px-8",
    "w-full",
    "bg-white",
    "shadow-md"
  );

  return (
    <nav className={CLASS}>
      <User />
    </nav>
  );
}
