import { PostProps } from "@modules/app/modules/http/interfaces";
import { API_ROUTES } from "@modules/app/constants";
import { UploadImageException } from "../exceptions";
import { useFetch } from "@modules/app/modules/http/hooks";
import { RespProductDTO } from "../dto/product";
import { Product } from "../domain";

interface AddProductFavoriteProps {
  productId: string;
  userId: string;
}

interface DeleteProductFavoriteProps {
  productId: string;
  userId: string;
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

  function addProductToFavorites({}: PostProps<
    void,
    AddProductFavoriteProps
  >) {}

  function deleteProductInFavorites({}: PostProps<
    void,
    DeleteProductFavoriteProps
  >) {}

  function map(d: RespProductDTO): Product {
    return new Product({
      id: d.id,
      categories: d.categories,
      images: d.images,
      name: d.name,
      price: d.price,
      provider: d.provider,
      type: d.type,
    });
  }

  return {
    addProductToFavorites,
    deleteProductInFavorites,
    uploadImages,
    map,
  };
}
