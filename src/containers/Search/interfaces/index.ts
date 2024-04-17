import { BodyProps } from "@modules/app/modules/http/interfaces";
import { SearchResult } from "@modules/product/interfaces/product";

export interface FilterForm {
  minPrice: number;
  maxPrice: number;
  page: number;
  order: string;
}

export type SearchFilterFunctionProps = BodyProps<
  SearchResult,
  FilterForm & { name: string }
>;
