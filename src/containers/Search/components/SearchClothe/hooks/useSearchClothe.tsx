"use client";

import { useState } from "react";
import { Form, SearchClotheParams } from "../interfaces";
import { SearchFilterFunctionProps } from "@containers/Search/interfaces";
import { useClotheServices } from "@modules/product/services";
import { Colors, Sizes } from "@containers/Search/value-object";

interface Props {
  params: SearchClotheParams;
}

export default function useSearchClothe({ params }: Props) {
  const { filter } = useClotheServices();

  const [form, setForm] = useState<Form>({
    colors: new Colors(params.colors).value,
    sizes: new Sizes(params.sizes).value,
  });

  function filterFunction(props: SearchFilterFunctionProps) {
    filter({
      ...props,
      body: {
        colors: form.colors,
        sizes: form.colors,
        maxPrice: props.body.maxPrice,
        minPrice: props.body.minPrice,
        name: props.body.name,
        page: props.body.page,
        provider: props.body.provider,
      },
    });
  }

  function handleAddColor(color: string) {
    setForm((prev) => ({ ...prev, colors: [...prev.colors, color] }));
  }

  function handleAddSize(size: string) {
    setForm((prev) => ({ ...prev, sizes: [...prev.sizes, size] }));
  }

  return { filterFunction, form, handleAddColor, handleAddSize };
}
