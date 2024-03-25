"use client";

import { Table } from "@containers/Admin/shared/components";
import { useMedicines } from "./hooks";
import { Actions } from "./components";

export default function Medicines() {
  const { tableData, handleAddMedicine, loading } = useMedicines();

  return (
    <Table
      data={tableData}
      header="Medicinas"
      actions={<Actions handleAdd={handleAddMedicine} />}
      loading={loading}
    />
  );
}
