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
        className="rounded-lg object-cover min-w-[110px] min-h-full"
        width={110}
        height={110}
      />
    </section>
  );
}
