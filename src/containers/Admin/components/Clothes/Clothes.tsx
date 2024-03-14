"use client";

import { useClothes } from "./hooks";
import { Table } from "@containers/Admin/shared/components";

export default function Clothes() {
  const { tableData } = useClothes();

  return <Table data={tableData} header="Ropa" />;
}
