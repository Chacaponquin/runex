export class MinPrice {
  private _value: number;

  constructor(value: string | undefined) {
    if (value) {
      const v = Number(value);

      if (Number.isNaN(v)) {
        this._value = v;
      } else {
        this._value = 0;
      }
    } else {
      this._value = 0;
    }
  }

  get value() {
    return this._value;
  }
}
