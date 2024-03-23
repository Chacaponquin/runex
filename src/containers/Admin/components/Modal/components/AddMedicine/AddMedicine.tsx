import { Modal } from "@containers/Admin/shared/components";
import { useAddMedicine } from "./hooks";
import { Buttons, Header, MedicineForm } from "../../shared/components";

export default function AddMedicine() {
  const { handleAdd, loading, ...rest } = useAddMedicine();

  return (
    <Modal max={1100} handleSubmit={handleAdd} className="flex flex-col">
      <Header text="Añadir Medicamento" />
      <MedicineForm {...rest} />
      <Buttons loading={loading} />
    </Modal>
  );
}
