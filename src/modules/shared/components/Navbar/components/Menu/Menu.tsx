import { useBlockScroll } from "@modules/shared/hooks";
import React from "react";

interface Props {
  openMenu: boolean;
  handleCloseSide(): void;
}

export default function Menu({ openMenu, handleCloseSide }: Props) {
  useBlockScroll(true);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-40 bg-black/50 flex flex-col"
      style={{ visibility: openMenu ? "visible" : "hidden" }}
      onClick={handleCloseSide}
    >
      <nav
        className="flex flex-col px-10 bg-white h-screen w-[200px]"
        onClick={(e) => e.stopPropagation()}
      ></nav>
    </div>
  );
}
