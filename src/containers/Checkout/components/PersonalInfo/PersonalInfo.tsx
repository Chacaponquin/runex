import { PersonalForm } from "@containers/Checkout/interfaces";
import { Section } from "@containers/Checkout/shared/components";
import React from "react";
import { Button, FormSection, Input } from "./components";

interface Props {
  form: PersonalForm;
  handlePayment(): void;
  handleChangeForm(key: keyof PersonalForm, value: string): void;
  loading: boolean;
}

export default function PersonalInfo({
  form,
  handlePayment,
  handleChangeForm,
  loading,
}: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handlePayment();
  }

  return (
    <Section title="Información personal">
      <form
        className="flex flex-col items-center gap-y-4"
        onSubmit={handleSubmit}
      >
        <FormSection title="Nombre" required>
          <Input
            type="text"
            value={form.firstName}
            placeholder="Nombre"
            handleChange={(v) => handleChangeForm("firstName", v)}
            name="first-name"
          />
        </FormSection>

        <FormSection title="Apellidos" required>
          <Input
            type="text"
            value={form.lastName}
            placeholder="Apellidos"
            handleChange={(v) => handleChangeForm("lastName", v)}
            name="last-name"
          />
        </FormSection>

        <FormSection title="Email" required>
          <Input
            type="email"
            value={form.email}
            placeholder="Email"
            handleChange={(v) => handleChangeForm("email", v)}
            name="email"
          />
        </FormSection>

        <FormSection title="Telefóno" required>
          <Input
            type="text"
            value={form.phone}
            placeholder="Teléfono"
            handleChange={(v) => handleChangeForm("phone", v)}
            name="phone"
          />
        </FormSection>

        <FormSection title="Dirección" required>
          <Input
            type="text"
            value={form.address}
            placeholder="Dirección"
            handleChange={(v) => handleChangeForm("address", v)}
            name="address"
          />
        </FormSection>

        <Button loading={loading} />
      </form>
    </Section>
  );
}
