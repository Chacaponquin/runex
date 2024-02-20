"use client";

import clsx from "clsx";
import { Buttons, Links, Logo, Menu } from "./components";
import { useNavbar } from "./hooks";

interface Props {
  presentationVisible: boolean;
}

export default function Navbar({ presentationVisible }: Props) {
  const { links } = useNavbar();

  const CLASS = clsx(
    "grid grid-cols-2 xl:grid-cols-3",
    "w-full",
    "xl:px-20 px-7 lg:py-1.5",
    "h-[70px] esm:h-[60px]",
    "transition-all duration-200",

    {
      "text-white stroke-white": presentationVisible,
      "text-black stroke-black": !presentationVisible,
    },

    {
      "bg-transparent": presentationVisible,
      "bg-white": !presentationVisible,
    },

    { "shadow-lg": !presentationVisible }
  );

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center bg-transparent z-50">
      <nav className={CLASS}>
        <Logo />
        <Links links={links} />
        <Buttons />
        <Menu />
      </nav>
    </div>
  );
}
