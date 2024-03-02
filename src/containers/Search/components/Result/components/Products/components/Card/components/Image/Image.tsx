import { Favorite } from "./components";

interface Props {
  src: string;
  handleAddFavorite(): void;
  isFavorite: boolean;
}

export default function Image({ src, handleAddFavorite, isFavorite }: Props) {
  return (
    <header
      style={{
        backgroundImage: `url("${src}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="object-cover w-full h-[200px] rounded p-4"
    >
      <Favorite handleClick={handleAddFavorite} isFavorite={isFavorite} />
    </header>
  );
}
