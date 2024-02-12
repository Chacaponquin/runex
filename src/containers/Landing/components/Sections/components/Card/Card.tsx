"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Image as ImageSection } from "./components";
import { CardTitle } from "./shared/components";

interface Props {
  image: { src: string; alt: string };
  title: string;
  description: string;
  url: string;
}

export default function Card({ description, title, url, image }: Props) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <Link href={url}>
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-gray-100 shadow-lg cursor-pointer relative rounded-lg min-w-[420px] min-h-[300px] flex flex-col justify-between py-7 px-10"
      >
        <p className="text-lg leading-7">{description}</p>

        <CardTitle text={title} />

        <ImageSection src={image.src} hover={hover} />
      </article>
    </Link>
  );
}
