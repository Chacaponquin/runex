import { APP_IMAGES } from "@modules/app/constants";
import Image from "next/image";

interface Props {
  text: string;
}

export default function Empty({ text }: Props) {
  return (
    <div className="flex flex-col items-center mt-12">
      <Image
        src={APP_IMAGES.EMPTY.src}
        alt={APP_IMAGES.EMPTY.alt}
        width={400}
        height={400}
        className="object-contain w-full sm:max-w-[340px] max-w-[270px]"
      />

      <h2 className="mt-5 text-center font-fontMedium sm:text-3xl text-2xl">
        {text}
      </h2>
    </div>
  );
}
