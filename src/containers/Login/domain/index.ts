import { NotEmptyFieldValidator } from "@modules/app/modules/form/domain";

export class LoginPasswordValidator extends NotEmptyFieldValidator {
  constructor() {
    super({ id: "login-password", message: "Debe insertarse una contraseña" });
  }
}

export class LoginEmailValidator extends NotEmptyFieldValidator {
  constructor() {
    super({ id: "login-email", message: "Debe insertarse un email" });
  }
}
