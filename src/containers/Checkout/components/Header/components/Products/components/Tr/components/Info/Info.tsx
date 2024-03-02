import { Image as ProductImage } from "./components";

interface Props {
  name: string;
  image: string;
}

export default function Info({ image, name }: Props) {
  return (
    <td>
      <article className="flex gap-x-5 items-center px-4 py-2.5">
        <ProductImage image={image} alt={name} />

        <div>
          <h1 className="font-fontMedium text-base esm:text-sm">{name}</h1>
        </div>
      </article>
    </td>
  );
}
