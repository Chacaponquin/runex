import { IconProps } from "@modules/app/modules/icon/interfaces";
import React from "react";

export interface FooterSection {
  title: string;
  subSections: Array<FooterSubSection>;
}

export interface FooterSubSection {
  url: string;
  label: string;
}

export interface FooterContact {
  icon: React.FC<IconProps>;
  content: string;
}
