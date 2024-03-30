import React from "react";
import { Form, Header } from "./components";
import { ContactUsForm } from "../../interfaces";

interface Props {
  form: ContactUsForm;
  handleChange(key: keyof ContactUsForm, value: string): void;
  handleSubmit(): void;
  loading: boolean;
  completed: boolean;
}

export default function Content({
  form,
  handleChange,
  handleSubmit,
  loading,
  completed,
}: Props) {
  return (
    <div className="w-full flex flex-col py-4 lg:px-10 px-3 esm:px-0">
      <Header />

      <Form
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        completed={completed}
      />
    </div>
  );
}
