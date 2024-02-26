import { faker } from "@faker-js/faker";
import { Product, ProductColor, ProductSize } from "../domain";

interface AddProductFavoriteProps {
  productId: string;
  userId: string;
}

type FilterProductsProps = Partial<{
  name: string;
  minPrice: number;
  maxPrice: number;
  provider: string;
  page: number;
}>;

function create(): Product {
  return new Product({
    id: faker.string.uuid(),
    name: faker.lorem.words({ min: 4, max: 10 }),
    price: Number(faker.commerce.price()),
    images: Array.from({
      length: faker.number.int({ min: 1, max: 5 }),
    }).map(() => faker.image.url()),
  });
}

export default function useProductServices() {
  async function getPopularProducts(): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return create();
    });

    return products;
  }

  async function getTrendingProducts(): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return create();
    });

    return products;
  }

  async function getNewProducts(): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return create();
    });

    return products;
  }

  async function addProductToFavorites(props: AddProductFavoriteProps) {}

  async function getProductById(id: string): Promise<Product> {
    return create();
  }

  async function getSimilarProducts(id: string): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return create();
    });

    return products;
  }

  async function filterProducts(
    props: FilterProductsProps
  ): Promise<Array<Product>> {
    const products: Array<Product> = Array.from({ length: 25 }).map(() =>
      create()
    );

    return products;
  }

  async function getAllProductsColors(): Promise<Array<ProductColor>> {
    return [
      { name: "Orange", color: "#f0932b" },
      { color: "#6ab04c", name: "Green" },
      { name: "Red", color: "#eb4d4b" },
      { name: "Black", color: "#2d3436" },
    ];
  }

  async function getAllProductsSizes(): Promise<Array<ProductSize>> {
    return [{ name: "S" }, { name: "L" }, { name: "XL" }, { name: "2XL" }];
  }

  return {
    getPopularProducts,
    getTrendingProducts,
    getNewProducts,
    addProductToFavorites,
    getProductById,
    getSimilarProducts,
    filterProducts,
    getAllProductsColors,
    getAllProductsSizes,
  };
}
