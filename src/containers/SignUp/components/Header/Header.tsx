import { APP_ROUTES } from "@modules/app/constants";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col mb-7">
      <h2 className="uppercase font-fontSemiBold text-xl text-gray-400 esm:text-lg">
        Start for free
      </h2>

      <h1 className="text-5xl font-fontBold mb-5 mt-3 esm:text-4xl esm:mb-3">
        Create new account
      </h1>

      <p className="text-gray-400">
        Already have a account?{" "}
        <Link
          href={APP_ROUTES.AUTH.LOGIN}
          className="text-blue-400 hover:underline-offset-4 hover:underline"
        >
          Log in
        </Link>
      </p>
    </header>
  );
}
