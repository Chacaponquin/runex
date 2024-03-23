import { faker } from "@faker-js/faker";
import { Product, ProductSize } from "../domain";
import { FetchProps } from "@modules/app/modules/http/interfaces";

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
    category: faker.helpers.arrayElement(["Zapatos"]),
  });
}

export default function useProductServices() {
  function getPopularProducts(props: FetchProps<Array<Product>>): void {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return create();
    });

    if (props.onSuccess) {
      props.onSuccess(products);
    }
  }

  function getTrendingProducts(props: FetchProps<Array<Product>>): void {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return create();
    });

    if (props.onSuccess) {
      props.onSuccess(products);
    }
  }

  function getNewProducts(props: FetchProps<Array<Product>>): void {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return create();
    });

    if (props.onSuccess) {
      props.onSuccess(products);
    }
  }

  async function addProductToFavorites(props: AddProductFavoriteProps) {}

  async function deleteProductInFavorites(props: DeleteProductFavoriteProps) {}

  function getProductById(props: FetchProps<Product> & { id: string }): void {
    if (props.onSuccess) props.onSuccess(create());
    if (props.onFinally) props.onFinally();
  }

  function getSimilarProducts(
    props: FetchProps<Array<Product>> & { id: string }
  ): void {
    const products: Array<Product> = Array.from({ length: 4 }).map(() => {
      return create();
    });

    if (props.onSuccess) props.onSuccess(products);
    if (props.onFinally) props.onFinally();
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
  };
}
