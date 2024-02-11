"use client";

import { useState } from "react";
import { SignUpForm } from "../interfaces";

export default function useSignUp() {
  const [form, setForm] = useState<SignUpForm>({
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  function handleChange(key: keyof SignUpForm, value: string): void {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {}

  return { form, handleChange, handleSubmit };
}
