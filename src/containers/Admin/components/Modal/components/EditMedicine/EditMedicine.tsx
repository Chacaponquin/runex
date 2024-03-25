import { Modal } from "@containers/Admin/shared/components";
import { Buttons, Header, MedicineForm } from "../../shared/components";
import { useEditMedicine } from "./hooks";

interface Props {
  id: string;
}

export default function EditMedicine({ id }: Props) {
  const { loading, fetchLoading, handleEdit, ...rest } = useEditMedicine({
    id: id,
  });

  return (
    <Modal
      loading={fetchLoading}
      handleSubmit={handleEdit}
      className="flex flex-col"
    >
      <Header text="Editar Medicina" />
      <MedicineForm {...rest} />
      <Buttons loading={loading} />
    </Modal>
  );
}
