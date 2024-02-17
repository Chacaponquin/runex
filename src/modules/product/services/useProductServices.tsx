import { faker } from "@faker-js/faker";
import { Product } from "../domain";

interface AddProductFavoriteProps {
  productId: string;
  userId: string;
}

export default function useProductServices() {
  async function getPopularProducts(): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return new Product({
        id: faker.string.uuid(),
        name: faker.commerce.product(),
        price: Number(faker.commerce.price()),
        images: Array.from({
          length: faker.number.int({ min: 1, max: 5 }),
        }).map(() => faker.image.url()),
      });
    });

    return products;
  }

  async function getTrendingProducts(): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return new Product({
        id: faker.string.uuid(),
        name: faker.commerce.product(),
        price: Number(faker.commerce.price()),
        images: Array.from({
          length: faker.number.int({ min: 1, max: 5 }),
        }).map(() => faker.image.url()),
      });
    });

    return products;
  }

  async function getNewProducts(): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return new Product({
        id: faker.string.uuid(),
        name: faker.commerce.product(),
        price: Number(faker.commerce.price()),
        images: Array.from({
          length: faker.number.int({ min: 1, max: 5 }),
        }).map(() => faker.image.url()),
      });
    });

    return products;
  }

  async function addProductToFavorites(props: AddProductFavoriteProps) {}

  async function getProductById(id: string): Promise<Product> {
    return new Product({
      id: faker.string.uuid(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      images: Array.from({
        length: faker.number.int({ min: 1, max: 5 }),
      }).map(() => faker.image.url()),
    });
  }

  async function getSimilarProducts(id: string): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return new Product({
        id: faker.string.uuid(),
        name: faker.commerce.product(),
        price: Number(faker.commerce.price()),
        images: Array.from({
          length: faker.number.int({ min: 1, max: 5 }),
        }).map(() => faker.image.url()),
      });
    });

    return products;
  }

  return {
    getPopularProducts,
    getTrendingProducts,
    getNewProducts,
    addProductToFavorites,
    getProductById,
    getSimilarProducts,
  };
}
