"use client";

import { Aside, Navbar } from "./components";
import { ModalProvider } from "./context";

interface Props {
  children: React.ReactNode;
}

export default function Admin({ children }: Props) {
  return (
    <ModalProvider>
      <div className="w-full flex">
        <Aside />

        <main className="flex flex-col w-full bg-gray-100/50 px-10 py-3">
          <Navbar />
          {children}
        </main>
      </div>
    </ModalProvider>
  );
}
