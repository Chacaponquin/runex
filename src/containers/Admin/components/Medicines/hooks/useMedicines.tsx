"use client";

import {
  CheckCell,
  DefaultCell,
  ProductName,
} from "@containers/Admin/shared/components";
import { TableData } from "@containers/Admin/shared/components/Table/interfaces";
import { Medicine } from "@modules/product/domain";
import { useMedicineServices } from "@modules/product/services";
import { useEffect, useMemo, useState } from "react";
import { CellActions } from "../components";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useModal } from "@containers/Admin/hooks";
import { useSelectItems } from "@containers/Admin/shared/hooks";

export default function useMedicines() {
  const { deleteMedicine, getMedicines } = useMedicineServices();
  const { error, success } = useToast();
  const { handleOpenEditMedicine, handleOpenAddMedicine } = useModal();
  const { handleSelect, selectedItems, handleCleanItems } = useSelectItems();

  const [medicines, setMedicines] = useState<Array<Medicine>>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    getMedicines({
      body: { page: page },
      onSuccess(data) {
        setMedicines((prev) => [...prev, ...data]);
      },
      onFinally() {
        setLoading(false);
      },
    });
  }, [page]);

  function handleDeleteMedicine(id: string) {
    setMedicines((prev) => prev.filter((c) => c.id !== id));

    deleteMedicine({
      id: id,
      onSuccess() {
        success({ id: "delete-product", message: "Producto eliminado" });
      },
      onError() {
        error({ id: "delete-product", message: "Hubo un error al eliminar" });
      },
    });
  }

  function handleNextPage() {
    setPage((prev) => prev + 1);
  }

  function handleEditMedicine(id: string) {
    handleOpenEditMedicine(id);
  }

  function handleAddMedicine() {
    handleOpenAddMedicine();
  }

  const tableData: TableData = useMemo(() => {
    return {
      columns: ["", "Producto", "Precio", "Proveedor", "Acciones"],
      body: medicines.map((m) => {
        return [
          <CheckCell
            selected={selectedItems.includes(m.id)}
            handleSelect={(value) => handleSelect({ value: value, id: m.id })}
            key={m.id}
          />,
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
  }, [medicines, selectedItems]);

  function handleDeleteAll() {
    for (const id of selectedItems) {
      const found = medicines.find((m) => m.id === id);

      if (found) {
        deleteMedicine({
          id: id,
          onError() {
            error({
              id: "delete-product",
              message: `Error al eliminar el producto ${found.name}`,
            });
          },
        });
      }
    }

    setMedicines((prev) => prev.filter((m) => !selectedItems.includes(m.id)));
    handleCleanItems();
  }

  return {
    tableData,
    handleAddMedicine,
    loading,
    handleDeleteAll,
    selectedItems,
    handleNextPage,
  };
}
