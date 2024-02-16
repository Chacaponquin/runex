import React from "react";
import { Redirect } from "./components";

interface Props {
  text: string;
  hover: boolean;
}

export default function CardTitle({ text, hover }: Props) {
  return (
    <div className="flex justify-between w-full items-center">
      <h2 className="text-3xl font-fontMedium">{hover ? "Go." : text}</h2>
      <Redirect hover={hover} />
    </div>
  );
}
