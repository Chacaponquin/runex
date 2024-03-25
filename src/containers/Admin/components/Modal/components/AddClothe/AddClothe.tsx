"use client";

import { Modal } from "@containers/Admin/shared/components";
import { useAddClothe } from "./hooks";
import { Buttons, ClotheForm, Header } from "../../shared/components";

export default function AddClothe() {
  const { handleSave, loading, ...rest } = useAddClothe();

  return (
    <Modal className="flex flex-col" loading={false} handleSubmit={handleSave}>
      <Header text="Añadir Ropa" />
      <ClotheForm {...rest} />
      <Buttons loading={loading} />
    </Modal>
  );
}
