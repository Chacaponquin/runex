"use client";

import { DefaultCell, ProductName } from "@containers/Admin/shared/components";
import { TableData } from "@containers/Admin/shared/components/Table/interfaces";
import { Medicine } from "@modules/product/domain";
import { useMedicineServices } from "@modules/product/services";
import { useEffect, useMemo, useState } from "react";
import { CellActions } from "../components";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useModal } from "@containers/Admin/hooks";

export default function useMedicines() {
  const { deleteMedicine, getMedicines } = useMedicineServices();
  const { error, success } = useToast();
  const { handleOpenEditMedicine, handleOpenAddMedicine } = useModal();

  const [medicines, setMedicines] = useState<Array<Medicine>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMedicines({
      onSuccess(data) {
        setMedicines(data);
      },
      onFinally() {
        setLoading(true);
      },
    });
  }, []);

  function handleDeleteMedicine(id: string) {
    setMedicines((prev) => prev.filter((c) => c.id !== id));

    deleteMedicine({
      onSuccess() {
        success({ id: "delete-product", message: "Producto eliminado" });
      },
      onError() {
        error({ id: "delete-product", message: "Hubo un error al eliminar" });
      },
    });
  }

  function handleEditMedicine(id: string) {
    handleOpenEditMedicine(id);
  }

  function handleAddMedicine() {
    handleOpenAddMedicine();
  }

  const tableData: TableData = useMemo(() => {
    return {
      columns: ["Producto", "Precio", "Proveedor", "Acciones"],
      body: medicines.map((m) => {
        return [
          <ProductName name={m.name} image={m.image} key={m.id} />,
          <DefaultCell key={m.id}>{m.priceStr}</DefaultCell>,
          <DefaultCell key={m.id}>{m.provider}</DefaultCell>,
          <CellActions
            key={m.id}
            handleDelete={() => handleDeleteMedicine(m.id)}
            handleEdit={() => handleEditMedicine(m.id)}
          />,
        ];
      }),
    };
  }, [medicines]);

  return { tableData, handleAddMedicine, loading };
}
