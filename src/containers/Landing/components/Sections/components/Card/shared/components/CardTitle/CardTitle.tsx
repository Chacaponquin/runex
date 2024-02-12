import React from "react";
import { Redirect } from "./components";

interface Props {
  text: string;
}

export default function CardTitle({ text }: Props) {
  return (
    <div className="flex justify-between w-full items-center">
      <h2 className="text-3xl font-fontMedium">{text}</h2>
      <Redirect />
    </div>
  );
}
