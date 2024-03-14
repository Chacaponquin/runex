import { ADMIN_SECTIONS } from "@containers/Admin/constants";
import { IconProps } from "@modules/app/modules/icon/interfaces";

export interface AsideSection {
  icon: React.FC<IconProps>;
  title: string;
  section: ADMIN_SECTIONS;
  url: string;
}
