"use client";

import { Order } from "../domain/Order";
import { FetchProps } from "@modules/app/modules/http/interfaces";
import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import { RespOrderDTO } from "../dto";

export default function useOrderServices() {
  const { get } = useFetch();

  function map(d: RespOrderDTO): Order {
    return new Order({
      id: d.id,
      amount: d.amount,
      client: "",
      completed: false,
      date: new Date(),
      paymentType: "Hola",
    });
  }

  function getOrders(props: FetchProps<Order[]>): void {
    get<RespOrderDTO[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(data.map((d) => map(d)));
        }
      },
      url: API_ROUTES.ORDER.GET,
    });
  }

  return { getOrders, map };
}
