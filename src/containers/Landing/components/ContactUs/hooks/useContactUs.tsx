"use client";

import { useState } from "react";
import { ContactInfo, ContactUsForm } from "../interfaces";
import { Email, Phone } from "@modules/app/modules/icon/components";
import { CONTACT } from "@modules/app/constants";

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

  const contacts: Array<ContactInfo> = [
    { content: CONTACT.EMAIL, icon: Email, title: "Email" },
    { content: CONTACT.PHONE, icon: Phone, title: "Contact Number" },
  ];

  return { form, handleChange, handleSubmit, contacts };
}
