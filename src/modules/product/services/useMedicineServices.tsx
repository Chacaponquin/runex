import { faker } from "@faker-js/faker";
import { Medicine } from "../domain";
import { FetchProps } from "@modules/app/modules/http/interfaces";

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
  });
}

export default function useMedicineServices() {
  function findById(props: FetchProps<Medicine> & { id: string }): void {
    if (props.onSuccess) {
      props.onSuccess(create());
    }

    if (props.onFinally) props.onFinally();
  }

  return { findById };
}
