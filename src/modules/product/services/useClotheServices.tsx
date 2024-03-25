import { useFetch } from "@modules/app/modules/http/hooks";
import { CreateClotheDTO, EditClotheDTO } from "../dto/clothe";
import { API_ROUTES } from "@modules/app/constants";
import {
  FetchProps,
  PostProps,
  PutProps,
} from "@modules/app/modules/http/interfaces";
import { Clothe } from "../domain";
import { faker } from "@faker-js/faker";

function create() {
  return new Clothe({
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
export default function useClotheServices() {
  const { post, remove, put } = useFetch();

  function createClothe(props: PostProps<void, CreateClotheDTO>) {
    post<void, CreateClotheDTO>({
      ...props,
      url: API_ROUTES.CLOTHE.CREATE,
      body: props.body,
    });
  }

  function editClothe(props: PutProps<void, EditClotheDTO>) {
    put<void, EditClotheDTO>({
      ...props,
      url: API_ROUTES.CLOTHE.EDIT,
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

    if (props.onFinally) props.onFinally();
  }

  function findById(props: FetchProps<Clothe> & { id: string }): void {
    if (props.onSuccess) {
      props.onSuccess(create());
    }

    if (props.onFinally) props.onFinally();
  }

  return { createClothe, deleteClothe, getClothes, findById, editClothe };
}
