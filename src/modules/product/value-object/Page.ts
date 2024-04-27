import { ProductParam } from "./ProductParam";

export class Page extends ProductParam<number> {
  toValue(value: string | undefined): number {
    if (value) {
      const v = Number(value);

      if (!Number.isNaN(v)) {
        return v;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  }

  toParam(value: number | undefined): string {
    return value ? String(value) : "";
  }
}
