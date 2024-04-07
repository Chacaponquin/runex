"use client";

import { Footer, Navbar } from "@modules/shared/components";
import { Header, Main } from "./components";

interface Props {
  header: string;
}

export default function Information({ header }: Props) {
  return (
    <div className="flex flex-col">
      <Navbar fixed={false} />
      <Header header={header} />
      <Main />
      <Footer />
    </div>
  );
}
