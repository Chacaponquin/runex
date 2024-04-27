"use client";

import { Cart, Favorite, Logout } from "@modules/app/modules/icon/components";
import { Button, Info, LinkButton, Section } from "./components";
import clsx from "clsx";
import { APP_ROUTES } from "@modules/app/constants";
import { useUser } from "@modules/user/hooks";

interface Props {
  email: string;
  firstName: string;
  lastName: string;
}

export default function UserMenu({ email, firstName, lastName }: Props) {
  const { handleSignOut } = useUser();

  const CLASS = clsx(
    "max-w-[500px]",
    "flex flex-col",
    "bg-white",
    "absolute right-0",
    "translate-y-[40px]",
    "shadow-md",
    "rounded"
  );

  return (
    <div className={CLASS}>
      <Section border="bottom">
        <Info first={firstName} last={lastName} email={email} />
      </Section>

      <Section border="bottom">
        <LinkButton link={APP_ROUTES.USER.ORDERS} text="Pedidos" icon={Cart} />
        <LinkButton
          link={APP_ROUTES.USER.FAVORITES}
          text="Favoritos"
          icon={Favorite}
        />
      </Section>

      <Button icon={Logout} text="Cerrar sesión" handleClick={handleSignOut} />
    </div>
  );
}
