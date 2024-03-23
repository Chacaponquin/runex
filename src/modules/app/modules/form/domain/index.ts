interface Props {
  message: string;
  id: string;
}

export abstract class FieldValidator<V> {
  public readonly message: string;
  public readonly id: string;

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
