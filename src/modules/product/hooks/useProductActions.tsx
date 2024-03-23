import { useUser } from "@modules/user/hooks";
import { useProductServices } from "../services";
import { useCart } from "@modules/cart/hooks";

interface Props {
  productId: string | null;
}

export default function useProductActions({ productId }: Props) {
  const { existProduct, handleDeleteProduct } = useCart();

  const {
    actualUser,
    handleAddProductToFavorites,
    handleDeleteProductInFavorites,
    isProductFavorite,
  } = useUser();

  const { addProductToFavorites, deleteProductInFavorites } =
    useProductServices();

  const isFavorite = productId ? isProductFavorite(productId) : false;

  const isInCart = productId ? existProduct(productId) : false;

  function handleAddFavorite() {
    if (actualUser && productId) {
      handleAddProductToFavorites(productId);

      addProductToFavorites({
        body: { userId: actualUser.id, productId: productId },
      });
    }
  }

  function handleDeleteFavorite() {
    if (actualUser && productId) {
      handleDeleteProductInFavorites(productId);

      deleteProductInFavorites({
        body: { userId: actualUser.id, productId: productId },
      });
    }
  }

  function handleDelete() {
    if (productId) {
      handleDeleteProduct(productId);
    }
  }

  return {
    handleAddFavorite,
    handleDeleteFavorite,
    isFavorite,
    isInCart,
    handleDelete,
  };
}
