"use client";

import React, { useState } from "react";
import NextImage from "next/image";

interface Props {
  images: Array<string>;
  name: string;
}

export default function Image({ images, name }: Props) {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  function handleChangeImage(index: number) {
    setSelectedImage(index);
  }

  return (
    <section className="flex flex-col lg:gap-y-5 gap-y-3">
      <NextImage
        alt={name}
        src={images[selectedImage]}
        width={400}
        height={400}
        className="object-cover w-full h-[350px] esm:h-[280px] rounded-2xl"
      />

      {images.length > 1 && (
        <div className="grid grid-cols-8 esm:gap-x-1.5 w-full gap-x-3">
          {images.map((img, index) => (
            <button key={index} onClick={() => handleChangeImage(index)}>
              <NextImage
                src={img}
                alt={name}
                width={200}
                height={200}
                className="object-cover rounded-xl esm:rounded-lg"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
