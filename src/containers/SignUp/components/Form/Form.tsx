import React from "react";
import { Buttons, Input, Section } from "./components";
import { SignUpForm } from "../../interfaces";

interface Props {
  form: SignUpForm;
  handleChange(key: keyof SignUpForm, value: string): void;
  handleSubmit(): void;
}

export default function Form({ form, handleChange, handleSubmit }: Props) {
  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmitForm}>
      <Section vertical={false}>
        <Input
          placeholder="First name"
          type="text"
          name={"first-name"}
          value={form.firstName}
          handleChange={(value) => handleChange("firstName", value)}
        />

        <Input
          placeholder="Last name"
          type="text"
          name="last-name"
          value={form.lastName}
          handleChange={(value) => handleChange("lastName", value)}
        />
      </Section>

      <Section vertical>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          handleChange={(value) => handleChange("email", value)}
        />
      </Section>

      <Section vertical>
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          handleChange={(value) => handleChange("password", value)}
        />

        <Input
          placeholder="Confirm Password"
          type="password"
          value={form.confirmPassword}
          handleChange={(value) => handleChange("confirmPassword", value)}
          name="confirm-password"
        />
      </Section>

      <Buttons />
    </form>
  );
}
