"use client";

import { useBlockScroll } from "@modules/shared/hooks";
import clsx from "clsx";
import { Buttons, Header, PriceInput } from "./components";
import { useFilters } from "./hooks";
import { useContext, useId } from "react";
import { Select } from "@modules/app/modules/form/components";
import { SearchContext } from "@containers/Search/contexts";
import Section from "../Section/Section";

interface Props {
  children: React.ReactNode;
}

export default function Filters({ children }: Props) {
  useBlockScroll(true);

  const { handleCloseFilters } = useContext(SearchContext);

  const {
    form,
    handleSubmitForm,
    providerOptions,
    handleChangePriceMax,
    handleChangePriceMin,
  } = useFilters();

  const CLASS = clsx(
    "flex justify-center items-center",
    "p-4",
    "fixed top-0 left-0",
    "h-screen w-full",
    "bg-black/50",
    "z-50"
  );

  const selectId = useId();

  return (
    <div className={CLASS} onClick={handleCloseFilters}>
      <form
        className="bg-white rounded px-10 esm:px-7 py-4 w-full max-w-[600px] flex flex-col"
        onSubmit={handleSubmitForm}
        onClick={(e) => e.stopPropagation()}
      >
        <Header />

        <div className="flex flex-col gap-y-5 w-full mb-7">
          <Section title="Tienda">
            <Select
              options={providerOptions}
              labelKey="name"
              valueKey="id"
              placeholder="Tienda"
              value={form.provider}
              id={selectId}
            />
          </Section>

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
