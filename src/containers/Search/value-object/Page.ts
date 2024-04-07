export class Page {
readonly value: number;

  constructor(value: string | undefined) {
    if (value) {
      const v = Number(value);

      if (Number.isNaN(v)) {
        this.value = v;
      } else {
        this.value = 1;
      }
    } else {
      this.value = 1;
    }
  }

 
}
