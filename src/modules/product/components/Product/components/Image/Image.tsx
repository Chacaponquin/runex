import { useUser } from "@modules/user/hooks";
import { Favorite } from "./components";

interface Props {
  src: string;
  handleAddFavorite(): void;
  isFavorite: boolean;
  handleDeleteFavorite(): void;
}

export default function Image({
  handleAddFavorite,
  src,
  isFavorite,
  handleDeleteFavorite,
}: Props) {
  const { actualUser } = useUser();

  return (
    <header
      className="h-[170px] w-full p-3 rounded-t"
      style={{
        backgroundImage: `url("${src}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {actualUser && (
        <Favorite
          handleAddFavorite={handleAddFavorite}
          isFavorite={isFavorite}
          handleDeleteFavorite={handleDeleteFavorite}
        />
      )}
    </header>
  );
}
