import React from "react";
import { Buttons, Links, Logo } from "./components";
import { useNavbar } from "./hooks";

export default function Navbar() {
  const { links } = useNavbar();

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center bg-transparent z-50 pt-2 px-20">
      <nav className="grid grid-cols-3 w-full py-3 px-20 rounded-full shadow-lg bg-white">
        <Logo />
        <Links links={links} />
        <Buttons />
      </nav>
    </div>
  );
}
