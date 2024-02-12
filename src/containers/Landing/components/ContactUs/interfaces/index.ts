import { IconProps } from "@modules/app/modules/icon/interfaces";

export interface ContactUsForm {
  fullName: string;
  email: string;
  message: string;
}

export interface ContactInfo {
  title: string;
  icon: React.FC<IconProps>;
  content: string;
}
