import { Product } from "@modules/product/domain";

interface Props {
  product: Product;
  quantity: number;
}

export class CartProduct {
  quantity: number;
  product: Product;

  constructor({ product, quantity }: Props) {
    this.quantity = quantity;
    this.product = product;
  }
}

type CartClotheProps = Props & {
  color: string;
  size: string;
};

export class CartClothe extends CartProduct {
  color: string;
  size: string;

  constructor({ color, product, quantity, size }: CartClotheProps) {
    super({ product, quantity });
    this.color = color;
    this.size = size;
  }
}

export class CartMedicine extends CartProduct {}
