"use client";

import { useBlockScroll } from "@modules/shared/hooks";
import { Product, Header, Share } from "./components";
import { useSelectedProduct } from "./hooks";

interface Props {
  selectedProduct: string | null;
  handleDeleteSelectedProduct(): void;
  handleSelectProduct(id: string): void;
}

export default function SelectedProduct({
  selectedProduct,
  handleDeleteSelectedProduct,
  handleSelectProduct,
}: Props) {
  const {
    productInfo,
    loading,
    similarProducts,
    similarProductsLoading,
    form,
    handleAddToCart,
    handleBuyNow,
    handleChangeForm,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleAddFavorite,
    handleShare,
    isFavorite,
    openShare,
    handleCloseShare,
    handleDeleteFavorite,
  } = useSelectedProduct({
    productId: selectedProduct,
    handleDeleteSelectedProduct: handleDeleteSelectedProduct,
  });

  useBlockScroll(selectedProduct !== null);

  return (
    <div
      className="fixed top-0 left-0 w-full h-svh z-40 bg-black/50 flex flex-col"
      style={{ visibility: selectedProduct ? "visible" : "hidden" }}
    >
      <Header handleDeleteSelectedProduct={handleDeleteSelectedProduct} />

      <Product
        isFavorite={isFavorite}
        info={productInfo}
        loading={loading}
        similarProducts={similarProducts}
        similarProductsLoading={similarProductsLoading}
        form={form}
        handleAddToCart={handleAddToCart}
        handleBuyNow={handleBuyNow}
        handleChangeForm={handleChangeForm}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleAddFavorite={handleAddFavorite}
        handleShare={handleShare}
        handleDeleteFavorite={handleDeleteFavorite}
        handleSelectProduct={handleSelectProduct}
      />

      {productInfo && openShare && (
        <Share
          handleClose={handleCloseShare}
          image={productInfo.image}
          name={productInfo.name}
          id={productInfo.id}
        />
      )}
    </div>
  );
}
