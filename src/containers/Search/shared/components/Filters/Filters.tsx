"use client";

import { useBlockScroll } from "@modules/shared/hooks";
import clsx from "clsx";
import { Buttons, Header, PriceInput } from "./components";
import { useFilters } from "./hooks";
import { useContext } from "react";
import { SearchContext } from "@containers/Search/contexts";
import Section from "../Section/Section";
import { Select } from "@modules/app/modules/form/components";
import { Order } from "@modules/product/value-object";

interface Props {
  children: React.ReactNode;
}

export default function Filters({ children }: Props) {
  useBlockScroll(true);

  const { handleCloseFilters } = useContext(SearchContext);

  const {
    form,
    handleSubmitForm,
    handleChangePriceMax,
    handleChangePriceMin,
    handleChangeOrder,
    orderSelect,
  } = useFilters();

  const CLASS = clsx(
    "flex justify-center items-center",
    "p-4",
    "fixed top-0 left-0",
    "h-screen w-full",
    "bg-black/50",
    "z-50"
  );

  const FORM_CLASS = clsx(
    "flex flex-col",
    "bg-white",
    "w-full max-w-[600px] h-max max-h-full",
    "rounded",
    "sm:px-10 px-7 py-4",
    "overflow-y-auto"
  );

  return (
    <div className={CLASS} onClick={handleCloseFilters}>
      <form
        className={FORM_CLASS}
        onSubmit={handleSubmitForm}
        onClick={(e) => e.stopPropagation()}
      >
        <Header />

        <div className="flex flex-col gap-y-5 w-full mb-7">
          {orderSelect && (
            <Section title="Ordenar">
              <Select
                options={Order.options}
                labelKey="name"
                value={orderSelect.url}
                valueKey="url"
                placeholder="Ordenar"
                onChange={handleChangeOrder}
              />
            </Section>
          )}

          <Section title="Precios">
            <PriceInput
              priceMax={form.maxPrice}
              priceMin={form.minPrice}
              handleChangePriceMax={handleChangePriceMax}
              handleChangePriceMin={handleChangePriceMin}
            />
          </Section>

          {children}
        </div>

        <Buttons />
      </form>
    </div>
  );
}
