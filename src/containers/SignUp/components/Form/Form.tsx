import { Buttons, Input, Section } from "./components";
import { SignUpForm } from "../../interfaces";

interface Props {
  form: SignUpForm;
  handleChange(key: keyof SignUpForm, value: string): void;
  handleSubmit(): void;
  loading: boolean;
}

export default function Form({
  form,
  handleChange,
  handleSubmit,
  loading,
}: Props) {
  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmitForm}>
      <Section vertical={false}>
        <Input
          placeholder="Nombre"
          type="text"
          name="first-name"
          value={form.firstName}
          handleChange={(value) => handleChange("firstName", value)}
        />

        <Input
          placeholder="Apellidos"
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
          placeholder="Contraseña"
          type="password"
          name="password"
          value={form.password}
          handleChange={(value) => handleChange("password", value)}
        />

        <Input
          placeholder="Confirmar contraseña"
          type="password"
          value={form.confirmPassword}
          handleChange={(value) => handleChange("confirmPassword", value)}
          name="confirm-password"
        />
      </Section>

      <Buttons loading={loading} />
    </form>
  );
}
