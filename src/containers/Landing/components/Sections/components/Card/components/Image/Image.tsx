import React from "react";
import { CardTitle } from "../../shared/components";

interface Props {
  src: string;
  hover: boolean;
}

export default function ImageSection({ src, hover }: Props) {
  return (
    <div
      className="absolute w-full h-full top-0 left-0 rounded-xl duration-1000 flex flex-col justify-end text-white py-7 px-10"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${src})`,
        backgroundSize: hover ? "100%" : "110%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        visibility: hover ? "visible" : "hidden",
        transitionProperty: "background-size",
      }}
    >
      <CardTitle text="Go" />
    </div>
  );
}
