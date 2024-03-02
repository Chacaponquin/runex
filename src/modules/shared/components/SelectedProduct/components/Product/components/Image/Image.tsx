"use client";

import NextImage from "next/image";
import { MiniImage } from "./components";
import { useImage } from "./hooks";

interface Props {
  images: Array<string>;
  name: string;
}

export default function Image({ images, name }: Props) {
  const { handleChangeImage, selectedImage } = useImage();

  return (
    <section className="flex flex-col lg:gap-y-5 gap-y-3">
      <NextImage
        alt={name}
        src={images[selectedImage]}
        width={400}
        height={400}
        className="object-cover w-full h-[350px] esm:h-[230px] rounded-lg"
      />

      {images.length > 1 && (
        <div className="grid grid-cols-5 esm:gap-x-1.5 w-full gap-x-3">
          {images.map((img, index) => (
            <MiniImage
              key={index}
              handleClick={() => handleChangeImage(index)}
              image={img}
              alt={name}
              selected={selectedImage === index}
            />
          ))}
        </div>
      )}
    </section>
  );
}
