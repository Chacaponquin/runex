import { ProductParam } from "./ProductParam";

export class Order extends ProductParam<string> {
  toValue(value: string | undefined): string {
    if (value) {
      return value;
    } else {
      return "trending";
    }
  }

  toParam(value: string | undefined): string {
    return value ? value : "";
  }
}
