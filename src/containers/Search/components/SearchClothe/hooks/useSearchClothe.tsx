"use client";

import { useState } from "react";
import { Form } from "../interfaces";
import { SearchFilterFunctionProps } from "@containers/Search/interfaces";
import { useClotheServices } from "@modules/product/services";
import { useRouter } from "next/navigation";
import { SearchClotheParams } from "@modules/product/interfaces/params";
import { Colors, Providers, Sizes } from "@modules/product/value-object";
import { ClotheParamsUrl } from "@modules/product/domain";

interface Props {
  params: SearchClotheParams;
}

export default function useSearchClothe({ params }: Props) {
  const { filter } = useClotheServices();
  const router = useRouter();

  const [form, setForm] = useState<Form>({
    colors: new Colors().toValue(params.colors),
    sizes: new Sizes().toValue(params.sizes),
    providers: new Providers().toValue(params.providers),
  });

  function filterFunction(props: SearchFilterFunctionProps) {
    const filters = {
      colors: form.colors,
      sizes: form.sizes,
      maxPrice: props.body.maxPrice,
      minPrice: props.body.minPrice,
      name: props.body.name,
      page: props.body.page,
      providers: form.providers,
      order: props.body.order,
    };

    filter({
      ...props,
      body: filters,
    });

    const url = new ClotheParamsUrl().build(filters);

    router.push(url);
  }

  function handleAddColor(color: string) {
    setForm((prev) => ({ ...prev, colors: [...prev.colors, color] }));
  }

  function handleAddSize(size: string) {
    setForm((prev) => ({ ...prev, sizes: [...prev.sizes, size] }));
  }

  function handleDeleteSize(s: string) {
    setForm((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((size) => size !== s),
    }));
  }

  function handleDeleteColor(c: string) {
    setForm((prev) => ({
      ...prev,
      sizes: prev.colors.filter((color) => color !== c),
    }));
  }

  function handleAddProvider(p: string) {
    setForm((prev) => ({ ...prev, providers: [...prev.providers, p] }));
  }

  function handleDeleteProvider(p: string) {
    setForm((prev) => ({
      ...prev,
      providers: prev.providers.filter((prov) => prov !== p),
    }));
  }

  return {
    filterFunction,
    form,
    handleAddColor,
    handleAddSize,
    handleDeleteColor,
    handleDeleteSize,
    handleDeleteProvider,
    handleAddProvider,
  };
}
