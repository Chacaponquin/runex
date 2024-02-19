import { Favorite } from "./components";

interface Props {
  src: string;
  handleAddFavorite(): void;
}

export default function Image({ handleAddFavorite, src }: Props) {
  return (
    <header
      className="h-[170px] w-full p-3 rounded-t"
      style={{
        backgroundImage: `url("${src}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Favorite handleClick={handleAddFavorite} />
    </header>
  );
}
