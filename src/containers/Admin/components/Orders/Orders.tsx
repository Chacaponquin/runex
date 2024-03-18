"use client";

import { Table } from "@containers/Admin/shared/components";
import { useOrders } from "./hooks";
import { Fragment } from "react";

export default function Orders() {
  const { tableData } = useOrders();

  return (
    <div className="w-full overflow-auto">
      <Table header="Orders" data={tableData} actions={<Fragment></Fragment>} />
    </div>
  );
}
