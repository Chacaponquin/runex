import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: { src: string; alt: string };
}

export default function Advantage({ title, description, image }: Props) {
  const CLASS = clsx(
    "flex lg:flex-col esm:flex-col flex-row xl:items-start items-center",
    "lg:py-6 py-3 esm:py-4 px-5",
    "xl:gap-x-0 gap-x-3",
    "rounded",
    "border-[2px] border-blue-500"
  );

  return (
    <article className={CLASS}>
      <Image
        src={image.src}
        alt={image.alt}
        width={300}
        height={200}
        className="lg:mb-6 esm:mb-5 w-full object-contain h-[200px] esm:h-[160px]"
      />

      <footer className="flex flex-col">
        <h1 className="mb-2 font-fontMedium text-2xl text-center">{title}</h1>
        <p className="text-center text-base text-gray-500">{description}</p>
      </footer>
    </article>
  );
}
