export interface FilterForm {
  minPrice: number;
  maxPrice: number;
  name: string;
  provider: string;
  color: string;
  size: string;
}

export interface UrlSearchParams {
  q: string | undefined;
  page: string | undefined;
  min: string | undefined;
  max: string | undefined;
  color: string | undefined;
  size: string | undefined;
  provider: string | undefined;
}
