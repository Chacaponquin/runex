import { Product } from "@modules/product/domain";

export interface ProductForm {
  quantity: number;
}

export interface AddProductProps {
  quantity: number;
  product: Product;
}
