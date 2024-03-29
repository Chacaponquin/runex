"use client";

import { useState } from "react";
import { LoginForm } from "../interfaces";
import { useAdminUserServices } from "@modules/user/services";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useAdminUser } from "@modules/user/hooks";

export default function useLogin() {
  const { handleChangeUser } = useAdminUser();
  const { signIn } = useAdminUserServices();
  const { error: toastError } = useToast();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  function handleChangeEmail(email: string) {
    setForm((prev) => ({ ...prev, email: email }));
  }

  function handleChangePassword(password: string) {
    setForm((prev) => ({ ...prev, password: password }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    signIn({
      body: form,
      onSuccess({ email, id, username }) {
        handleChangeUser({
          email,
          id,
          username,
        });
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

  return {
    form,
    handleSubmit,
    handleChangeEmail,
    handleChangePassword,
    loading,
  };
}
