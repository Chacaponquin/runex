import { IconProps } from "@modules/app/modules/icon/interfaces";
import { PRODUCT_TYPES } from "@modules/product/constants";

export interface SearchSection {
  icon: React.FC<IconProps>;
  title: string;
  searchUrl: string;
  type: PRODUCT_TYPES;
}
