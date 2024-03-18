import { Image as HeaderImage } from "./components";

interface Props {
  image: { src: string; alt: string };
}

export default function Header({ image }: Props) {
  return (
    <header className="flex flex-col items-center w-full bg-gray-50">
      <HeaderImage image={image} />
    </header>
  );
}
