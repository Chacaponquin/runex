import React from "react";
import { Menu, User } from "./components";
import clsx from "clsx";

interface Props {
  handleChangeOpenAside(): void;
}

export default function Navbar({ handleChangeOpenAside }: Props) {
  const CLASS = clsx(
    "flex lg:justify-end justify-between items-center",
    "mb-2",
    "rounded",
    "py-2.5 lg:px-8 px-5",
    "w-full",
    "bg-white",
    "shadow-md"
  );

  return (
    <nav className={CLASS}>
      <Menu handleClick={handleChangeOpenAside} />
      <User />
    </nav>
  );
}
