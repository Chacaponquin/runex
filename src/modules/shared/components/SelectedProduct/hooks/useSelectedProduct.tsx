"use client";

import { Product } from "@modules/product/domain";
import { useEffect, useState } from "react";
import { AddProductProps, ProductForm } from "../interfaces";
import { useProductActions } from "@modules/product/hooks";
import { FetchProps } from "@modules/app/modules/http/interfaces";

interface Props<T> {
  productId: string | null;
  handleDeleteSelectedProduct(): void;
  getProduct(props: FetchProps<T>): void;
  getSimilarProducts(props: FetchProps<Array<Product>> & { id: string }): void;
  onFetchSuccess(data: T): void;
  productInfo: T | null;
  handleAdd(props: AddProductProps): void;
}

export default function useSelectedProduct<T extends Product>({
  productId,
  handleDeleteSelectedProduct,
  getProduct,
  getSimilarProducts,
  onFetchSuccess,
  productInfo,
  handleAdd,
}: Props<T>) {
  const { handleAddFavorite, handleDeleteFavorite, isFavorite } =
    useProductActions({
      productId,
    });

  const [form, setForm] = useState<ProductForm>({
    quantity: 1,
  });

  const [similarProducts, setSimilarProducts] = useState<Array<Product>>([]);
  const [notFound, setNotFound] = useState(false);

  const [similarProductsLoading, setSimilarProductsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [openShare, setOpenShare] = useState(false);

  useEffect(() => {
    if (productId) {
      setLoading(true);

      getProduct({
        onSuccess(info) {
          onFetchSuccess(info);
        },
        onFinally() {
          setLoading(false);
        },
        onError() {
          setNotFound(true);
        },
      });
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      setSimilarProductsLoading(true);

      getSimilarProducts({
        id: productId,
        onSuccess(data) {
          setSimilarProducts(data);
        },
        onFinally() {
          setSimilarProductsLoading(false);
        },
      });
    }
  }, [productId]);

  function handleShare() {
    setOpenShare(true);
  }

  function handleCloseShare() {
    setOpenShare(false);
  }

  function handleIncreaseQuantity() {
    setForm((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  }

  function handleDecreaseQuantity() {
    setForm((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  }

  function handleBuyNow() {
    handleDeleteSelectedProduct();
  }

  function handleAddToCart() {
    if (productInfo) {
      handleAdd({ quantity: form.quantity, product: productInfo });
      handleDeleteSelectedProduct();
    }
  }

  return {
    loading,
    similarProductsLoading,
    similarProducts,
    handleBuyNow,
    handleAddToCart,
    form,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleAddFavorite,
    handleShare,
    isFavorite,
    openShare,
    handleCloseShare,
    handleDeleteFavorite,
    notFound,
  };
}
