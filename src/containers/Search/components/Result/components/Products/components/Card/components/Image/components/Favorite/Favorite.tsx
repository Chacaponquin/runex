import { Favorite as IconFavorite } from "@modules/app/modules/icon/components";
import clsx from "clsx";

interface Props {
  handleAddFavorite(): void;
  isFavorite: boolean;
  handleDeleteFavorite(): void;
}

export default function Favorite({
  handleAddFavorite,
  isFavorite,
  handleDeleteFavorite,
}: Props) {
  const CLASS = clsx(
    "shadow",
    "transition-all duration-200",
    "bg-white",
    "stroke-black",
    "p-3",
    "rounded-full",

    {
      "bg-blue-500 stroke-white": isFavorite,
      "hover:bg-blue-500 hover:stroke-white": !isFavorite,
    }
  );

  return (
    <button
      className={CLASS}
      onClick={(e) => {
        e.stopPropagation();
        isFavorite ? handleDeleteFavorite() : handleAddFavorite();
      }}
      disabled={isFavorite}
    >
      <IconFavorite size={22} />
    </button>
  );
}
