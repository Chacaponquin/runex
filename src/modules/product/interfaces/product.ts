import { Product } from "../domain";

export interface SearchResult {
  totalPages: number;
  result: Product[];
}
