"use client";

import { Bag, Favorite, User } from "@modules/app/modules/icon/components";
import { Button } from "./components";
import { Cart } from "@containers/Section/shared/components";
import { useUser } from "@modules/user/hooks";

interface Props {
  handleChangeOpenCart(): void;
  openCart: boolean;
}

export default function Buttons({ handleChangeOpenCart, openCart }: Props) {
  const { actualUser } = useUser();

  return (
    <section className="flex gap-x-7 esm:gap-x-5 items-center stroke-black">
      <Button icon={Bag} handleClick={handleChangeOpenCart}>
        {openCart && (
          <Cart full={false} handleChangeOpenCart={handleChangeOpenCart} />
        )}
      </Button>

      {actualUser && <Button icon={Favorite} />}

      <Button icon={User} />
    </section>
  );
}
