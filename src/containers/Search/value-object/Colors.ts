export class Colors {
  readonly value: string[];

  constructor(value: string | undefined) {
    if (value) {
      this.value = value.split("-");
    } else {
      this.value = [];
    }
  }
}
