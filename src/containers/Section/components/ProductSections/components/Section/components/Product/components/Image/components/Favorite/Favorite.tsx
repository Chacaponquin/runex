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
    "rounded-full",
    "shadow",
    "stroke-black",
    "bg-white",
    "p-3",
    "transition-all duration-200",

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
    >
      <IconFavorite size={22} />
    </button>
  );
}
