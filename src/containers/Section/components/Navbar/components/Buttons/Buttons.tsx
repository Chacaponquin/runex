"use client";

import {
  Cart as CartIcon,
  Favorite,
  User,
} from "@modules/app/modules/icon/components";
import { Button } from "./components";
import { Cart } from "@containers/Section/shared/components";

interface Props {
  handleChangeOpenCart(): void;
  openCart: boolean;
  handleChangeOpenFavorites(): void;
  handleChangeOpenUserOptions(): void;
  openFavorites: boolean;
  openUserOptions: boolean;
}

export default function Buttons({
  handleChangeOpenCart,
  openCart,
  handleChangeOpenFavorites,
  handleChangeOpenUserOptions,
}: Props) {
  return (
    <section className="xl:flex gap-x-7 items-center stroke-black hidden">
      <Button icon={User} handleClick={handleChangeOpenUserOptions} />
      <Button icon={Favorite} handleClick={handleChangeOpenFavorites} />
      <Button icon={CartIcon} handleClick={handleChangeOpenCart}>
        {openCart && <Cart full={false} />}
      </Button>
    </section>
  );
}
