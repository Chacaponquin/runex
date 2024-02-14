"use client";

import { Buttons, Logo, Search } from "./components";
import { useNavbar } from "./hooks";

export default function Navbar() {
  const {
    handleChangeOpenCart,
    openCart,
    handleChangeOpenFavorites,
    handleChangeOpenUserOptions,
    openFavorites,
    openUserOptions,
  } = useNavbar();

  return (
    <div className="flex items-center w-full py-3 justify-center border-b-[2px] border-gray-100">
      <nav className="flex items-center max-w-[1200px] w-full justify-between">
        <Logo />
        <Search />
        <Buttons
          handleChangeOpenCart={handleChangeOpenCart}
          openCart={openCart}
          handleChangeOpenFavorites={handleChangeOpenFavorites}
          handleChangeOpenUserOptions={handleChangeOpenUserOptions}
          openFavorites={openFavorites}
          openUserOptions
        />
      </nav>
    </div>
  );
}
