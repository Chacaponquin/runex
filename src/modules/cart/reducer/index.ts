import { Product } from "@modules/product/domain";
import { CART_ACTIONS } from "../constants/ACTIONS";
import { Cart } from "../domain";

export type Payload =
  | {
      type: CART_ACTIONS.SET_PRODUCT;
      payload: { product: Product };
    }
  | {
      type: CART_ACTIONS.CHANGE_PRODUCT_QUANTITY;
      payload: { quantity: number; productId: string };
    };

export function cartReducer(cart: Cart, payload: Payload) {
  switch (payload.type) {
    case CART_ACTIONS.CHANGE_PRODUCT_QUANTITY:
      cart.changeProductQuantity({
        id: payload.payload.productId,
        quantity: payload.payload.quantity,
      });
      break;

    case CART_ACTIONS.SET_PRODUCT:
      cart.setProduct(payload.payload.product);
      break;
  }



  return cart;
}
