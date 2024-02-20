import { LoginForm } from "@containers/Login/interfaces";
import { Content, Footer, Header } from "./components";

interface Props {
  handleChangeEmail(v: string): void;
  handleChangePassword(v: string): void;
  form: LoginForm;
  handleLogin(): void;
  handleChangeRemember(): void;
  loading: boolean;
}

export default function Form({
  handleChangeEmail,
  handleChangePassword,
  form,
  handleLogin,
  handleChangeRemember,
  loading,
}: Props) {
  return (
    <section className="flex flex-col h-full w-full items-center justify-center px-8 py-4">
      <main className="flex flex-col w-full max-w-[500px]">
        <Header />

        <Content
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          form={form}
          handleLogin={handleLogin}
          handleChangeRemember={handleChangeRemember}
          loading={loading}
        />

        <Footer />
      </main>
    </section>
  );
}
