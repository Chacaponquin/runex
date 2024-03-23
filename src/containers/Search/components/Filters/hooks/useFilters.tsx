"use client";

import { useClothes, useProduct } from "@modules/product/hooks";
import { useEffect, useState } from "react";
import { Form } from "../interfaces";
import { FilterForm } from "../../../interfaces";
import { ProductSize } from "@modules/product/domain";
import { useProductServices } from "@modules/product/services";

interface Props {
  handleSubmit(): void;
  filters: FilterForm;
}

interface ProviderOption {
  id: string;
  name: string;
}

export default function useFilters({ handleSubmit, filters }: Props) {
  const { getAllProductsSizes } = useProductServices();
  const { providers } = useClothes();
  const { colors } = useProduct();

  const [sizeOptions, setSizeOptions] = useState<Array<ProductSize>>([]);

  useEffect(() => {
    getAllProductsSizes({
      onSuccess(data) {
        setSizeOptions(data);
      },
    });
  }, []);

  const [form, setForm] = useState<Form>({
    provider: filters.provider,
    color: filters.color,
    size: filters.size,
    priceMax: filters.maxPrice,
    priceMin: filters.minPrice,
  });

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    handleSubmit();
  }

  function handleChangePriceMin(value: number) {
    setForm((prev) => ({ ...prev, priceMin: value }));
  }

  function handleChangePriceMax(value: number) {
    setForm((prev) => ({ ...prev, priceMax: value }));
  }

  const providerOptions: Array<ProviderOption> = providers.map((p, index) => ({
    id: String(index),
    name: p.name,
  }));

  return {
    form,
    handleSubmitForm,
    providerOptions,
    colorOptions: colors,
    sizeOptions,
    handleChangePriceMax,
    handleChangePriceMin,
  };
}
