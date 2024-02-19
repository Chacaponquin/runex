export class Query {
  private _value: string;

  constructor(value: string | undefined) {
    if (value) {
      this._value = value;
    } else {
      this._value = "";
    }
  }

  get value() {
    return this._value;
  }
}
