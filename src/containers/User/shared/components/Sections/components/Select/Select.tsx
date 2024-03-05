import { USER_SECTIONS } from "@containers/User/constants";
import { SectionLink } from "../../interfaces";
import { Item } from "./components";

interface Props {
  sections: Array<SectionLink>;
  activeSection: USER_SECTIONS;
}

export default function Select({ sections, activeSection }: Props) {
  return (
    <ul className="flex gap-x-10 pt-6 mb-5">
      {sections.map((s, index) => (
        <Item
          key={index}
          label={s.label}
          url={s.url}
          active={s.section === activeSection}
        />
      ))}
    </ul>
  );
}
