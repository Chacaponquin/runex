import React from "react";
import { Buttons, Input, Message } from "./components";
import { ContactUsForm } from "../../../../interfaces";
import { Email, User } from "@modules/app/modules/icon/components";

interface Props {
  form: ContactUsForm;
  handleChange(key: keyof ContactUsForm, value: string): void;
  handleSubmit(): void;
}

export default function Form({ form, handleChange, handleSubmit }: Props) {
  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <form
      className="flex flex-col gap-y-3 text-base"
      onSubmit={handleFormSubmit}
    >
      <Input
        value={form.fullName}
        name="full-name"
        type="text"
        placeholder="Full Name"
        handleChange={(value) => handleChange("fullName", value)}
        icon={User}
      />

      <Input
        value={form.email}
        name="email"
        type="email"
        placeholder="Email"
        icon={Email}
        handleChange={(value) => handleChange("email", value)}
      />

      <Message
        value={form.message}
        name="message"
        placeholder="Message"
        handleChange={(value) => handleChange("message", value)}
      />

      <Buttons />
    </form>
  );
}
