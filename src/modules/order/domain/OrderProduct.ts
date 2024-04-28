import { Product } from "@modules/product/domain";

interface Props {
  readonly name: string;
  readonly provider: string;
  readonly id: string;
  readonly price: number;
  readonly image: string;
  readonly quantity: number;
}

export class OrderProduct {
  readonly name: string;
  readonly provider: string;
  readonly id: string;
  readonly price: number;
  readonly image: string;
  readonly quantity: number;

  constructor({ name, id, image, price, provider, quantity }: Props) {
    this.name = name;
    this.provider = provider;
    this.id = id;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }

  get priceStr() {
    return Product.str(this.price);
  }

  get totalStr() {
    return Product.str(this.price * this.quantity);
  }
}
