import { SearchProductParams } from "@containers/Search/interfaces";

export type SearchClotheParams = SearchProductParams &
  Partial<{
    colors: string;
    sizes: string;
  }>;

export interface Form {
  colors: string[];
  sizes: string[];
}
