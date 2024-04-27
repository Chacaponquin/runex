import React, { Fragment } from "react";
import { FooterSection } from "../../interfaces";
import { Section } from "./components";

interface Props {
  sections: FooterSection[];
}

export default function Center({ sections }: Props) {
  return (
    <Fragment>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          subSections={section.subSections}
        />
      ))}
    </Fragment>
  );
}
