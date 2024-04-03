import { useId } from "react";
import { Button, Input, Section, Session } from "./components";
import { LoginForm } from "@containers/Login/interfaces";

interface Props {
  handleChangeEmail(v: string): void;
  handleChangePassword(v: string): void;
  form: LoginForm;
  handleLogin(): void;
  handleChangeRemember(): void;
  loading: boolean;
}

export default function Content({
  form,
  handleChangeEmail,
  handleChangePassword,
  handleLogin,
  handleChangeRemember,
  loading,
}: Props) {
  const passwordId = useId();
  const emailId = useId();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleLogin();
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-4 mb-5">
        <Section id={emailId} title="Email">
          <Input
            type="email"
            name="email"
            id={emailId}
            handleChange={handleChangeEmail}
            value={form.email}
            placeholder="Email"
          />
        </Section>

        <Section id={passwordId} title="Contraseña">
          <Input
            type="password"
            placeholder="Contraseña"
            id={passwordId}
            name="password"
            value={form.password}
            handleChange={handleChangePassword}
          />
        </Section>
      </div>

      <Session handleChangeRemember={handleChangeRemember} form={form} />

      <Button loading={loading} />
    </form>
  );
}
