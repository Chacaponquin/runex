import { APP_ROUTES } from "@modules/app/constants";
import Link from "next/link";
import { Logo as IconLogo } from "@modules/app/components";

export default function Logo() {
  return (
    <section className="stroke-black">
      <Link href={APP_ROUTES.ROOT}>
        <IconLogo size={30} />
      </Link>
    </section>
  );
}
