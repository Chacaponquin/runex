"use client";

import React from "react";
import { Buttons, Logo, Search } from "./components";

export default function Navbar() {
  return (
    <div className="flex items-center w-full py-3 justify-center border-b-[2px] border-gray-100">
      <nav className="flex items-center max-w-[1200px] w-full justify-between">
        <Logo />
        <Search />
        <Buttons />
      </nav>
    </div>
  );
}
