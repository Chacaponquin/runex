import NextImage from "next/image";

interface Props {
  image: string;
  alt: string;
}

export default function Image({ alt, image }: Props) {
  return (
    <figure className="rounded flex min-w-[100px] max-w-[100px] esm:hidden">
      <NextImage
        src={image}
        alt={alt}
        width={100}
        height={150}
        className="object-cover rounded w-full"
      />
    </figure>
  );
}
