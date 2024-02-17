import React from "react";
import { Buttons } from "./components";

interface Props {
  name: string;
  price: string;
  sizes: Array<string>;
  colors: Array<string>;
  provider: string;
}

export default function Data({ name, colors, price, sizes, provider }: Props) {
  return (
    <div className="flex flex-col">
      <p className="text-base text-gray-500">{provider}</p>
      <h1 className="font-fontBold text-4xl text-left mb-2">{name}</h1>
      <span className="text-blue-500 text-lg mb-3">{price}</span>

      <Buttons />
    </div>
  );
}
