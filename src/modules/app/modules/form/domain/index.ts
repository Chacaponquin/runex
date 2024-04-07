interface Props {
  message: string;
  id: string;
}

export abstract class FieldValidator<V> {
  readonly message: string;
  readonly id: string;

  constructor({ message, id }: Props) {
    this.message = message;
    this.id = id;
  }

  public abstract validate(value: V): boolean;
}

export class NotValidateField extends FieldValidator<unknown> {
  constructor() {
    super({ message: "", id: "" });
  }

  public validate(): boolean {
    return true;
  }
}

export class EmailFieldValidator extends FieldValidator<string> {
  public validate(value: string): boolean {
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return emailRegex.test(value);
  }
}

export class NotEmptyFieldValidator extends FieldValidator<string> {
  public validate(value: string): boolean {
    return value.length > 0;
  }
}

export class MinLengthFieldValidator extends FieldValidator<string> {
  readonly min: number;

  constructor({
    id,
    message,
    min,
  }: {
    min: number;
  } & Props) {
    super({ id, message });
    this.min = min;
  }

  public validate(value: string): boolean {
    return value.length >= this.min;
  }
}
