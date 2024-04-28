import { PRODUCT_TYPES } from "../constants";
import { RespProductDTO, RespProductImageDTO } from "../dto/product";

export interface ProductProps extends RespProductDTO {
  images: ProductImage[];
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
  readonly description: string;

  constructor({
    id,
    name,
    price,
    images,
    categories,
    type,
    provider,
    description,
  }: ProductProps) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagesData = images.slice(0, 5);
    this.provider = provider;
    this.categories = categories;
    this.type = type;
  }

  get image() {
    return this.imagesData[0].source;
  }

  get images(): string[] {
    return this.imagesData.map((i) => i.source);
  }

  get priceStr() {
    return Product.str(this.price);
  }

  static str(value: number): string {
    return `$` + `${value.toFixed(2)}`;
  }
}
