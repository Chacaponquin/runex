import { Favorite as IconFavorite } from "@modules/app/modules/icon/components";

interface Props {
  handleClick(): void;
}

export default function Favorite({ handleClick }: Props) {
  return (
    <button
      className="shadow rounded-full stroke-black bg-white p-3 transition-all duration-200 hover:bg-blue-500 hover:stroke-white"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <IconFavorite size={22} />
    </button>
  );
}
