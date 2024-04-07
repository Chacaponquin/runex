import {
  EmailFieldValidator,
  NotValidateField,
} from "@modules/app/modules/form/domain";

export class FormAddressValidator extends NotValidateField {}

export class FormEmailValidator extends EmailFieldValidator {
  constructor() {
    super({ id: "checkout-email", message: "Debe insertar un email válido" });
  }
}

export class FormFirstNameValidator extends NotValidateField {}

export class FormLastNameValidator extends NotValidateField {}

export class FormNoteValidator extends NotValidateField {}

export class FormPhoneValidator extends NotValidateField {}
