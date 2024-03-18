import Image from "next/image";
import { Info } from "./components";
import { ProductImage } from "@modules/product/domain";

interface Props {
  name: string;
  source: string;
  handleDelete(): void;
  size: number;
}

export default function Card({ name, source, size, handleDelete }: Props) {
  return (
    <article className="flex justify-between items-center gap-x-4 text-gray-500 text-sm">
      <section className="flex items-center gap-x-4">
        <figure>
          <Image
            width={55}
            height={55}
            alt={name}
            src={source}
            className="object-cover w-[55px] h-[55px] rounded"
          />
        </figure>

        <p>{name}</p>
      </section>

      <Info handleDelete={handleDelete} size={size} />
    </article>
  );
}
