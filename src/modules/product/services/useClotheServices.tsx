import { useFetch } from "@modules/app/modules/http/hooks";
import { CreateClotheDTO } from "../dto/clothe";
import { API_ROUTES } from "@modules/app/constants";
import { PostProps } from "@modules/app/modules/http/interfaces/fetch";
import { UploadImageException } from "../exceptions";

export default function useClotheServices() {
  const { post, axiosInstance } = useFetch();

  async function uploadImages(images: Array<File>): Promise<void> {
    for (const image of images) {
      try {
        const form = new FormData();
        form.append("image", image);

        await axiosInstance.post(API_ROUTES.CLOTHE.UPLOAD_IMAGES, form);
      } catch (error) {
        throw new UploadImageException();
      }
    }
  }

  function createClothe(props: PostProps<void, CreateClotheDTO>) {
    post<void, CreateClotheDTO>({
      ...props,
      url: API_ROUTES.CLOTHE.CREATE,
      body: props.body,
    });
  }

  return { createClothe, uploadImages };
}
