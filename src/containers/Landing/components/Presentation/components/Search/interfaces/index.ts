import { IconProps } from "@modules/app/modules/icon/interfaces";

export interface SearchSection {
  icon: React.FC<IconProps>;
  title: string;
  searchUrl: string;
}
