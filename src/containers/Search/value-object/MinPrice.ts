export class MinPrice {
  readonly value: number;

  constructor(value: string | undefined) {
    if (value) {
      const v = Number(value);

      if (Number.isNaN(v)) {
        this.value = v;
      } else {
        this.value = 0;
      }
    } else {
      this.value = 0;
    }
  }
}
