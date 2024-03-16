"use client";

import { useState } from "react";
import { AddCLotheForm } from "../interfaces";
import { useProduct } from "@modules/product/hooks";

export default function useAddClothe() {
  const { providers } = useProduct();

  const [form, setForm] = useState<AddCLotheForm>({
    name: "",
    price: 0,
    provider: providers[0].name,
  });

  function handleChangeName(name: string) {
    setForm((prev) => ({ ...prev, name: name }));
  }

  function handleChangePrice(value: number) {
    setForm((prev) => ({ ...prev, price: value }));
  }

  function handleSave() {}

  function handleCancel() {}

  function handleChangeProvider(prov: string) {
    setForm((prev) => ({ ...prev, provider: prov }));
  }

  return {
    form,
    handleChangeName,
    handleChangePrice,
    handleCancel,
    handleSave,
    providers,
    handleChangeProvider,
  };
}
