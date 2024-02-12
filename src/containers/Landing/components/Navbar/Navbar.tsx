import React from "react";
import { Buttons, Links, Logo } from "./components";
import { useNavbar } from "./hooks";

export default function Navbar() {
  const { links } = useNavbar();

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center bg-white shadow-md z-50">
      <nav className="grid grid-cols-3 w-full py-3 px-20">
        <Logo />
        <Links links={links} />
        <Buttons />
      </nav>
    </div>
  );
}
