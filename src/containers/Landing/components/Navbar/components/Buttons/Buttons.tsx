import { APP_ROUTES } from "@modules/app/constants";
import { Search } from "@modules/app/modules/icon/components";
import Link from "next/link";
import React from "react";

export default function Buttons() {
  return (
    <section className="flex items-center stroke-black justify-end gap-x-7 py-2">
      <button className="mr-2">
        <Search size={22} />
      </button>

      <Link href={APP_ROUTES.AUTH.LOGIN}>
        <button className="font-fontMedium">Login</button>
      </Link>

      <Link href={APP_ROUTES.AUTH.SIGN_UP}>
        <button className="py-2.5 rounded-full font-fontMedium bg-blue-500 text-white px-5">
          Sign up
        </button>
      </Link>
    </section>
  );
}
