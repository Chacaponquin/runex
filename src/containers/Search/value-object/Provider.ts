export class Provider {
  readonly value: string;

  constructor(value: string | undefined) {
    if (value) {
      this.value = value;
    } else {
      this.value = "";
    }
  }
}
