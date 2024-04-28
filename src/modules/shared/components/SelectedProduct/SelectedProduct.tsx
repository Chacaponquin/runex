"use client";

import { useBlockScroll } from "@modules/shared/hooks";
import { Product as ProductComponent, Header, Share } from "./components";
import { useSelectedProduct } from "./hooks";
import { FetchProps } from "@modules/app/modules/http/interfaces";
import { Product } from "@modules/product/domain";
import { AddProductProps } from "./interfaces";
import { useSelectProduct } from "@modules/product/hooks";

interface Props<T> {
  getProduct(props: FetchProps<T>): void;
  getSimilarProducts(props: FetchProps<Product[]> & { id: string }): void;
  onFetchSuccess(data: T): void;
  children: React.ReactNode;
  productInfo: T | null;
  handleAdd(props: AddProductProps): void;
}

export default function SelectedProduct<T extends Product>({
  getProduct,
  getSimilarProducts,
  onFetchSuccess,
  children,
  productInfo,
  handleAdd,
}: Props<T>) {
  const { selectedProduct } = useSelectProduct();

  const {
    loading,
    similarProducts,
    similarProductsLoading,
    form,
    handleAddToCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleAddFavorite,
    handleShare,
    isFavorite,
    openShare,
    handleCloseShare,
    handleDeleteFavorite,
    isInCart,
    handleDeleteFromCart,
    notFound,
  } = useSelectedProduct<T>({
    getProduct,
    getSimilarProducts,
    onFetchSuccess,
    productInfo,
    handleAdd,
  });

  useBlockScroll(selectedProduct !== null);

  return (
    <div
      className="fixed top-0 left-0 w-full h-svh z-40 bg-black/50 flex flex-col"
      style={{ visibility: selectedProduct ? "visible" : "hidden" }}
    >
      <Header />

      <ProductComponent
        isFavorite={isFavorite}
        info={productInfo}
        loading={loading}
        similarProducts={similarProducts}
        similarProductsLoading={similarProductsLoading}
        form={form}
        handleAddToCart={handleAddToCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleAddFavorite={handleAddFavorite}
        handleShare={handleShare}
        handleDeleteFavorite={handleDeleteFavorite}
        extra={children}
        isInCart={isInCart}
        handleDeleteFromCart={handleDeleteFromCart}
        notFound={notFound}
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
