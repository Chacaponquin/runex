"use client";

import { Table } from "@containers/Admin/shared/components";
import { useOrders } from "./hooks";
import { Fragment } from "react";

export default function Orders() {
  const { tableData, loading, handleNextPage } = useOrders();

  return (
    <div className="w-full overflow-auto">
      <Table
        header="Orders"
        data={tableData}
        loading={loading}
        handleNext={handleNextPage}
        actions={<Fragment></Fragment>}
      />
    </div>
  );
}
