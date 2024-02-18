"use client";

import { Cart } from "@containers/Section/shared/components";
import { Buttons, Logo, Search } from "./components";
import { useNavbar } from "./hooks";

interface Props {
  query: string | undefined;
}

export default function Navbar({ query }: Props) {
  const {
    handleChangeOpenCart,
    openCart,
    handleChangeOpenFavorites,
    handleChangeOpenUserOptions,
    openFavorites,
    openUserOptions,
    handleSearch,
    search,
    handleChangeSearch,
  } = useNavbar({ query });

  return (
    <div className="flex items-center w-full h-[70px] esm:h-[60px] justify-center border-b-[2px] border-gray-100 z-30 px-4">
      <nav className="flex items-center max-w-[1200px] w-full justify-between">
        <Logo />
        <Search
          handleSearch={handleSearch}
          handleChange={handleChangeSearch}
          value={search}
        />
        <Buttons
          handleChangeOpenCart={handleChangeOpenCart}
          openCart={openCart}
          handleChangeOpenFavorites={handleChangeOpenFavorites}
          handleChangeOpenUserOptions={handleChangeOpenUserOptions}
          openFavorites={openFavorites}
          openUserOptions={openUserOptions}
        />
      </nav>

      <div className="relative xl:hidden block">
        {openCart && <Cart full={true} />}
      </div>
    </div>
  );
}
