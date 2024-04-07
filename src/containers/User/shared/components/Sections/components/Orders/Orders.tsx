"use client";

import { Empty, Header } from "../../shared/components";
import { useOrders } from "./hooks";

export default function Orders() {
  const { loading, orders } = useOrders();

  const empty = !loading && orders.length === 0;

  return (
    <div className="flex flex-col">
      {!empty && <Header text="Órdenes" />}

      {empty && <Empty text="Todavía no haz hecho ninguna orden" />}
    </div>
  );
}
