import { BodyProps } from "@modules/app/modules/http/interfaces";
import { Product } from "@modules/product/domain";

export interface FilterForm {
  minPrice: number;
  maxPrice: number;
  page: number;
  order: string;
}

export type SearchFilterFunctionProps = BodyProps<
  Product[],
  FilterForm & { name: string }
>;
