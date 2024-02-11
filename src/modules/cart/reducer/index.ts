import { Product } from "@modules/product/domain";
import { CART_ACTIONS } from "../constants/ACTIONS";
import { Cart } from "../context/domain";

export type Payload = {
  type: CART_ACTIONS.SET_PRODUCT;
  payload: { product: Product };
};

export function cartReducer(cart: Cart, payload: Payload) {
  switch (payload.type) {
    case CART_ACTIONS.SET_PRODUCT:
      cart.setProduct(payload.payload.product);
      break;
  }

  return cart;
}
