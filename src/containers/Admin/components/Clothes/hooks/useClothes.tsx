import { TableData } from "@containers/Admin/shared/components/Table/interfaces";
import { Clothe } from "@modules/product/domain";
import { useProductServices } from "@modules/product/services";
import { useEffect, useMemo, useState } from "react";
import { Name } from "../components";
import { DefaultCell } from "@containers/Admin/shared/components";

export default function useClothes() {
  const { getClothes } = useProductServices();

  const [clothes, setClothes] = useState<Array<Clothe>>([]);

  useEffect(() => {
    getClothes().then((data) => setClothes(data));
  }, []);

  const tableData: TableData = useMemo(() => {
    return {
      columns: ["Producto", "Precio", "Proveedor"],
      body: clothes.map((c) => {
        return [
          <Name name={c.name} image={c.image} key={c.id} />,
          <DefaultCell key={c.id}>{c.priceStr}</DefaultCell>,
          <DefaultCell key={c.id}>{c.provider}</DefaultCell>,
        ];
      }),
    };
  }, [clothes]);

  return { tableData };
}
