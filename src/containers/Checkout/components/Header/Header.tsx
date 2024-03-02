import { Resize } from "@containers/Checkout/shared/components";
import React from "react";
import { Back, Products, Title } from "./components";

export default function Header() {
  return (
    <header className="bg-light-gray-50/90 flex w-full mb-20">
      <Resize className="">
        <Back />
        <Title />
        <Products />
      </Resize>
    </header>
  );
}
