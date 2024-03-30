import { PRODUCT_TYPES } from "../constants";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  images: Array<ProductImage>;
  category: string;
  type: PRODUCT_TYPES;
  provider: string;
}

export interface ProductImage {
  id: string;
  size: number;
  name: string;
  source: string;
}

export class Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly imagesData: Array<ProductImage>;
  readonly provider: string;
  readonly category: string;
  readonly type: PRODUCT_TYPES;

  constructor({
    id,
    name,
    price,
    images,
    category,
    type,
    provider,
  }: ProductProps) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imagesData = images;
    this.provider = provider;
    this.category = category;
    this.type = type;
  }

  get image() {
    return this.imagesData[0].source;
  }

  get images(): Array<string> {
    return this.imagesData.map((i) => i.source);
  }

  get priceStr() {
    return Product.str(this.price);
  }

  static str(value: number): string {
    return `$${value}`;
  }

  static hexColor(color: string): string {
    if (color === "orange") {
      return "#f0932b";
    } else if (color === "green") {
      return "#6ab04c";
    } else if (color === "red") {
      return "#eb4d4b";
    } else {
      return "#2d3436";
    }
  }
}
