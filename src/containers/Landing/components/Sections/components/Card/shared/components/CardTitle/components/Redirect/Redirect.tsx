import { ArrowRight } from "@modules/app/modules/icon/components";
import React from "react";

interface Props {
  hover: boolean;
}

export default function Redirect({ hover }: Props) {
  return (
    <button
      className="flex items-center justify-center transition-all duration-300 p-4 fill-white bg-blue-500 rounded-full"
      style={{ transform: hover ? `translateX(10px)` : `translateX(0px)` }}
    >
      <ArrowRight />
    </button>
  );
}
