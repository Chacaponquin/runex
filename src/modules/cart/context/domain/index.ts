import { Product } from "@modules/product/domain";

export interface CartProduct {
  quantity: number;
  product: Product;
}

export class Cart {
  private _products: Array<CartProduct> = [];

  setProduct(product: Product): void {
    this._products.push({ quantity: 0, product: product });
  }

  get products() {
    return this._products;
  }
}
