import { FILTER_ORDER, PRODUCT_TYPES } from "../constants";

export interface EditProductDTO {
  name: string;
  price: number;
  provider: string;
  category: string;
  images: string[];
}

export interface CreateProductDTO {
  name: string;
  price: number;
  provider: string;
  category: string;
  images: string[];
  description: string;
}

export interface FilterProductDTO {
  minPrice: number;
  maxPrice: number;
  name: string;
  providers: string[];
  page: number;
  order: FILTER_ORDER;
}

export interface RespProductDTO {
  id: string;
  name: string;
  price: number;
  description: string;
  images: RespProductImageDTO[];
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

export interface RespSearchProductsDTO {
  totalPages: number;
  result: RespProductDTO[];
}
