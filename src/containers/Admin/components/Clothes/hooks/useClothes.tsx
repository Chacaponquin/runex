import { TableData } from "@containers/Admin/shared/components/Table/interfaces";
import { Clothe } from "@modules/product/domain";
import { useClotheServices } from "@modules/product/services";
import { useEffect, useMemo, useState } from "react";
import { CellActions } from "../components";
import {
  CheckCell,
  DefaultCell,
  ProductName,
} from "@containers/Admin/shared/components";
import { useModal } from "@containers/Admin/hooks";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useSelectItems } from "@containers/Admin/shared/hooks";

export default function useClothes() {
  const { getClothes, deleteClothe } = useClotheServices();
  const { handleOpenAddClothe: handleOpenAddClotheHook, handleOpenEditClothe } =
    useModal();
  const { success, error } = useToast();
  const { handleSelect, selectedItems, handleCleanItems } = useSelectItems();

  const [fetchLoading, setFetchLoading] = useState(false);
  const [clothes, setClothes] = useState<Array<Clothe>>([]);
  const [page] = useState(1);

  useEffect(() => {
    setFetchLoading(true);

    getClothes({
      body: { page: page },
      onSuccess(data) {
        setClothes(data);
      },
      onFinally() {
        setFetchLoading(false);
      },
    });
  }, [page]);

  function handleDeleteClothe(id: string) {
    setClothes((prev) => prev.filter((c) => c.id !== id));

    deleteClothe({
      id: id,
      onSuccess() {
        success({ id: "delete-product", message: "Producto eliminado" });
      },
      onError() {
        error({ id: "delete-product", message: "Hubo un error al eliminar" });
      },
    });
  }

  function handleEditClothe(id: string) {
    handleOpenEditClothe(id);
  }

  const tableData: TableData = useMemo(() => {
    return {
      columns: ["", "Producto", "Precio", "Proveedor", "Acciones"],
      body: clothes.map((c) => {
        return [
          <CheckCell
            key={c.id}
            selected={selectedItems.includes(c.id)}
            handleSelect={(value) => handleSelect({ id: c.id, value: value })}
          />,
          <ProductName name={c.name} image={c.image} key={c.id} />,
          <DefaultCell key={c.id}>{c.priceStr}</DefaultCell>,
          <DefaultCell key={c.id}>{c.provider}</DefaultCell>,
          <CellActions
            key={c.id}
            handleDelete={() => handleDeleteClothe(c.id)}
            handleEdit={() => handleEditClothe(c.id)}
          />,
        ];
      }),
    };
  }, [clothes, selectedItems]);

  function handleOpenAddClothe() {
    handleOpenAddClotheHook();
  }

  function handleDeleteAll() {
    for (const id of selectedItems) {
      const found = clothes.find((m) => m.id === id);

      if (found) {
        deleteClothe({
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

    setClothes((prev) => prev.filter((m) => !selectedItems.includes(m.id)));
    handleCleanItems();
  }

  return {
    tableData,
    handleOpenAddClothe,
    fetchLoading,
    handleDeleteAll,
    selectedItems,
  };
}
