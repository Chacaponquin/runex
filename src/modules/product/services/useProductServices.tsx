import { faker } from "@faker-js/faker";
import { Product, ProductSize } from "../domain";
import { FetchProps, PostProps } from "@modules/app/modules/http/interfaces";
import { API_ROUTES } from "@modules/app/constants";
import { UploadImageException } from "../exceptions";
import { useFetch } from "@modules/app/modules/http/hooks";

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
    }).map(() => {
      return {
        source: faker.image.url(),
        id: faker.string.uuid(),
        name: faker.lorem.words(),
        size: faker.number.int(),
      };
    }),
    category: faker.helpers.arrayElement(["Zapatos"]),
  });
}

export default function useProductServices() {
  const { instance } = useFetch();

  async function uploadImages(images: Array<File>): Promise<Array<string>> {
    const all = [] as Array<string>;

    for (const image of images) {
      try {
        const form = new FormData();
        form.append("image", image);

        const response = await instance.post(
          API_ROUTES.CLOTHE.UPLOAD_IMAGES,
          form
        );

        all.push(response.data[0]);
      } catch (error) {
        throw new UploadImageException();
      }
    }

    return all;
  }

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

  function addProductToFavorites({}: PostProps<
    void,
    AddProductFavoriteProps
  >) {}

  function deleteProductInFavorites({}: PostProps<
    void,
    DeleteProductFavoriteProps
  >) {}

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

  function filterProducts(
    props: PostProps<Array<Product>, FilterProductsProps>
  ): void {
    const products: Array<Product> = Array.from({ length: 25 }).map(() =>
      create()
    );

    if (props.onSuccess) props.onSuccess(products);
    if (props.onFinally) props.onFinally();
  }

  function getAllProductsSizes(props: FetchProps<Array<ProductSize>>): void {
    if (props.onSuccess)
      props.onSuccess([
        { name: "S" },
        { name: "L" },
        { name: "XL" },
        { name: "2XL" },
      ]);

    if (props.onFinally) props.onFinally();
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
    uploadImages,
  };
}
