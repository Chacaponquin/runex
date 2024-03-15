"use client";

import { useState } from "react";
import { AddCLotheForm } from "../interfaces";

export default function useAddClothe() {
  const [form, setForm] = useState<AddCLotheForm>({ name: "", price: 0 });

  function handleChangeName(name: string) {
    setForm((prev) => ({ ...prev, name: name }));
  }

  function handleChangePrice(value: number) {
    setForm((prev) => ({ ...prev, price: value }));
  }

  return { form, handleChangeName, handleChangePrice };
}
