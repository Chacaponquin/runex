import { faker } from "@faker-js/faker";
import { Order } from "../domain";

export default function useOrderServices() {
  async function getOrders(): Promise<Array<Order>> {
    return Array.from({ length: 10 }).map(() => {
      return new Order({
        id: faker.string.uuid(),
        amount: faker.number.float({ min: 10, max: 1000 }),
        client: faker.person.fullName(),
        completed: faker.datatype.boolean(),
        date: faker.date.past(),
        paymentType: "Hola",
      });
    });
  }

  return { getOrders };
}
