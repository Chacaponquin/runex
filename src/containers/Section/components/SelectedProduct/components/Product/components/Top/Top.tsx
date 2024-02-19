import { Favorite, Share } from "@modules/app/modules/icon/components";
import { Button } from "./components";

interface Props {
  handleAddFavorite(): void;
  handleShare(): void;
}

export default function Top({ handleAddFavorite, handleShare }: Props) {
  return (
    <div className="flex justify-end mb-2 items-center gap-x-4">
      <Button
        icon={Favorite}
        handleClick={handleAddFavorite}
        disabled={false}
      />

      <Button icon={Share} disabled={false} handleClick={handleShare} />
    </div>
  );
}
