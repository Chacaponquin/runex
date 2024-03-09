import { FAQ } from "@containers/Landing/interfaces";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

export default function useFAQ() {
  const [faq, setFaq] = useState<Array<FAQ>>([]);

  useEffect(() => {
    setFaq(
      Array.from({ length: 10 }).map(() => {
        return {
          id: faker.string.uuid(),
          question: faker.lorem.sentence(),
          response: faker.lorem.paragraph(),
        };
      })
    );
  }, []);

  return { faq };
}
