"use client";

import { Empty, Header } from "../../shared/components";
import { Card, Loading, OrderModal } from "./components";
import { useOrders } from "./hooks";

export default function Orders() {
  const { loading, orders, handleCloseOrder, handleOpenOrder, openOrder } =
    useOrders();

  const empty = !loading && orders.length === 0;

  return (
    <div className="flex flex-col">
      <OrderModal open={openOrder} handleClose={handleCloseOrder} />

      {!empty && <Header text="Pedidos" />}
      {empty && <Empty text="Todavía no haz hecho ninguna orden" />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 lg:gap-y-3 gap-y-3">
        {loading && <Loading />}

        {orders.map((o) => (
          <Card key={o.id} order={o} handleOpen={() => handleOpenOrder(o)} />
        ))}
      </div>
    </div>
  );
}
