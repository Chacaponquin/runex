import { PRODUCT_TYPES } from "../constants";

export interface FilterProductDTO {
  minPrice: number;
  maxPrice: number;
  name: string;
  provider: string;
  page: number;
}

export interface RespProductDTO {
  id: string;
  name: string;
  price: number;
  images: Array<RespProductImageDTO>;
  categories: string[];
  type: PRODUCT_TYPES;
  provider: string;
}

export interface RespProductImageDTO {
  id: string;
  size: number;
  name: string;
  source: string;
}

export interface GetDTO {
  page: number;
}

export interface GetSpecificProductsDTO {
  page: number;
}
