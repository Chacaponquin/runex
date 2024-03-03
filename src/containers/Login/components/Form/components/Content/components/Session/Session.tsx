import { APP_ROUTES } from "@modules/app/constants";
import Link from "next/link";
import { Remember } from "./components";
import { LoginForm } from "@containers/Login/interfaces";

interface Props {
  form: LoginForm;
  handleChangeRemember(): void;
}

export default function Session({ handleChangeRemember, form }: Props) {
  return (
    <section className="flex justify-between items-center mb-8">
      <Remember remember={form.remember} handleChange={handleChangeRemember} />

      <Link
        href={APP_ROUTES.AUTH.FORGOT_PASSWORD}
        className="hover:underline hover:underline-offset-4 text-blue-500 text-sm"
      >
        Olvidaste tu contraeña?
      </Link>
    </section>
  );
}
