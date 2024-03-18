import { Product } from "@modules/product/domain";

export interface ProductSection {
  id: number;
  title: string;
  products: Array<Product>;
  loading: boolean;
}
