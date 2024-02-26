import { Favorite } from "./components";

interface Props {
  src: string;
  handleAddFavorite(): void;
  isFavorite: boolean;
}

export default function Image({ handleAddFavorite, src, isFavorite }: Props) {
  return (
    <header
      className="h-[170px] w-full p-3 rounded-t"
      style={{
        backgroundImage: `url("${src}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Favorite handleClick={handleAddFavorite} isFavorite={isFavorite} />
    </header>
  );
}
