import { ProductParam } from "./ProductParam";

export class Query extends ProductParam<string> {
  toValue(value: string | undefined): string {
    if (value) {
      return value;
    } else {
      return "";
    }
  }

  toParam(value: string | undefined): string {
    return value ? value : "";
  }
}
