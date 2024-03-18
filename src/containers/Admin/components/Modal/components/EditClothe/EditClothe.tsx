"use client";

import { Modal } from "@containers/Admin/shared/components";
import { useEditClothe } from "./hooks";
import { Buttons, ClotheForm, Header } from "../../shared/components";
import { Loading } from "./components";
import { Fragment } from "react";

interface Props {
  id: string;
}

export default function EditClothe({ id }: Props) {
  const { handleEdit, editLoading, fetchLoading, ...rest } = useEditClothe({
    id: id,
  });

  return (
    <Fragment>
      {fetchLoading ? (
        <Loading />
      ) : (
        <Modal className="flex flex-col" max={1100} handleSubmit={handleEdit}>
          <Header text="Editar Ropa" />
          <ClotheForm {...rest} />
          <Buttons loading={editLoading} />
        </Modal>
      )}
    </Fragment>
  );
}
