"use client";

import { USER_SECTIONS } from "@containers/User/constants";
import { Favorites, Orders, Select } from "./components";
import { useSections } from "./hooks";

interface Props {
  activeSection: USER_SECTIONS;
}

export default function Sections({ activeSection }: Props) {
  const { sections } = useSections();

  return (
    <section className="w-full flex flex-col">
      <Select sections={sections} activeSection={activeSection} />

      <div>
        {activeSection === USER_SECTIONS.FAVORITES && <Favorites />}
        {activeSection === USER_SECTIONS.ORDERS && <Orders />}
      </div>
    </section>
  );
}
