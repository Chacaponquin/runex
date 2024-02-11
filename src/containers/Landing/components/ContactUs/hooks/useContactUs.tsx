"use client";

import { useState } from "react";
import { ContactUsForm } from "../interfaces";

export default function useContactUs() {
  const [form, setForm] = useState<ContactUsForm>({
    email: "",
    fullName: "",
    message: "",
  });

  function handleChange(key: keyof ContactUsForm, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {}

  return { form, handleChange, handleSubmit };
}
