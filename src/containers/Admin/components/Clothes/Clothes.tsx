"use client";

import { useClothes } from "./hooks";
import { Table } from "@containers/Admin/shared/components";
import { Actions } from "./components";

export default function Clothes() {
  const { tableData, handleOpenAddClothe, fetchLoading } = useClothes();

  return (
    <Table
      data={tableData}
      header="Ropa"
      actions={<Actions handleOpenAddClothe={handleOpenAddClothe} />}
      loading={fetchLoading}
    />
  );
}
