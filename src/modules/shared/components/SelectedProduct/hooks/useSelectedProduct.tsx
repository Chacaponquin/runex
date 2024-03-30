"use client";

import { Product } from "@modules/product/domain";
import { useEffect, useState } from "react";
import { AddProductProps, ProductForm } from "../interfaces";
import { useProductActions, useSelectProduct } from "@modules/product/hooks";
import { FetchProps } from "@modules/app/modules/http/interfaces";

interface Props<T> {
  getProduct(props: FetchProps<T> & { id: string }): void;
  getSimilarProducts(props: FetchProps<Array<Product>> & { id: string }): void;
  onFetchSuccess(data: T): void;
  productInfo: T | null;
  handleAdd(props: AddProductProps): void;
}

export default function useSelectedProduct<T extends Product>({
  getProduct,
  getSimilarProducts,
  onFetchSuccess,
  productInfo,
  handleAdd,
}: Props<T>) {
  const { selectedProduct, handleDeleteSelectedProduct } = useSelectProduct();

  const { handleAddFavorite, handleDeleteFavorite, isFavorite } =
    useProductActions({
      productId: selectedProduct ? selectedProduct.id : null,
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
    if (selectedProduct) {
      setLoading(true);

      getProduct({
        id: selectedProduct.id,
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
  }, [selectedProduct]);

  useEffect(() => {
    if (selectedProduct) {
      setSimilarProductsLoading(true);

      getSimilarProducts({
        id: selectedProduct.id,
        onSuccess(data) {
          setSimilarProducts(data);
        },
        onFinally() {
          setSimilarProductsLoading(false);
        },
      });
    }
  }, [selectedProduct]);

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
