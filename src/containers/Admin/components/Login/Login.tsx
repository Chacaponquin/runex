"use client";

import { InputText } from "@modules/app/modules/form/components";
import { Buttons, Header, Section } from "./components";
import { useLogin } from "./hooks";

export default function Login() {
  const {
    form,
    handleSubmit,
    handleChangeUsername,
    handleChangePassword,
    loading,
  } = useLogin();

  return (
    <div className="flex h-svh w-full justify-center bg-gray-100 px-3 py-3 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white px-8 esm:px-6 py-6 esm:py-5 rounded-lg shadow-lg w-full max-w-[400px]"
      >
        <Header />

        <Section label="Usuario">
          <InputText
            name="admin-username"
            type="text"
            onChange={handleChangeUsername}
            placeholder="Usuario"
            size="lg"
            value={form.username}
          />
        </Section>

        <Section label="Contraseña">
          <InputText
            name="admin-password"
            onChange={handleChangePassword}
            placeholder="Password"
            type="password"
            size="lg"
            value={form.password}
          />
        </Section>

        <Buttons loading={loading} />
      </form>
    </div>
  );
}
