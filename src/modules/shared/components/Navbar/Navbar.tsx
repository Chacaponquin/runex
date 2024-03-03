"use client";

import { Cart } from "@containers/Section/shared/components";
import { Buttons, Logo, Menu, Search } from "./components";
import { useNavbar } from "./hooks";
import { useBlockScroll, useScreen } from "@modules/shared/hooks";
import { SCREEN_SIZES } from "@modules/app/constants";

interface Props {
  query?: string;
}

export default function Navbar({ query }: Props) {
  const {
    handleSearch,
    search,
    handleChangeSearch,
    handleCloseSide,
    handleOpenSide,
    openSide,
    openCart,
    handleChangeOpenCart,
    links,
    handleChangeOpenUserMenu,
    openUserMenu,
  } = useNavbar({ query });

  const { bigScreen } = useScreen(SCREEN_SIZES.ESM);

  useBlockScroll(!bigScreen && openCart);

  return (
    <div className="flex items-center w-full h-[70px] justify-center z-30 px-5">
      <nav className="flex items-center max-w-[1200px] w-full justify-between">
        <Logo
          openSide={openSide}
          handleOpenSide={handleOpenSide}
          handleCloseSide={handleCloseSide}
        />

        <div className="flex items-center gap-x-6 esm:gap-x-4">
          {!query && (
            <Search
              handleSearch={handleSearch}
              handleChange={handleChangeSearch}
              value={search}
            />
          )}

          <Buttons
            handleChangeOpenCart={handleChangeOpenCart}
            openCart={openCart}
            openUserMenu={openUserMenu}
            handleChangeOpenUserMenu={handleChangeOpenUserMenu}
            isSearch={query ? true : false}
          />
        </div>
      </nav>

      <div className="relative sm:hidden block">
        {openCart && (
          <Cart full={true} handleChangeOpenCart={handleChangeOpenCart} />
        )}
      </div>

      <Menu
        openMenu={openSide}
        handleCloseSide={handleCloseSide}
        links={links}
      />
    </div>
  );
}
