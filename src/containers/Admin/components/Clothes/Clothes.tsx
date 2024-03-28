"use client";

import { useClothes } from "./hooks";
import {
  Table,
  TableProductActions,
} from "@containers/Admin/shared/components";

export default function Clothes() {
  const {
    tableData,
    handleOpenAddClothe,
    fetchLoading,
    handleDeleteAll,
    selectedItems,
  } = useClothes();

  return (
    <Table
      data={tableData}
      header="Ropa"
      actions={
        <TableProductActions
          handleAdd={handleOpenAddClothe}
          handleDeleteAll={handleDeleteAll}
          deleteDisable={selectedItems.length === 0}
        />
      }
      loading={fetchLoading}
    />
  );
}
