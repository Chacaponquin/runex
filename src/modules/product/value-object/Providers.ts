import { ProductParam } from "./ProductParam";

export class Providers extends ProductParam<string[]> {
  toValue(value: string | undefined): string[] {
    if (value) {
      return [value];
    } else {
      return [];
    }
  }

  toParam(value: string[] | undefined): string {
    if (value) {
      if (value.length === 0) {
        return "";
      } else {
        return value.join("-");
      }
    } else {
      return "";
    }
  }
}
