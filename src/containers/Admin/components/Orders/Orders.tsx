"use client";

import { Table } from "@containers/Admin/shared/components";
import { useOrders } from "./hooks";

export default function Orders() {
  const { tableData } = useOrders();

  return (
    <div className="w-full overflow-auto">
      <Table header="Orders" data={tableData} />
    </div>
  );
}
