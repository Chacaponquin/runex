import { APP_ROUTES } from "@modules/app/constants";
import { Search } from "@modules/app/modules/icon/components";
import Link from "next/link";

export default function Buttons() {
  return (
    <section className="xl:flex hidden items-center stroke-black justify-end gap-x-7">
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
    </section>
  );
}
