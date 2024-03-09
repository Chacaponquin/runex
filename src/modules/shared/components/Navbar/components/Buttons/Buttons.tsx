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
  isSearch: boolean;
}

export default function Buttons({ handleChangeOpenCart, isSearch }: Props) {
  const { actualUser } = useUser();

  return (
    <section className="flex gap-x-7 esm:gap-x-5 items-center stroke-black">
      {!isSearch && (
        <LinkButton
          icon={Search}
          link={APP_ROUTES.SECTION.SEARCH_CLOTHES}
          className="lg:hidden"
        />
      )}

      <Button icon={Bag} handleClick={handleChangeOpenCart} />

      <LinkButton icon={Favorite} link={APP_ROUTES.USER.FAVORITES} />

      <LinkButton
        icon={User}
        link={actualUser ? APP_ROUTES.USER.ORDERS : APP_ROUTES.AUTH.LOGIN}
      />
    </section>
  );
}
