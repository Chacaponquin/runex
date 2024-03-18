import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

export default function Name({ name, image }: Props) {
  return (
    <div className="flex items-center gap-x-5 max-w-[500px]">
      <Image
        src={image}
        alt={name}
        className="rounded"
        width={60}
        height={50}
      />

      <p className="text-base">{name}</p>
    </div>
  );
}
