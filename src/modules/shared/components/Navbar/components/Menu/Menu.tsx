import { useBlockScroll } from "@modules/shared/hooks";
import React from "react";

interface Props {
  openMenu: boolean;
}

export default function Menu({ openMenu }: Props) {
  useBlockScroll(true);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-40 bg-black/50 flex flex-col"
      style={{ visibility: openMenu ? "visible" : "hidden" }}
    >
      Menu
    </div>
  );
}
