import React from "react";
import { Buttons, Input, Message } from "./components";
import { ContactUsForm } from "../../../../interfaces";

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
        placeholder="Nombre completo"
        handleChange={(value) => handleChange("fullName", value)}
      />

      <Input
        value={form.email}
        name="email"
        type="email"
        placeholder="Email"
        handleChange={(value) => handleChange("email", value)}
      />

      <Message
        value={form.message}
        name="message"
        placeholder="Mensaje"
        handleChange={(value) => handleChange("message", value)}
      />

      <Buttons />
    </form>
  );
}
