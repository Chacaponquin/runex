import { FILTER_ORDER } from "../constants";

export type SearchProductParams = Partial<{
  q: string;
  order: string;
  pMax: string;
  pMin: string;
  providers: string;
  page: string;
}>;

export interface SearchMedicineParams extends SearchProductParams {}

export type SearchClotheParams = SearchProductParams &
  Partial<{
    colors: string;
    sizes: string;
    providers: string;
  }>;

export interface OrderOption {
  name: string;
  type: FILTER_ORDER;
  url: string;
}
