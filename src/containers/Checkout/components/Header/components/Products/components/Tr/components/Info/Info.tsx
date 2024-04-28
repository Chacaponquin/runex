import { Image as ProductImage } from "./components";

interface Props {
  name: string;
  image: string;
  quantity: number;
}

export default function Info({ image, name, quantity }: Props) {
  return (
    <td>
      <article className="flex gap-x-5 items-center px-4 py-2.5">
        <ProductImage image={image} alt={name} />

        <div>
          <h1 className="font-fontMedium text-base esm:text-sm">
            {name} <span className="text-gray-400">(X{quantity})</span>
          </h1>
        </div>
      </article>
    </td>
  );
}
