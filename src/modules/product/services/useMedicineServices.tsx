import { faker } from "@faker-js/faker";
import { Medicine } from "../domain";
import { FetchProps, PutProps } from "@modules/app/modules/http/interfaces";
import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import { EditMedicineDTO } from "../dto/medicine";

function create(): Medicine {
  return new Medicine({
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
    provider: "Amazon",
  });
}

export default function useMedicineServices() {
  const { put, remove } = useFetch();

  function findById(props: FetchProps<Medicine> & { id: string }): void {
    if (props.onSuccess) {
      props.onSuccess(create());
    }

    if (props.onFinally) props.onFinally();
  }

  function editMedicine(props: PutProps<void, EditMedicineDTO>) {
    put<void, EditMedicineDTO>({
      ...props,
      url: API_ROUTES.MEDICINE.EDIT,
      body: props.body,
    });
  }

  function deleteMedicine(props: FetchProps<undefined> & { id: string }) {
    remove({ ...props, url: API_ROUTES.MEDICINE.REMOVE(props.id) });
  }

  function getMedicines(props: FetchProps<Array<Medicine>>) {
    if (props.onSuccess) {
      props.onSuccess(Array.from({ length: 20 }).map(() => create()));
    }

    if (props.onFinally) props.onFinally();
  }

  return {
    findById,
    editMedicine,
    deleteMedicine,
    getMedicines,
  };
}
