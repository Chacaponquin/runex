import { APP_ROUTES } from "@modules/app/constants";
import { Cart } from "@modules/app/modules/icon/components";
import Link from "next/link";
import React from "react";

export default function Button() {
  return (
    <Link href={APP_ROUTES.SECTION.CLOTHES}>
      <button className="flex items-center gap-x-5 bg-black rounded-full px-8 py-3 stroke-white fill-white">
        <Cart size={26} white={true} />
        <p className="font-fontMedium text-xl text-white">Shop now</p>
      </button>
    </Link>
  );
}
