"use client";

import { Center, Left } from "./components";
import { useFooter } from "./hooks";

export default function Footer() {
  const { sections, year, contacts } = useFooter();

  return (
    <footer className="w-full flex bg-blue-500 text-white pt-8 px-6 pb-3 justify-center">
      <div className="w-full flex flex-col max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full mb-5 gap-y-10 gap-x-10">
          <Left contacts={contacts} />
          <Center sections={sections} />
        </div>

        <div className="text-center text-white text-lg esm:text-base">
          <p>Todos los derechos reservados {year}</p>
        </div>
      </div>
    </footer>
  );
}
