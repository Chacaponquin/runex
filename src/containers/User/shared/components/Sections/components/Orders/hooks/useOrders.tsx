"use client";

import { UserOrder } from "@modules/order/domain";
import { useUserServices } from "@modules/user/services";
import { useEffect, useState } from "react";

export default function useOrders() {
  const { getOrders } = useUserServices();

  const [openOrder, setOpenOrder] = useState<UserOrder | null>(null);
  const [orders, setOrders] = useState<UserOrder[]>([]);
  const [loading, setLoading] = useState(false);

  function handleCloseOrder() {
    setOpenOrder(null);
  }

  function handleOpenOrder(order: UserOrder) {
    setOpenOrder(order);
  }

  useEffect(() => {
    setLoading(true);

    getOrders({
      onFinally() {
        setLoading(false);
      },
      onSuccess(data) {
        setOrders(data);
      },
      onError() {
        setOrders([]);
      },
    });
  }, []);

  return { loading, orders, openOrder, handleCloseOrder, handleOpenOrder };
}
