"use client";

import { faker } from "@faker-js/faker";
import { Order } from "../domain";
import { FetchProps } from "@modules/app/modules/http/interfaces";
import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import { RespOrderDTO } from "../dto";

export default function useOrderServices() {
  const { get } = useFetch();

  function getOrders(props: FetchProps<Order[]>): void {
    get<RespOrderDTO[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(
            data.map((d) => {
              return new Order({
                id: d.id,
                amount: d.amount,
                client: faker.person.fullName(),
                completed: faker.datatype.boolean(),
                date: faker.date.past(),
                paymentType: "Hola",
              });
            })
          );
        }
      },
      url: API_ROUTES.ORDER.GET,
    });
  }

  return { getOrders };
}
