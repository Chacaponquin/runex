import React from "react";
import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function Image({ alt, src }: Props) {
  return (
    <section className="">
      <NextImage
        src={src}
        alt={alt}
        className="rounded-lg object-cover min-w-[130px] min-h-full w-auto h-auto"
        width={130}
        height={110}
      />
    </section>
  );
}
