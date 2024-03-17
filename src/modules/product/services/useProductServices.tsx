import { faker } from "@faker-js/faker";
import { Clothe, Product, ProductColor, ProductSize } from "../domain";

interface AddProductFavoriteProps {
  productId: string;
  userId: string;
}

interface DeleteProductFavoriteProps {
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
  async function getClothes(): Promise<Array<Clothe>> {
    return Array.from({ length: 20 }).map(() => {
      return new Clothe({
        id: faker.string.uuid(),
        name: faker.lorem.words({ min: 4, max: 10 }),
        price: Number(faker.commerce.price()),
        images: Array.from({
          length: faker.number.int({ min: 1, max: 5 }),
        }).map(() => faker.image.url()),
      });
    });
  }

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

  async function deleteProductInFavorites(props: DeleteProductFavoriteProps) {}

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
    getAllProductsSizes,
    deleteProductInFavorites,
    getClothes,
  };
}
