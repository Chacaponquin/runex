import { faker } from "@faker-js/faker";
import { Product } from "../domain";

export default function useProductServices() {
  async function getPopularProducts(): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return new Product({
        id: faker.string.uuid(),
        name: faker.commerce.product(),
        price: Number(faker.commerce.price()),
        image: faker.image.url(),
      });
    });

    return products;
  }

  return { getPopularProducts };
}
