import { Product } from "@modules/product/domain";
import { faker } from "@faker-js/faker";

export interface CartProduct {
  quantity: number;
  product: Product;
}

export interface handleChangeProductQuantityProps {
  id: string;
  quantity: number;
}

export interface SetProductProps {
  productId: string;
  quantity: number;
}

export class Cart {
  private _products: Array<CartProduct> = [];

  constructor() {
    this._products = Array.from({ length: 4 }).map(() => ({
      product: new Product({
        id: faker.string.uuid(),
        image: faker.image.url(),
        name: faker.commerce.product(),
        price: Number(faker.commerce.price()),
      }),
      quantity: faker.number.int({ min: 1, max: 5 }),
    }));
  }

  setProduct(product: SetProductProps): void {
    const found = this._products.find(
      (p) => p.product.id === product.productId
    );

    if (found) {
      this._products.push({
        quantity: product.quantity,
        product: found.product,
      });
    }
  }

  handleChangeProductQuantity(props: handleChangeProductQuantityProps): void {
    this._products = this._products.map((p) => {
      if (p.product.id === props.id) {
        p.quantity = props.quantity;
      }

      return p;
    });
  }

  get totalQuantity() {
    let total = 0;

    for (const product of this._products) {
      total += product.quantity;
    }

    return total;
  }

  get totalQuantityStr(): string {
    return String(this.totalQuantity);
  }

  get totalBill() {
    let total = 0;

    for (const product of this._products) {
      total += product.product.price;
    }

    return total;
  }

  get totalBillStr(): string {
    return Product.str(this.totalBill);
  }

  get products(): Array<CartProduct> {
    return this._products;
  }
}
