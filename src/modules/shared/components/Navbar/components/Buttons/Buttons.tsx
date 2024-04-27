"use client";

import {
  Bag,
  Favorite,
  Search,
  User,
} from "@modules/app/modules/icon/components";
import { Button, LinkButton, MenuButton, UserMenu } from "./components";
import { APP_ROUTES } from "@modules/app/constants";
import { useUser } from "@modules/user/hooks";
import { useButtons } from "./hooks";

interface Props {
  handleChangeOpenCart(): void;
  isSearch: boolean;
}

export default function Buttons({ handleChangeOpenCart, isSearch }: Props) {
  const { actualUser, fetchUserLoading } = useUser();
  const { openUserMenu, handleChangeOpenUserMenu } = useButtons();

  return (
    <section className="flex gap-x-7 esm:gap-x-5 items-center stroke-black">
      {!isSearch && (
        <LinkButton
          icon={Search}
          link={APP_ROUTES.SECTION.SEARCH_CLOTHES}
          className="lg:hidden"
          disabled={false}
        />
      )}

      <Button icon={Bag} handleClick={handleChangeOpenCart} />

      <LinkButton
        icon={Favorite}
        link={APP_ROUTES.USER.FAVORITES}
        disabled={false}
      />

      {!actualUser && (
        <LinkButton
          icon={User}
          link={APP_ROUTES.AUTH.LOGIN}
          disabled={fetchUserLoading}
        />
      )}

      {actualUser && (
        <MenuButton icon={User} handleClick={handleChangeOpenUserMenu}>
          {openUserMenu && (
            <UserMenu
              email={actualUser.email}
              firstName={actualUser.firstName}
              lastName={actualUser.lastName}
            />
          )}
        </MenuButton>
      )}
    </section>
  );
}
