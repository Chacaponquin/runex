import { ProductImage } from "@modules/product/domain";

export interface ClotheForm {
  name: string;
  price: number;
  provider: string;
  images: ProductImage[];
  sizes: string[];
  colors: string[];
  category: string;
  description: string;
}

export interface MedicineForm {
  name: string;
  provider: string;
  images: ProductImage[];
  price: number;
  category: string;
  description: string;
}

export type UploadImage = {
  file: File;
  id: string;
};
