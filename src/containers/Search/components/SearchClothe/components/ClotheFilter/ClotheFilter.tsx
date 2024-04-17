"use client";

import { Filters, Section } from "@containers/Search/shared/components";
import { useClotheFilter } from "./hooks";
import { Form } from "../../interfaces";
import { MultiSelect } from "@containers/Search/shared/components/Filters/shared/components";

interface Props {
  form: Form;
  handleAddColor(o: string): void;
  handleAddSize(o: string): void;
  handleDeleteColor(o: string): void;
  handleDeleteSize(o: string): void;
  handleDeleteProvider(p: string): void;
  handleAddProvider(p: string): void;
}

export default function ClotheFilter({
  form,
  handleAddColor,
  handleAddSize,
  handleDeleteColor,
  handleDeleteSize,
  handleAddProvider,
  handleDeleteProvider,
}: Props) {
  const {
    colorOptions,
    sizeOptions,
    providerOptions,
    colorsLoading,
    providersLoading,
    sizesLoading,
  } = useClotheFilter();

  return (
    <Filters>
      <Section title="Tienda">
        <MultiSelect
          options={providerOptions.map((p) => p.name)}
          handleDelete={handleDeleteProvider}
          handleSelect={handleAddProvider}
          selected={form.providers}
          loading={providersLoading}
        />
      </Section>

      <Section title="Color">
        <MultiSelect
          options={colorOptions.map((c) => c.name)}
          handleDelete={handleDeleteColor}
          handleSelect={handleAddColor}
          selected={form.colors}
          loading={colorsLoading}
        />
      </Section>

      <Section title="Talla">
        <MultiSelect
          options={sizeOptions.map((s) => s.name)}
          handleDelete={handleDeleteSize}
          handleSelect={handleAddSize}
          selected={form.sizes}
          loading={sizesLoading}
        />
      </Section>
    </Filters>
  );
}
