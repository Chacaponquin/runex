"use client";

import { useState } from "react";
import { LoginForm } from "../interfaces";
import { useAdminUserServices } from "@modules/user/services";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useAdminUser } from "@modules/user/hooks";
import { useValidator } from "@modules/app/modules/form/hooks";
import {
  AdminLoginPassowrdValidator,
  AdminLoginUsernameValidator,
} from "../domain";
import { useLocalStorage } from "@modules/shared/hooks";
import { STORAGE_KEYS } from "@modules/app/constants";

export default function useLogin() {
  const { handleChangeUser } = useAdminUser();
  const { signIn } = useAdminUserServices();
  const { error: toastError } = useToast();
  const { set } = useLocalStorage();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const { validate } = useValidator<LoginForm>({
    password: new AdminLoginPassowrdValidator(),
    username: new AdminLoginUsernameValidator(),
  });

  function handleChangeUsername(username: string) {
    setForm((prev) => ({ ...prev, username: username }));
  }

  function handleChangePassword(password: string) {
    setForm((prev) => ({ ...prev, password: password }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (validate(form)) {
      setLoading(true);

      signIn({
        body: form,
        onSuccess(data) {
          handleChangeUser({
            email: data.email,
            id: data.id,
            username: data.username,
          });

          set(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
        },
        onFinally() {
          setLoading(false);
        },
        onError() {
          toastError({
            id: "admin-sign-in",
            message: "No existe este usuario",
          });
        },
      });
    }
  }

  return {
    form,
    handleSubmit,
    handleChangeUsername,
    handleChangePassword,
    loading,
  };
}
