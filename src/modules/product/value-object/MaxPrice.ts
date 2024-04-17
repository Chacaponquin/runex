import { ProductParam } from "./ProductParam";

export class MaxPrice extends ProductParam<number> {
  private readonly MAX = 100000;

  toValue(value: string | undefined): number {
    if (value) {
      const v = Number(value);

      if (Number.isNaN(v)) {
        return v;
      } else {
        return this.MAX;
      }
    } else {
      return this.MAX;
    }
  }

  toParam(value: number | undefined): string {
    return value ? String(value) : "";
  }
}
