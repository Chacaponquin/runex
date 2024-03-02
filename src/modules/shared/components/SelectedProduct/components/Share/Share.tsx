import React from "react";
import { Header, Link, Social } from "./components";
import { useShare } from "./hooks";

interface Props {
  id: string;
  handleClose(): void;
  image: string;
  name: string;
}

export default function Share({ handleClose, id, image, name }: Props) {
  const { handleCopy, copied, link, socials } = useShare({ id: id });

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-50 bg-black/50 flex flex-col justify-center items-center px-3"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <Header image={image} name={name} />

        <div className="flex flex-col px-8 py-6">
          <Social socials={socials} />
          <Link link={link} handleCopy={handleCopy} copied={copied} />
        </div>
      </div>
    </div>
  );
}
