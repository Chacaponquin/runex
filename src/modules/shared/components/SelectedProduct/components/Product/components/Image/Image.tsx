"use client";

import { Fragment } from "react";
import { Img, MiniImage } from "./components";
import { useImage } from "./hooks";
import { ContentLoader } from "@modules/shared/components";

interface Props {
  images: Array<string>;
  name: string;
  loading: boolean;
}

export default function Image({ images, name, loading }: Props) {
  const { handleChangeImage, selectedImage } = useImage();

  return (
    <section className="flex flex-col lg:gap-y-5 gap-y-3">
      <Img loading={loading} image={images[selectedImage]} name={name} />

      {images.length > 1 && (
        <div className="grid grid-cols-5 esm:gap-x-1.5 w-full gap-x-3 gap-y-2">
          {!loading &&
            images.map((img, index) => (
              <MiniImage
                key={index}
                handleClick={() => handleChangeImage(index)}
                image={img}
                alt={name}
                selected={selectedImage === index}
              />
            ))}

          {loading && (
            <Fragment>
              {Array.from({ length: 5 }).map((_, index) => (
                <ContentLoader key={index} height={75} />
              ))}
            </Fragment>
          )}
        </div>
      )}
    </section>
  );
}
