export interface SectionLink {
  label: string;
  url: string;
  sections: Array<SubSectionLink>;
}

export interface SubSectionLink {
  label: string;
  url: string;
}
