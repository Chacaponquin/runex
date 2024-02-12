import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: { src: string; alt: string };
}

export default function Advantage({ title, description, image }: Props) {
  return (
    <article className="flex flex-col py-6 px-5 border-[2px] rounded border-blue-500 transition-all duration-300">
      <Image
        src={image.src}
        alt={image.alt}
        width={300}
        height={200}
        className="mb-6 w-full object-contain h-[200px]"
      />

      <h1 className="mb-2 font-fontSemiBold text-2xl text-center">{title}</h1>
      <p className="text-center text-base text-gray-500">{description}</p>
    </article>
  );
}
