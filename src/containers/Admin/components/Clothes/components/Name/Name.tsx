import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

export default function Name({ name, image }: Props) {
  return (
    <div className="flex items-center gap-x-5">
      <Image
        src={image}
        alt={name}
        className="rounded w-[80px] h-[60px]"
        width={50}
        height={50}
      />

      <p className="text-base">{name}</p>
    </div>
  );
}
