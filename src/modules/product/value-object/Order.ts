import { FILTER_ORDER } from "../constants";
import { OrderOption } from "../interfaces/params";
import { ProductParam } from "./ProductParam";

export class Order extends ProductParam<FILTER_ORDER> {
  static options: OrderOption[] = [
    { type: FILTER_ORDER.NAME, name: "Nombre", url: "name" },
    { type: FILTER_ORDER.MAX_PRICE, name: "Mayor precio", url: "max-price" },
    { type: FILTER_ORDER.MIN_PRICE, name: "Precio mínimo", url: "min-price" },
    { type: FILTER_ORDER.POPULAR, name: "Popularidad", url: "popular" },
  ];

  toValue(value: string | undefined): FILTER_ORDER {
    const found = Order.options.find((o) => o.url === value);

    if (found) {
      return found.type;
    } else {
      return Order.options[0].type;
    }
  }

  toParam(value: FILTER_ORDER | undefined): string {
    return value ? value : "";
  }
}
