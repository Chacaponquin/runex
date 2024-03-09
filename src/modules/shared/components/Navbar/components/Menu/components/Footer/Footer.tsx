import { APP_ROUTES } from "@modules/app/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-3 w-full flex items-center gap-x-10 justify-center">
      <Link href={APP_ROUTES.AUTH.LOGIN}>
        <button className="font-fontMedium hover:underline hover:underline-offset-4">
          Login
        </button>
      </Link>

      <Link href={APP_ROUTES.AUTH.SIGN_UP}>
        <button className="py-2.5 rounded-full font-fontMedium bg-blue-500 text-white px-5 whitespace-nowrap hover:underline hover:underline-offset-4">
          Sign up
        </button>
      </Link>
    </footer>
  );
}
