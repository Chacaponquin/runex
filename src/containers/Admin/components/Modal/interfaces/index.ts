import { ProductImage } from "@modules/product/domain";

export interface ClotheForm {
  name: string;
  price: number;
  provider: string;
  images: Array<ProductImage>;
  sizes: Array<string>;
  colors: Array<string>;
  category: string;
}

export interface MedicineForm {
  name: string;
  provider: string;
  images: Array<ProductImage>;
  price: number;
  category: string;
}

export type UploadImage = {
  file: File;
  id: string;
};
