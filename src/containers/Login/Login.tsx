"use client";

import { Form, Image as LoginImage } from "./components";
import { useLogin } from "./hooks";

export default function Login() {
  const {
    form,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    handleChangeRemember,
    loading,
  } = useLogin();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
      <Form
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        form={form}
        handleLogin={handleLogin}
        handleChangeRemember={handleChangeRemember}
        loading={loading}
      />

      <LoginImage />
    </div>
  );
}
