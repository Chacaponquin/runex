"use client";

import { Order } from "@modules/order/domain";
import { useUserServices } from "@modules/user/services";
import { useEffect, useState } from "react";

export default function useOrders() {
  const { getOrders } = useUserServices();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getOrders({
      onFinally() {
        setLoading(false);
      },
      onSuccess(data) {
        setOrders(data);
      },
    });
  }, []);

  return { loading, orders };
}
