import { Setting } from "@modules/app/modules/icon/components";
import React from "react";

export default function Header() {
  return (
    <header className="flex mb-4 gap-x-3 stroke-black items-center">
      <Setting size={23} />
      <h1 className="font-fontSemiBold text-3xl esm:text-2xl">Filtros</h1>
    </header>
  );
}
