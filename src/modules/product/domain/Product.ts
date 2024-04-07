import { PRODUCT_TYPES } from "../constants";
import { RespProductDTO, RespProductImageDTO } from "../dto/product";

export interface ProductProps extends RespProductDTO {
  images: Array<ProductImage>;
}

export interface ProductImage extends RespProductImageDTO {}

export class Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly imagesData: Array<ProductImage>;
  readonly provider: string;
  readonly categories: Array<string>;
  readonly type: PRODUCT_TYPES;

  constructor({
    id,
    name,
    price,
    images,
    categories,
    type,
    provider,
  }: ProductProps) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imagesData = images.slice(0, 5);
    this.provider = provider;
    this.categories = categories;
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
