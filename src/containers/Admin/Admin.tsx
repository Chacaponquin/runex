"use client";

import { Aside, Navbar } from "./components";
import { ModalProvider } from "./context";

interface Props {
  children: React.ReactNode;
}

export default function Admin({ children }: Props) {
  return (
    <ModalProvider>
      <div className="w-full flex bg-gray-100 px-3 py-3 gap-x-3">
        <Aside />

        <main className="flex flex-col w-full">
          <Navbar />
          {children}
        </main>
      </div>
    </ModalProvider>
  );
}
