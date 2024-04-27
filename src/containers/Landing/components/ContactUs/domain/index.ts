import {
  EmailFieldValidator,
  MinLengthFieldValidator,
} from "@modules/app/modules/form/domain";

export class ContactEmailValidator extends EmailFieldValidator {
  constructor() {
    super({
      id: "contact-email",
      message: EmailFieldValidator.default,
    });
  }
}

export class ContactFullNameValidator extends MinLengthFieldValidator {
  constructor() {
    super({
      id: "contact-fullname",
      message: "El nombre debe tener al menos 5 letras",
      min: 5,
    });
  }
}

export class ContactMessageValidator extends MinLengthFieldValidator {
  constructor() {
    super({
      id: "contact-message",
      message: "El mensaje debe tener al menos 10 caracteres",
      min: 10,
    });
  }
}
