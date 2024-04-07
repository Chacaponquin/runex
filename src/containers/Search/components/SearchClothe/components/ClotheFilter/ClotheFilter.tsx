"use client";

import { Filters, Section } from "@containers/Search/shared/components";
import { Select } from "@modules/app/modules/form/components";
import { useClotheFilter } from "./hooks";
import { useId } from "react";
import { Form } from "../../interfaces";

interface Props {
  form: Form;
}

export default function ClotheFilter({ form }: Props) {
  const colorId = useId();
  const sizeId = useId();

  const { colorOptions, sizeOptions } = useClotheFilter();

  return (
    <Filters>
      <Section title="Color">
        <Select
          options={colorOptions}
          labelKey="name"
          valueKey="color"
          placeholder="Color"
          id={colorId}
          value={form.colors[0]}
        />
      </Section>

      <Section title="Talla">
        <Select
          options={sizeOptions}
          labelKey="name"
          valueKey="name"
          placeholder="Talla"
          value={form.sizes[0]}
          id={sizeId}
        />
      </Section>
    </Filters>
  );
}
