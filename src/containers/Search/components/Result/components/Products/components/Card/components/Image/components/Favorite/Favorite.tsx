import { Favorite as IconFavorite } from "@modules/app/modules/icon/components";
import { useUser } from "@modules/user/hooks";
import clsx from "clsx";

interface Props {
  handleClick(): void;
  isFavorite: boolean;
}

export default function Favorite({ handleClick, isFavorite }: Props) {
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
        handleClick();
      }}
      disabled={isFavorite}
    >
      <IconFavorite size={22} />
    </button>
  );
}
