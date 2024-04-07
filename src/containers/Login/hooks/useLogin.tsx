"use client";

import { useState } from "react";
import { LoginForm } from "../interfaces";
import { useValidator } from "@modules/app/modules/form/hooks";
import { NotValidateField } from "@modules/app/modules/form/domain";
import { LoginEmailValidator, LoginPasswordValidator } from "../domain";
import { useUserServices } from "@modules/user/services";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useUser } from "@modules/user/hooks";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@modules/app/constants";

export default function useLogin() {
  const router = useRouter();
  const { signIn } = useUserServices();
  const { handleSignIn } = useUser();
  const { error: toastError } = useToast();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    remember: false,
  });

  const { validate } = useValidator<LoginForm>({
    remember: new NotValidateField(),
    password: new LoginPasswordValidator(),
    email: new LoginEmailValidator(),
  });

  function handleChangeEmail(value: string): void {
    setForm((prev) => ({ ...prev, email: value }));
  }

  function handleChangePassword(value: string): void {
    setForm((prev) => ({ ...prev, password: value }));
  }

  function handleLogin() {
    if (validate(form)) {
      setLoading(true);

      signIn({
        body: { email: form.email, password: form.password },
        onError() {
          toastError({ id: "user-error", message: "No existe este usuario" });
        },
        onSuccess(data) {
          handleSignIn({ user: data, save: form.remember });
          router.push(APP_ROUTES.ROOT);
        },
        onFinally() {
          setLoading(false);
        },
      });
    }
  }

  function handleChangeRemember() {
    setForm((prev) => ({ ...prev, remember: !prev.remember }));
  }

  return {
    form,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    handleChangeRemember,
    loading,
  };
}
