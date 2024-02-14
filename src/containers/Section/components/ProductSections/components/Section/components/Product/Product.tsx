import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  price: string;
}

export default function Product({ name, image, price }: Props) {
  return (
    <article className="flex border-[1.5px] border-gray-200 rounded">
      <Image
        src={image}
        alt={name}
        width={200}
        height={100}
        className="object-cover rounded-l min-h-full min-w-[160px]"
      />

      <section className="flex flex-col py-4 px-6 w-full">
        <h2 className="font-fontMedium text-lg mb-1">{name}</h2>
        <p className="text-base text-gray-500 mb-1">Amazon</p>
        <span className="text-blue-500 font-fontMedium text-base">{price}</span>
      </section>
    </article>
  );
}
