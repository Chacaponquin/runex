"use client";

import { DefaultCell } from "@containers/Admin/shared/components";
import { TableData } from "@containers/Admin/shared/components/Table/interfaces";
import { Order } from "@modules/order/domain";
import { useOrderServices } from "@modules/order/services";
import { useEffect, useMemo, useState } from "react";
import { Completed } from "../components";

export default function useOrders() {
  const { getOrders } = useOrderServices();

  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    getOrders({
      onSuccess(data) {
        setOrders((prev) => [...prev, ...data]);
      },
      onFinally() {
        setLoading(false);
      },
    });
  }, [page]);

  function handleNextPage() {
    setPage((prev) => prev + 1);
  }

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

  return { tableData, loading, handleNextPage };
}
