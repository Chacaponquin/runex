import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  price: string;
  image: string;
}

export default function Product({ name, price, image }: Props) {
  return (
    <article className="flex flex-col">
      <Image
        src={image}
        alt={name}
        width={300}
        height={280}
        className="object-cover rounded-t-lg w-full h-[280px]"
      />

      <div className="flex w-full bg-gray-200/30 rounded-b-lg py-3 px-5 justify-between items-center">
        <h2 className="font-fontMedium text-lg mb-1">{name}</h2>
        <p className="font-fontSemiBold text-base">{price}</p>
      </div>
    </article>
  );
}
