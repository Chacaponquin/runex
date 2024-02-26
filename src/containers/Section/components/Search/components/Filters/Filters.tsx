"use client";

import { useBlockScroll } from "@modules/shared/hooks";
import clsx from "clsx";
import { Buttons, Header, PriceInput, Section } from "./components";
import { FilterForm } from "../../interfaces";
import { useFilters } from "./hooks";
import { useId } from "react";
import { Select } from "@modules/app/modules/form/components";

interface Props {
  handleClose(): void;
  filters: FilterForm;
  handleSubmit(): void;
}

export default function Filters({ handleClose, filters, handleSubmit }: Props) {
  useBlockScroll(true);

  const { form, handleSubmitForm, providerOptions, colorOptions, sizeOptions } =
    useFilters({
      handleSubmit: handleSubmit,
      filters: filters,
    });

  const CLASS = clsx(
    "flex justify-center items-center",
    "p-4",
    "fixed top-0 left-0",
    "h-screen w-full",
    "bg-black/50",
    "z-50"
  );

  const selectId = useId();
  const colorId = useId();
  const sizeId = useId();

  return (
    <div className={CLASS} onClick={handleClose}>
      <form
        className="bg-white rounded px-10 esm:px-7 py-4 w-full max-w-[600px] flex flex-col"
        onSubmit={handleSubmitForm}
        onClick={(e) => e.stopPropagation()}
      >
        <Header />

        <div className="flex flex-col gap-y-5 w-full mb-7">
          <Section title="Color">
            <Select
              options={colorOptions}
              labelKey="name"
              valueKey="color"
              placeholder="Color"
              id={colorId}
              value={form.color}
            />
          </Section>

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

          <Section title="Talla">
            <Select
              options={sizeOptions}
              labelKey="name"
              valueKey="name"
              placeholder="Talla"
              value={form.size}
              id={sizeId}
            />
          </Section>

          <Section title="Precios">
            <PriceInput priceMax={form.priceMax} priceMin={form.priceMin} />
          </Section>
        </div>

        <Buttons handleClose={handleClose} />
      </form>
    </div>
  );
}
