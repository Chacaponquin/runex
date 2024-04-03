import { Product } from "@modules/product/domain";

export interface ProductSection {
  products: Array<Product>;
  loading: boolean;
  page: number;
  handleNextPage(): void;
  handlePrevPage(): void;
  size: number;
}
