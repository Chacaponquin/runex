import { Dropdown } from "@modules/app/modules/form/components";
import { SearchSection } from "../../interfaces";
import { Option, Selected } from "./components";

interface Props {
  sections: Array<SearchSection>;
  selectedSection: number;
  handleChangeSelectedSection(index: number): void;
}

export default function Sections({
  sections,
  selectedSection,
  handleChangeSelectedSection,
}: Props) {
  return (
    <div>
      <Dropdown
        enableHideList={true}
        header={
          <Selected
            icon={sections[selectedSection].icon}
            title={sections[selectedSection].title}
          />
        }
        className="shadow-lg rounded"
      >
        {sections.map((s, index) => (
          <Option
            show={index !== selectedSection}
            key={index}
            icon={s.icon}
            handleClick={() => handleChangeSelectedSection(index)}
            title={s.title}
          />
        ))}
      </Dropdown>
    </div>
  );
}
