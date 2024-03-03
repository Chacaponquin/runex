import { Favorite } from "./components";

interface Props {
  src: string;
  handleAddFavorite(): void;
  isFavorite: boolean;
  handleDeleteFavorite(): void;
}

export default function Image({
  src,
  handleAddFavorite,
  isFavorite,
  handleDeleteFavorite,
}: Props) {
  return (
    <header
      style={{
        backgroundImage: `url("${src}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="object-cover w-full h-[200px] rounded p-4"
    >
      <Favorite
        handleAddFavorite={handleAddFavorite}
        isFavorite={isFavorite}
        handleDeleteFavorite={handleDeleteFavorite}
      />
    </header>
  );
}
