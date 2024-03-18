export interface AddCLotheForm {
  name: string;
  price: number;
  provider: string;
  images: Array<File>;
  sizes: Array<string>;
  colors: Array<string>;
  category: string;
}
