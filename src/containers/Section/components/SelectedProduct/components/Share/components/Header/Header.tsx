import Image from "next/image";

interface Props {
  image: string;
  name: string;
}

export default function Header({ image, name }: Props) {
  return (
    <header className="flex justify-center bg-gray-50 rounded-t-lg">
      <div className="-translate-y-12 px-2">
        <Image
          width={300}
          height={500}
          className="object-cover aspect-video rounded-lg max-w-[300px] h-[230px] w-full"
          src={image}
          alt={name}
        />
      </div>
    </header>
  );
}
