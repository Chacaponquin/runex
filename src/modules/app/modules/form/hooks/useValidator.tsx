"use client";

import { useToast } from "../../toast/hooks";
import { FieldValidator } from "../domain";

type Props<T> = {
  [key in keyof T]: FieldValidator<T[key]>;
};

export default function useValidator<T>(props: Props<T>) {
  const { error } = useToast();

  function validate(form: T): boolean {
    let validate = true;

    const values = form as Record<string, unknown>;
    const validators = Object.entries<FieldValidator<unknown>>(props);

    validators.forEach(([key, validator]) => {
      if (!validator.validate(values[key])) {
        error({ message: validator.message, id: validator.id });

        validate = false;
      }
    });

    return validate;
  }

  return { validate };
}
