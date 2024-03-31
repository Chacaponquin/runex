import { FilterProductDTO } from "./product";

export interface CreateClotheDTO {
  name: string;
  price: number;
  provider: string;
  sizes: Array<string>;
  colors: Array<string>;
  category: string;
  images: Array<string>;
}

export interface EditClotheDTO {
  name: string;
  price: number;
  provider: string;
  sizes: Array<string>;
  colors: Array<string>;
  category: string;
  images: Array<string>;
}

export interface FilterClothesDTO extends FilterProductDTO {
  colors: string[];
  sizes: string[];
}
