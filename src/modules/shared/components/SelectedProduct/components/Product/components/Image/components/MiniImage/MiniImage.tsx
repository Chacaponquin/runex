import clsx from "clsx";
import NextImage from "next/image";
import { Fragment } from "react";

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
    <Fragment>
      <button onClick={handleClick} className={CLASS}>
        <NextImage
          src={image}
          alt={alt}
          width={200}
          height={200}
          className="object-cover rounded"
        />
      </button>
    </Fragment>
  );
}
