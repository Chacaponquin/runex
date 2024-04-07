import Image from "next/image";
import { Name, Price } from "./components";
import { useState } from "react";

interface Props {
  name: string;
  image: string;
  price: string;
  provider: string;
  handleClick(): void;
}

export default function Product({
  image,
  name,
  provider,
  price,
  handleClick,
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <article
      className="flex flex-col cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="object-cover w-full rounded-lg"
      />

      <Name name={name} hover={hover} />
      <Price provider={provider} price={price} />
    </article>
  );
}
