import { Favorite, Share } from "@modules/app/modules/icon/components";
import { Button } from "./components";
import { useUser } from "@modules/user/hooks";
import { ContentLoader } from "@modules/shared/components";
import { Fragment } from "react";

interface Props {
  handleAddFavorite(): void;
  handleShare(): void;
  isFavorite: boolean;
  handleDeleteFavorite(): void;
  loading: boolean;
}

export default function Top({
  handleAddFavorite,
  handleShare,
  isFavorite,
  handleDeleteFavorite,
  loading,
}: Props) {
  const { actualUser } = useUser();

  return (
    <div className="flex justify-end mb-2 items-center gap-x-4">
      {loading ? (
        <Fragment>
          <ContentLoader height={50} circle={true} width={50} />
          <ContentLoader height={50} circle={true} width={50} />
        </Fragment>
      ) : (
        <Fragment>
          {actualUser && (
            <Button
              icon={Favorite}
              handleClick={
                isFavorite ? handleDeleteFavorite : handleAddFavorite
              }
              selected={isFavorite}
            />
          )}

          <Button icon={Share} selected={false} handleClick={handleShare} />
        </Fragment>
      )}
    </div>
  );
}
