import { Favorite, Share } from "@modules/app/modules/icon/components";
import { Button } from "./components";
import { useUser } from "@modules/user/hooks";

interface Props {
  handleAddFavorite(): void;
  handleShare(): void;
  isFavorite: boolean;
  handleDeleteFavorite(): void;
}

export default function Top({
  handleAddFavorite,
  handleShare,
  isFavorite,
  handleDeleteFavorite,
}: Props) {
  const { actualUser } = useUser();

  return (
    <div className="flex justify-end mb-2 items-center gap-x-4">
      {actualUser && (
        <Button
          icon={Favorite}
          handleClick={isFavorite ? handleDeleteFavorite : handleAddFavorite}
          disabled={false}
        />
      )}

      <Button icon={Share} disabled={false} handleClick={handleShare} />
    </div>
  );
}
