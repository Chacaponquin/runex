import { NotEmptyFieldValidator } from "@modules/app/modules/form/domain";

export class AdminLoginPassowrdValidator extends NotEmptyFieldValidator {
  constructor() {
    super({
      id: "admin-password",
      message: "Se debe insertar una constraseña",
    });
  }
}

export class AdminLoginUsernameValidator extends NotEmptyFieldValidator {
  constructor() {
    super({ id: "admin-username", message: "Se debe insertar un usuario" });
  }
}
