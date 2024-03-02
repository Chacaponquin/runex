import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

export default function Product({ image, name }: Props) {
  return (
    <article className="flex flex-col">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="object-cover w-full rounded-lg"
      />
    </article>
  );
}
