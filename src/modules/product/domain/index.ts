import { Clothe } from "./Clothe";
import { Product } from "./Product";

export interface ProductColor {
  name: string;
  color: string;
}

export interface ProductSize {
  name: string;
}

export interface Provider {
  name: string;
}

export interface ProductCategory {
  name: string;
}

export { Product, Clothe };
