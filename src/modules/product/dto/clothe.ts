export interface CreateClotheDTO {
  name: string;
  price: number;
  provider: string;
  sizes: Array<string>;
  colors: Array<string>;
  category: string;
  images: Array<string>;
}

export interface EditClotheDTO {
  name: string;
  price: number;
  provider: string;
  sizes: Array<string>;
  colors: Array<string>;
  category: string;
  images: Array<string>;
}
