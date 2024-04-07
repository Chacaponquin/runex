import { ContentLoader } from "@modules/shared/components";
import { Fragment } from "react";
import Image from "next/image";

interface Props {
  image: string;
  loading: boolean;
  name: string;
}

export default function Img({ image, name, loading }: Props) {
  return (
    <Fragment>
      {loading ? (
        <ContentLoader height={350} />
      ) : (
        <Image
          alt={name}
          src={image}
          width={400}
          height={400}
          className="object-cover w-full h-[350px] esm:h-[230px] rounded-lg"
        />
      )}
    </Fragment>
  );
}
