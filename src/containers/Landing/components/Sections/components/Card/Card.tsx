"use client";

import { useState } from "react";
import Link from "next/link";
import { CardTitle } from "./shared/components";
import clsx from "clsx";

interface Props {
  image: { src: string; alt: string };
  title: string;
  url: string;
}

export default function Card({ title, url, image }: Props) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  const CLASS = clsx(
    "flex flex-col justify-end",
    "shadow-lg",
    "cursor-pointer",
    "py-7 px-10 esm:px-7",
    "min-h-[300px]",
    "rounded",
    "text-white"
  );

  return (
    <Link href={url}>
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={CLASS}
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${image.src})`,
          backgroundSize: hover ? "150%" : "160%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transitionProperty: "background-size",
          transitionDuration: "0.9s",
        }}
      >
        <CardTitle text={title} hover={hover} />
      </article>
    </Link>
  );
}
