import {
  CreateProductDTO,
  EditProductDTO,
  FilterProductDTO,
  RespProductDTO,
} from "./product";

export interface CreateClotheDTO extends CreateProductDTO {
  sizes: string[];
  colors: string[];
}

export interface EditClotheDTO extends EditProductDTO {
  sizes: string[];
  colors: string[];
}

export interface FilterClothesDTO extends FilterProductDTO {
  colors: string[];
  sizes: string[];
}

export interface RespClotheDTO extends RespProductDTO {
  sizes: Array<string>;
  colors: Array<string>;
}
