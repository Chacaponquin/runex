import { Product } from "@modules/product/domain";

export interface CartProduct {
  quantity: number;
  product: Product;
}
