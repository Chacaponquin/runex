"use client";

import {
  Bag,
  Favorite,
  Search,
  User,
} from "@modules/app/modules/icon/components";
import { Button, LinkButton, UserMenu } from "./components";
import { Cart } from "@containers/Section/shared/components";
import { APP_ROUTES } from "@modules/app/constants";
import { useUser } from "@modules/user/hooks";

interface Props {
  handleChangeOpenCart(): void;
  handleChangeOpenUserMenu(): void;
  openCart: boolean;
  openUserMenu: boolean;
}

export default function Buttons({
  handleChangeOpenCart,
  openCart,
  handleChangeOpenUserMenu,
  openUserMenu,
}: Props) {
  const { actualUser } = useUser();

  return (
    <section className="flex gap-x-7 esm:gap-x-5 items-center stroke-black">
      <LinkButton
        icon={Search}
        link={APP_ROUTES.SECTION.SEARCH_CLOTHES}
        className="lg:hidden"
      />

      <Button icon={Bag} handleClick={handleChangeOpenCart}>
        {openCart && (
          <Cart full={false} handleChangeOpenCart={handleChangeOpenCart} />
        )}
      </Button>

      <LinkButton icon={Favorite} link={APP_ROUTES.USER.FAVORITES} />

      {actualUser ? (
        <Button icon={User} handleClick={handleChangeOpenUserMenu}>
          {openUserMenu && <UserMenu />}
        </Button>
      ) : (
        <LinkButton icon={User} link={APP_ROUTES.AUTH.LOGIN} />
      )}
    </section>
  );
}
