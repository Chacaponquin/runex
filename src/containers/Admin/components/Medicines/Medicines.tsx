"use client";

import {
  Table,
  TableProductActions,
} from "@containers/Admin/shared/components";
import { useMedicines } from "./hooks";

export default function Medicines() {
  const {
    handleDeleteAll,
    tableData,
    handleAddMedicine,
    loading,
    selectedItems,
    handleNextPage,
  } = useMedicines();

  return (
    <Table
      data={tableData}
      header="Medicinas"
      actions={
        <TableProductActions
          handleAdd={handleAddMedicine}
          deleteDisable={selectedItems.length === 0}
          handleDeleteAll={handleDeleteAll}
        />
      }
      loading={loading}
      handleNext={handleNextPage}
    />
  );
}
