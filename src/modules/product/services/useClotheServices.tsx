import { useFetch } from "@modules/app/modules/http/hooks";
import { CreateClotheDTO } from "../dto/clothe";
import { API_ROUTES } from "@modules/app/constants";
import { FetchProps, PostProps } from "@modules/app/modules/http/interfaces";
import { UploadImageException } from "../exceptions";
import { Clothe } from "../domain";
import { faker } from "@faker-js/faker";

function create() {
  return new Clothe({
    id: faker.string.uuid(),
    name: faker.lorem.words({ min: 4, max: 10 }),
    price: Number(faker.commerce.price()),
    images: Array.from({
      length: faker.number.int({ min: 1, max: 5 }),
    }).map(() => faker.image.url()),
    category: faker.helpers.arrayElement(["Zapatos"]),
  });
}
export default function useClotheServices() {
  const { post, axiosInstance, remove } = useFetch();

  async function uploadImages(images: Array<File>): Promise<Array<string>> {
    const all = [] as Array<string>;

    for (const image of images) {
      try {
        const form = new FormData();
        form.append("image", image);

        const response = await axiosInstance.post(
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

  function createClothe(props: PostProps<void, CreateClotheDTO>) {
    post<void, CreateClotheDTO>({
      ...props,
      url: API_ROUTES.CLOTHE.CREATE,
      body: props.body,
    });
  }

  function deleteClothe(props: FetchProps<undefined>) {
    remove({ ...props, url: API_ROUTES.CLOTHE.REMOVE });
  }

  function getClothes(props: FetchProps<Array<Clothe>>): void {
    if (props.onSuccess) {
      props.onSuccess(Array.from({ length: 20 }).map(() => create()));
    }
  }

  function findById(props: FetchProps<Clothe> & { id: string }): void {
    if (props.onSuccess) {
      props.onSuccess(create());
    }

    if (props.onFinally) props.onFinally();
  }

  return { createClothe, uploadImages, deleteClothe, getClothes, findById };
}
