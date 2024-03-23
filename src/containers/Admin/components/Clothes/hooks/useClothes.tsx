import { TableData } from "@containers/Admin/shared/components/Table/interfaces";
import { Clothe } from "@modules/product/domain";
import { useClotheServices } from "@modules/product/services";
import { useEffect, useMemo, useState } from "react";
import { CellActions, Name } from "../components";
import { DefaultCell } from "@containers/Admin/shared/components";
import { useModal } from "@containers/Admin/hooks";
import { useToast } from "@modules/app/modules/toast/hooks";

export default function useClothes() {
  const { getClothes, deleteClothe } = useClotheServices();
  const { handleOpenAddClothe: handleOpenAddClotheHook, handleOpenEditClothe } =
    useModal();
  const { success, error } = useToast();

  const [fetchLoading, setFetchLoading] = useState(false);
  const [clothes, setClothes] = useState<Array<Clothe>>([]);

  useEffect(() => {
    setFetchLoading(true);

    getClothes({
      onSuccess(data) {
        setClothes(data);
      },
      onFinally() {
        setFetchLoading(false);
      },
    });
  }, []);

  function handleDeleteClothe(id: string) {
    setClothes((prev) => prev.filter((c) => c.id !== id));

    deleteClothe({
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
      columns: ["Producto", "Precio", "Proveedor", "Acciones"],
      body: clothes.map((c) => {
        return [
          <Name name={c.name} image={c.image} key={c.id} />,
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
  }, [clothes]);

  function handleOpenAddClothe() {
    handleOpenAddClotheHook();
  }

  return { tableData, handleOpenAddClothe, fetchLoading };
}
