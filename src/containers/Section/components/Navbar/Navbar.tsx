"use client";

import { Cart } from "@containers/Section/shared/components";
import { Buttons, Logo, Search } from "./components";
import { useNavbar } from "./hooks";
import { useBlockScroll, useScreen } from "@modules/shared/hooks";
import { SCREEN_SIZES } from "@modules/app/constants";

interface Props {
  query: string | undefined;
  handleChangeOpenCart(): void;
  openCart: boolean;
}

export default function Navbar({
  query,
  handleChangeOpenCart,
  openCart,
}: Props) {
  const { handleSearch, search, handleChangeSearch } = useNavbar({ query });

  const { bigScreen } = useScreen(SCREEN_SIZES.ESM);

  useBlockScroll(!bigScreen && openCart);

  return (
    <div className="flex items-center w-full h-[70px] justify-center z-30 px-4">
      <nav className="flex items-center max-w-[1200px] w-full justify-between">
        <Logo />

        <div className="flex items-center gap-x-6 esm:gap-x-4">
          <Search
            handleSearch={handleSearch}
            handleChange={handleChangeSearch}
            value={search}
          />
          <Buttons
            handleChangeOpenCart={handleChangeOpenCart}
            openCart={openCart}
          />
        </div>
      </nav>

      <div className="relative sm:hidden block">
        {openCart && (
          <Cart full={true} handleChangeOpenCart={handleChangeOpenCart} />
        )}
      </div>
    </div>
  );
}
