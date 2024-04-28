import Image from "next/image";
import Td from "../Td/Td";

interface Props {
  name: string;
  image: string;
  first: boolean;
}

export default function Product({ image, name, first }: Props) {
  return (
    <Td first={first}>
      <div className="flex items-center sm:gap-x-5 gap-x-3">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-sm max-w-[60px] min-w-[60px] w-full h-[50px]"
        />

        <span className="text-base whitespace-nowrap">{name}</span>
      </div>
    </Td>
  );
}
