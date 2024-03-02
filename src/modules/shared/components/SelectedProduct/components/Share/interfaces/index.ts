import { IconProps } from "@modules/app/modules/icon/interfaces";
import React from "react";

export interface SocialMedia {
  icon: React.FC<IconProps>;
  color: string;
  name: string;
  link: string
}
