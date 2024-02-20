import { Logo as IconLogo } from "@modules/app/components";
import { APP_ROUTES } from "@modules/app/constants";
import Link from "next/link";

export default function Logo() {
  return (
    <section className="flex justify-start items-center">
      <Link href={APP_ROUTES.ROOT}>
        <IconLogo size={30} />
      </Link>
    </section>
  );
}
