"use client";

import { Buttons, Cart, Logo, Menu, Search } from "./components";
import { useNavbar } from "./hooks";
import clsx from "clsx";

interface Props {
  query?: string;
  disableSearch: boolean;
  fixed: boolean;
}

export default function Navbar({ query, disableSearch, fixed }: Props) {
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
  } = useNavbar({ query });

  const CLASS = clsx(
    "flex items-center justify-center",
    "w-full h-[70px]",
    "px-5",
    "z-30",
    "bg-white",

    { "fixed top-0 left-0": fixed }
  );

  return (
    <div className={CLASS}>
      <nav className="flex items-center max-w-[1200px] w-full justify-between">
        <Logo
          openSide={openSide}
          handleOpenSide={handleOpenSide}
          handleCloseSide={handleCloseSide}
        />

        <section className="flex items-center gap-x-6 esm:gap-x-4">
          {!disableSearch && !query && (
            <Search
              handleSearch={handleSearch}
              handleChange={handleChangeSearch}
              value={search}
            />
          )}

          <Buttons
            handleChangeOpenCart={handleChangeOpenCart}
            isSearch={query ? true : false}
          />
        </section>
      </nav>

      {openCart && <Cart handleChangeOpenCart={handleChangeOpenCart} />}

      {openSide && (
        <Menu
          openMenu={openSide}
          handleCloseSide={handleCloseSide}
          links={links}
        />
      )}
    </div>
  );
}
