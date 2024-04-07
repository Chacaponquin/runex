"use client";

import { USER_SECTIONS } from "@containers/User/constants";
import { Favorites, Orders } from "./components";

interface Props {
  activeSection: USER_SECTIONS;
}

export default function Sections({ activeSection }: Props) {
  return (
    <section className="w-full flex flex-col">
      {activeSection === USER_SECTIONS.FAVORITES && <Favorites />}
      {activeSection === USER_SECTIONS.ORDERS && <Orders />}
    </section>
  );
}
