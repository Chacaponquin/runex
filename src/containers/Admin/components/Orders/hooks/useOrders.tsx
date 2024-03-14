"use client";

import { DefaultCell } from "@containers/Admin/shared/components";
import { TableData } from "@containers/Admin/shared/components/Table/interfaces";
import { Order } from "@modules/order/domain";
import { useOrderServices } from "@modules/order/services";
import { useEffect, useMemo, useState } from "react";
import { Completed } from "../components";

export default function useOrders() {
  const { getOrders } = useOrderServices();

  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    getOrders().then((data) => setOrders(data));
  }, []);

  const tableData: TableData = useMemo(() => {
    return {
      columns: ["Cliente", "Cantidad", "Completada", "Tipo de pago"],

      body: orders.map((o) => {
        return [
          <DefaultCell key={o.id}>{o.client}</DefaultCell>,
          <DefaultCell key={o.id}>{o.amount}</DefaultCell>,
          <Completed key={o.id} completed={o.completed} />,
          <DefaultCell key={o.id}>{o.paymentType}</DefaultCell>,
        ];
      }),
    };
  }, [orders]);

  return { tableData };
}
