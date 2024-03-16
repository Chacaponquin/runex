import Image from "next/image";
import { Info } from "./components";

interface Props {
  image: File;
  handleDelete(): void;
}

export default function Card({ image, handleDelete }: Props) {
  const source = URL.createObjectURL(image);

  return (
    <article className="flex justify-between items-center gap-x-4 text-gray-500 text-sm">
      <section className="flex items-center gap-x-4">
        <figure>
          <Image
            width={55}
            height={55}
            alt={image.name}
            src={source}
            className="object-cover w-[55px] h-[55px] rounded"
          />
        </figure>

        <p>{image.name}</p>
      </section>

      <Info handleDelete={handleDelete} size={image.size} />
    </article>
  );
}
