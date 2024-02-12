"use client";

import React from "react";
import { Center, Left } from "./components";
import { useFooter } from "./hooks";

export default function Footer() {
  const { sections, year, contacts } = useFooter();

  return (
    <footer className="w-full flex flex-col mt-20 bg-blue-500 text-white pt-8 pb-3">
      <div className="grid grid-cols-2 w-full px-24 mb-10">
        <Left contacts={contacts} />
        <Center sections={sections} />
      </div>

      <div className="text-center bg-blue-500 text-white text-xl">
        <p>Todos los derechos reservados {year}</p>
      </div>
    </footer>
  );
}
