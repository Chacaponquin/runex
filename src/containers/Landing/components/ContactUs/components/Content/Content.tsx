import React from "react";
import { Form, Header } from "./components";
import { ContactUsForm } from "../../interfaces";

interface Props {
  form: ContactUsForm;
  handleChange(key: keyof ContactUsForm, value: string): void;
  handleSubmit(): void;
}

export default function Content({ form, handleChange, handleSubmit }: Props) {
  return (
    <div className="w-full flex flex-col py-4 px-10">
      <Header />

      <Form
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
