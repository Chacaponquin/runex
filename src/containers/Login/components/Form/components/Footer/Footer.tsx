import { APP_ROUTES } from "@modules/app/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-base flex text-center justify-center">
      No tienes una cuenta?{" "}
      <Link href={APP_ROUTES.AUTH.SIGN_UP}>
        <span className="text-blue-500 ml-2 hover:underline hover:underline-offset-4">
          Regístrate aquí
        </span>
      </Link>
    </footer>
  );
}
