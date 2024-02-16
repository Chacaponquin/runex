"use client";

import { useState } from "react";
import Link from "next/link";
import { CardTitle } from "./shared/components";
import clsx from "clsx";

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

  const CLASS = clsx(
    "flex flex-col justify-between",
    "shadow-lg",
    "cursor-pointer",
    "py-7 px-10",
    "min-h-[300px]",
    "rounded-lg",
    "text-white"
  );

  const TEXT_CLASS = clsx("text-lg leading-7", {
    visible: !hover,
    invisible: hover,
  });

  return (
    <Link href={url}>
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={CLASS}
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${image.src})`,
          backgroundSize: hover ? "110%" : "120%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transitionProperty: "background-size",
          transitionDuration: "0.9s",
        }}
      >
        <p className={TEXT_CLASS}>{description}</p>

        <CardTitle text={title} hover={hover} />
      </article>
    </Link>
  );
}
