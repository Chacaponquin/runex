import { CART_ACTIONS } from "../constants/ACTIONS";
import { CartProduct } from "../domain";

export type Payload =
  | {
      type: CART_ACTIONS.SET_PRODUCT;
      payload: {
        product: CartProduct;
      };
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
      return [...cart, payload.payload.product];
    }

    case CART_ACTIONS.DELETE_PRODUCT: {
      return cart.filter((p) => p.product.id !== payload.payload.productId);
    }

    case CART_ACTIONS.INITIAL: {
      return [];
    }
  }
}
