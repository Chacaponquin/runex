"use client";

import { useState } from "react";
import { LoginForm } from "../interfaces";

export default function useLogin() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    remember: false,
  });

  function handleChangeEmail(value: string): void {
    setForm((prev) => ({ ...prev, email: value }));
  }

  function handleChangePassword(value: string): void {
    setForm((prev) => ({ ...prev, password: value }));
  }

  function handleLogin() {
    setLoading(true);
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
