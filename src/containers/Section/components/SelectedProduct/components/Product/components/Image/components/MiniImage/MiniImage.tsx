import clsx from "clsx";
import NextImage from "next/image";

interface Props {
  handleClick(): void;
  image: string;
  alt: string;
  selected: boolean;
}

export default function MiniImage({
  handleClick,
  alt,
  image,
  selected,
}: Props) {
  const CLASS = clsx("rounded", { "outline outline-blue-500": selected });

  return (
    <button onClick={handleClick} className={CLASS}>
      <NextImage
        src={image}
        alt={alt}
        width={200}
        height={200}
        className="object-cover rounded"
      />
    </button>
  );
}
