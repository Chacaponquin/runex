import { NotEmptyFieldValidator } from "@modules/app/modules/form/domain";
import {
  UserEmailValidator,
  UserFirstNameValidator,
  UserLastNameValidator,
  UserPasswordValidator,
} from "@modules/user/domain/validators";

export class FormFirstNameValidator extends UserFirstNameValidator {
  constructor() {
    super({
      id: "sign-up-first-name",
    });
  }
}

export class FormEmailValidator extends UserEmailValidator {
  constructor() {
    super({ id: "sign-up-email" });
  }
}

export class FormLastNameValidator extends UserLastNameValidator {
  constructor() {
    super({ id: "sign-up-last-name" });
  }
}

export class FormPasswordValidator extends UserPasswordValidator {
  constructor() {
    super({ id: "sign-up-password" });
  }
}

export class FormConfirmPasswordValidator extends NotEmptyFieldValidator {
  constructor() {
    super({
      id: "sign-up-confirm-password",
      message: "Las constraseñas insertadas deben coincidir",
    });
  }
}
