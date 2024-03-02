"use client";

import { useProduct } from "@modules/product/hooks";
import { useEffect, useState } from "react";
import { Form } from "../interfaces";
import { FilterForm } from "../../../interfaces";
import { ProductColor, ProductSize } from "@modules/product/domain";
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
  const { getAllProductsColors, getAllProductsSizes } = useProductServices();
  const { providers } = useProduct();

  const [colorOptions, setColorOptions] = useState<Array<ProductColor>>([]);
  const [sizeOptions, setSizeOptions] = useState<Array<ProductSize>>([]);

  useEffect(() => {
    getAllProductsColors().then((data) => {
      setColorOptions(data);
    });

    getAllProductsSizes().then((data) => {
      setSizeOptions(data);
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

  const providerOptions: Array<ProviderOption> = providers.map((p, index) => ({
    id: String(index),
    name: p.name,
  }));

  return { form, handleSubmitForm, providerOptions, colorOptions, sizeOptions };
}
