import React from "react";
import { Buttons, Links, Logo } from "./components";
import { useNavbar } from "./hooks";

export default function Navbar() {
  const { links } = useNavbar();

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center bg-transparent z-50 pt-2 2xl:px-20 px-4 xl:px-10">
      <nav className="grid grid-cols-3 w-full lg:py-1.5 py-1 xl:px-20 px-7 rounded-full shadow-lg bg-white">
        <Logo />
        <Links links={links} />
        <Buttons />
      </nav>
    </div>
  );
}
