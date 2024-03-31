import { PostProps } from "@modules/app/modules/http/interfaces";
import { Product } from "@modules/product/domain";

export interface FilterForm {
  minPrice: number;
  maxPrice: number;
  provider: string;
  page: number;
}

export type SearchProductParams = Partial<{
  q: string;
  order: string;
  pMax: string;
  pMin: string;
  provider: string;
  page: string;
}>;

export type SearchFilterFunctionProps = PostProps<
  Product[],
  FilterForm & { name: string }
>;
