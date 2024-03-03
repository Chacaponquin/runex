import { useUser } from "@modules/user/hooks";
import { useProductServices } from "../services";

interface Props {
  productId: string | null;
}

export default function useProductActions({ productId }: Props) {
  const {
    actualUser,
    handleAddProductToFavorites,
    handleDeleteProductInFavorites,
    isProductFavorite,
  } = useUser();
  const { addProductToFavorites, deleteProductInFavorites } =
    useProductServices();

  const isFavorite = productId ? isProductFavorite(productId) : false;

  function handleAddFavorite() {
    if (actualUser && productId) {
      handleAddProductToFavorites(productId);
      addProductToFavorites({ userId: actualUser.id, productId: productId });
    }
  }

  function handleDeleteFavorite() {
    if (actualUser && productId) {
      handleDeleteProductInFavorites(productId);
      deleteProductInFavorites({ userId: actualUser.id, productId: productId });
    }
  }

  return { handleAddFavorite, handleDeleteFavorite, isFavorite };
}
