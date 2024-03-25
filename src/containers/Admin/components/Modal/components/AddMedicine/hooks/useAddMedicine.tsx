"use client";

import { useMedicineForm } from "../../../shared/hooks";

export default function useAddMedicine() {
  const { form, handleSubmit, ...rest } = useMedicineForm();

  function handleAdd() {}

  return { form, handleAdd, ...rest };
}
