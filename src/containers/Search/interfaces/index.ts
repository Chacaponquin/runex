import { BodyProps } from "@modules/app/modules/http/interfaces";
import { FILTER_ORDER } from "@modules/product/constants";
import { SearchResult } from "@modules/product/interfaces/product";

export interface FilterForm {
  minPrice: number;
  maxPrice: number;
  page: number;
  order: FILTER_ORDER;
}

export type SearchFilterFunctionProps = BodyProps<
  SearchResult,
  FilterForm & { name: string }
>;
