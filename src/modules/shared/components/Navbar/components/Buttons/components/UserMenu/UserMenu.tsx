"use client";

import { Cart, Favorite, Logout } from "@modules/app/modules/icon/components";
import { Button, Info, LinkButton, Section } from "./components";
import clsx from "clsx";
import { APP_ROUTES } from "@modules/app/constants";
import { useUser } from "@modules/user/hooks";
import { useRef } from "react";
import { useClickOutside } from "@modules/shared/hooks";

interface Props {
  email: string;
  firstName: string;
  lastName: string;
  handleClose(): void;
}

export default function UserMenu({
  email,
  firstName,
  lastName,
  handleClose,
}: Props) {
  const { handleSignOut } = useUser();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const CLASS = clsx(
    "max-w-[500px]",
    "flex flex-col",
    "bg-white",
    "absolute right-0",
    "translate-y-[40px]",
    "shadow-md",
    "rounded"
  );

  useClickOutside({ ref: wrapperRef, onClickOutside: handleClose });

  return (
    <div className={CLASS} ref={wrapperRef}>
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
