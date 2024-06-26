import { APP_ROUTES } from "@modules/app/constants";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col mb-7">
      <h1 className="text-5xl font-fontBold mb-3 mt-3 esm:text-4xl esm:mb-3">
        Crea una cuenta
      </h1>

      <p className="text-gray-800 text-lg">
        Ya tienes una cuenta?{" "}
        <Link
          href={APP_ROUTES.AUTH.LOGIN}
          className="text-blue-400 hover:underline-offset-4 hover:underline"
        >
          Inicia sesión
        </Link>
      </p>
    </header>
  );
}
