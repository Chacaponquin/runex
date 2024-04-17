import { ProductParam } from "./ProductParam";

export class MinPrice extends ProductParam<number> {
  toValue(value: string | undefined): number {
    if (value) {
      const v = Number(value);

      if (Number.isNaN(v)) {
        return v;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  toParam(value: number | undefined): string {
    return value ? String(value) : "";
  }
}
