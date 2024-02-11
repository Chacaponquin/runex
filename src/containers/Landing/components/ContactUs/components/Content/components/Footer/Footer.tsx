import React from "react";
import { Card, Header } from "./components";
import { Email, Phone } from "@modules/app/modules/icon/components";

export default function Footer() {
  return (
    <footer className="mt-8 w-full flex flex-col">
      <Header />

      <div className="grid grid-cols-2 w-full gap-10">
        <Card icon={Email} content="hectorangel2001@gmail.com" title="Email" />
        <Card icon={Phone} title="Contact Phone" content="+53 54173591" />
      </div>
    </footer>
  );
}
