import { Image as HeaderImage, Section } from "./components";

export default function Header() {
  return (
    <header className="flex flex-col items-center w-full bg-gray-50">
      <HeaderImage />
    </header>
  );
}
