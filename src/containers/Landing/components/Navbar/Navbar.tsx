import React from "react";
import { Buttons, Logo } from "./components";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full py-2 flex justify-center">
      <nav className="flex items-center justify-between max-w-[1100px] w-full py-3">
        <Logo />
        <Buttons />
      </nav>
    </div>
  );
}
