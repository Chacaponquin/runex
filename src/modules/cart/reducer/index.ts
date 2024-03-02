import { faker } from "@faker-js/faker";
import { CART_ACTIONS } from "../constants/ACTIONS";
import { CartProduct } from "../domain";
import { Product } from "@modules/product/domain";

export type Payload =
  | {
      type: CART_ACTIONS.SET_PRODUCT;
      payload: { productId: string; quantity: number };
    }
  | {
      type: CART_ACTIONS.CHANGE_PRODUCT_QUANTITY;
      payload: { quantity: number; productId: string };
    }
  | { type: CART_ACTIONS.DELETE_PRODUCT; payload: { productId: string } }
  | { type: CART_ACTIONS.INITIAL };

export function cartReducer(cart: Array<CartProduct>, payload: Payload) {
  switch (payload.type) {
    case CART_ACTIONS.CHANGE_PRODUCT_QUANTITY: {
      return cart.map((p) => {
        if (p.product.id === payload.payload.productId) {
          p.quantity = payload.payload.quantity;
        }

        return p;
      });
    }

    case CART_ACTIONS.SET_PRODUCT: {
      const found = cart.find(
        (p) => p.product.id === payload.payload.productId
      );

      if (found) {
        return [
          ...cart,
          {
            quantity: payload.payload.quantity,
            product: found.product,
          },
        ];
      }
    }

    case CART_ACTIONS.DELETE_PRODUCT: {
      return cart.filter((p) => p.product.id !== payload.payload.productId);
    }

    case CART_ACTIONS.INITIAL: {
      return Array.from({ length: 4 }).map(() => ({
        product: new Product({
          id: faker.string.uuid(),
          images: Array.from({
            length: faker.number.int({ min: 1, max: 5 }),
          }).map(() => faker.image.url()),
          name: faker.lorem.words({ min: 4, max: 10 }),
          price: Number(faker.commerce.price()),
        }),
        quantity: faker.number.int({ min: 1, max: 5 }),
      }));
    }
  }
}
