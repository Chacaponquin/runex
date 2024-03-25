"use client";

import { Modal } from "@containers/Admin/shared/components";
import { useEditClothe } from "./hooks";
import { Buttons, ClotheForm, Header } from "../../shared/components";

interface Props {
  id: string;
}

export default function EditClothe({ id }: Props) {
  const { handleEdit, editLoading, fetchLoading, ...rest } = useEditClothe({
    id: id,
  });

  return (
    <Modal
      className="flex flex-col"
      loading={fetchLoading}
      handleSubmit={handleEdit}
    >
      <Header text="Editar Ropa" />
      <ClotheForm {...rest} />
      <Buttons loading={editLoading} />
    </Modal>
  );
}
