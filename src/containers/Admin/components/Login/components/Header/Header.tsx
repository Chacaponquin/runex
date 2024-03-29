import { Logo } from "@modules/app/components";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-5">
      <Logo size={70} />

      <h1 className="mt-3.5 text-2xl text-center font-fontMedium">
        Bienvenido de vuelta
      </h1>
    </header>
  );
}
