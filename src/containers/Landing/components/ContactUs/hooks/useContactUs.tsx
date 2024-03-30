"use client";

import { useState } from "react";
import { ContactInfo, ContactUsForm } from "../interfaces";
import { Email, Phone } from "@modules/app/modules/icon/components";
import { CONTACT } from "@modules/app/constants";
import { useUserServices } from "@modules/user/services";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useValidator } from "@modules/app/modules/form/hooks";
import {
  ContactEmailValidator,
  ContactFullNameValidator,
  ContactMessageValidator,
} from "../domain";
import { useUser } from "@modules/user/hooks";

export default function useContactUs() {
  const { sendMessage } = useUserServices();
  const { error } = useToast();
  const { actualUser } = useUser();

  const { validate } = useValidator<ContactUsForm>({
    email: new ContactEmailValidator(),
    fullName: new ContactFullNameValidator(),
    message: new ContactMessageValidator(),
  });

  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [form, setForm] = useState<ContactUsForm>({
    email: "",
    fullName: "",
    message: "",
  });

  function handleChange(key: keyof ContactUsForm, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    if (validate(form)) {
      setLoading(true);

      sendMessage({
        body: { ...form, user: actualUser ? actualUser.id : null },
        onError() {
          error({
            id: "send-message",
            message: "Hubo un error al enviar el mensaje",
          });
        },
        onSuccess() {
          setCompleted(true);
        },
        onFinally() {
          setLoading(false);
        },
      });
    }
  }

  const contacts: Array<ContactInfo> = [
    { content: CONTACT.EMAIL, icon: Email, title: "Email" },
    { content: CONTACT.PHONE, icon: Phone, title: "Contact Number" },
  ];

  return { form, handleChange, handleSubmit, contacts, loading, completed };
}
