"use client";

import { Center, Left } from "./components";
import { useFooter } from "./hooks";

export default function Footer() {
  const { sections, year, contacts } = useFooter();

  return (
    <footer className="w-full flex flex-col bg-blue-500 text-white pt-8 pb-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full xl:px-24 lg:px-12 px-6 mb-5 gap-y-10 gap-x-10">
        <Left contacts={contacts} />
        <Center sections={sections} />
      </div>

      <div className="text-center bg-blue-500 text-white text-lg esm:text-base">
        <p>Todos los derechos reservados {year}</p>
      </div>
    </footer>
  );
}
