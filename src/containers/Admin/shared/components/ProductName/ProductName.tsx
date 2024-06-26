import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

export default function ProductName({ image, name }: Props) {
  return (
    <div className="flex items-center gap-x-5 w-full">
      <Image
        src={image}
        alt={name}
        className="rounded w-full h-[50px] max-w-[60px]"
        width={60}
        height={50}
      />

      <p className="text-base whitespace-nowrap">{name}</p>
    </div>
  );
}
