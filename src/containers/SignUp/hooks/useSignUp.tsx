"use client";

import { useState } from "react";
import { SignUpForm } from "../interfaces";
import { useValidator } from "@modules/app/modules/form/hooks";
import {
  FormConfirmPasswordValidator,
  FormEmailValidator,
  FormFirstNameValidator,
  FormLastNameValidator,
  FormPasswordValidator,
} from "../domain";
import { useUserServices } from "@modules/user/services";
import { useUser } from "@modules/user/hooks";
import { HttpStatusCode } from "axios";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@modules/app/constants";

export default function useSignUp() {
  const navigate = useRouter();
  const { error: toastError } = useToast();
  const { handleSignIn } = useUser();
  const { signUp } = useUserServices();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<SignUpForm>({
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const { validate } = useValidator<SignUpForm>({
    firstName: new FormFirstNameValidator(),
    lastName: new FormLastNameValidator(),
    email: new FormEmailValidator(),
    password: new FormPasswordValidator(),
    confirmPassword: new FormConfirmPasswordValidator(),
  });

  function handleChange(key: keyof SignUpForm, value: string): void {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    if (validate(form)) {
      if (form.confirmPassword === form.password) {
        setLoading(true);

        signUp({
          body: {
            email: form.email,
            firstName: form.firstName,
            lastName: form.lastName,
            password: form.password,
          },
          onFinally() {
            setLoading(false);
          },
          onSuccess(data) {
            handleSignIn({ save: true, user: data });
            navigate.push(APP_ROUTES.ROOT);
          },
          onError(error) {
            if (error.status === HttpStatusCode.Conflict) {
              toastError({
                id: "repeat-user",
                message: "Ya existe un usuario con este email",
              });
            } else {
              toastError({ id: "sign-up", message: "Hubo un error" });
            }
          },
        });
      } else {
        toastError({
          id: "not-equal-passwords",
          message: "Las constraseñas insertadas deben ser iguales",
        });
      }
    }
  }

  return { form, handleChange, handleSubmit, loading };
}
