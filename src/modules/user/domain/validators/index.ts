import {
  EmailFieldValidator,
  FieldValidator,
  MinLengthFieldValidator,
} from "@modules/app/modules/form/domain";

export class UserEmailValidator extends EmailFieldValidator {
  constructor({ id }: { id: string }) {
    super({ id: id, message: EmailFieldValidator.default });
  }
}

export class UserPasswordValidator extends FieldValidator<string> {
  constructor({ id }: { id: string }) {
    super({
      id: id,
      message:
        "La contraseña debe tener entre 8 y 15 caracteres. Al menos una letra minúscula, una mayúscula, un dígito y un caracter especial",
    });
  }

  public validate(value: string): boolean {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
    return reg.test(value);
  }
}

export class UserFirstNameValidator extends MinLengthFieldValidator {
  constructor({ id }: { id: string }) {
    super({
      id: id,
      message: "El primer nombre debe tener al menos 5 caracteres",
      min: 5,
    });
  }
}

export class UserLastNameValidator extends MinLengthFieldValidator {
  constructor({ id }: { id: string }) {
    super({
      min: 5,
      id: id,
      message: "El apellido debe tener al menos 5 caracteres",
    });
  }
}
