import { USER_SECTIONS } from "@containers/User/constants";

export interface SectionLink {
  label: string;
  url: string;
  section: USER_SECTIONS;
}
