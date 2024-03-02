import { APP_ROUTES } from "@modules/app/constants";
import Link from "next/link";
import { Logo as IconLogo } from "@modules/app/components";
import { Menu } from "@modules/app/modules/icon/components";

interface Props {
  openSide: boolean;
  handleOpenSide(): void;
  handleCloseSide(): void;
}

export default function Logo({
  handleCloseSide,
  handleOpenSide,
  openSide,
}: Props) {
  return (
    <section className="stroke-black flex gap-x-4">
      <button
        className="lg:hidden block"
        onClick={openSide ? handleCloseSide : handleOpenSide}
      >
        <Menu size={20} />
      </button>

      <Link href={APP_ROUTES.ROOT}>
        <IconLogo size={30} />
      </Link>
    </section>
  );
}
