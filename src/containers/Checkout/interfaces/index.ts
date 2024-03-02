import { IconProps } from "@modules/app/modules/icon/interfaces";
import { PAYMENT_METHODS } from "../constants";

export interface PaymentMethod {
  name: string;
  method: PAYMENT_METHODS;
  icon: React.FC<IconProps>;
}

export interface Adventage {
  title: string;
  icon: React.FC<IconProps>;
  description: string;
}

export interface PersonalForm {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  note: string;
}
