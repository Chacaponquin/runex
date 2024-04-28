import { FAQ } from "@containers/Landing/interfaces";
import { useEffect, useState } from "react";

export default function useFAQ() {
  const [faq, setFaq] = useState<FAQ[]>([]);

  useEffect(() => {
    setFaq(
      Array.from({ length: 10 }).map(() => {
        return {
          question: "Lorem ipsum dolor sit amet",
          response:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est dolore consectetur voluptatibus doloremque maiores culpa distinctio deserunt perspiciatis nobis quod harum, eveniet ducimus velit iusto libero ipsa labore mollitia.",
        };
      })
    );
  }, []);

  return { faq };
}
