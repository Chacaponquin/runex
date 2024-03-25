"use client";

import { Aside, Navbar } from "./components";
import { ModalProvider } from "./context";
import { useAdmin } from "./hooks";

interface Props {
  children: React.ReactNode;
}

export default function Admin({ children }: Props) {
  const { openAside, handleChangeOpenAside } = useAdmin();

  return (
    <ModalProvider>
      <div className="w-full flex bg-gray-100 px-3 py-3 gap-x-3">
        <Aside
          openAside={openAside}
          handleChangeOpenAside={handleChangeOpenAside}
        />

        <main className="flex flex-col w-full lg:pl-[250px]">
          <Navbar handleChangeOpenAside={handleChangeOpenAside} />
          {children}
        </main>
      </div>
    </ModalProvider>
  );
}
