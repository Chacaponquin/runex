"use client";

import { Product } from "@modules/product/domain";
import { useProductServices } from "@modules/product/services";
import { useEffect, useState } from "react";
import { ProductForm } from "../interfaces";
import { useUser } from "@modules/user/hooks";

interface Props {
  productId: string | null;
}

export default function useSelectedProduct({ productId }: Props) {
  const { actualUser } = useUser();
  const { getProductById, getSimilarProducts, addProductToFavorites } =
    useProductServices();

  const [form, setForm] = useState<ProductForm>({
    color: "",
    size: "",
    quantity: 1,
  });

  const [productInfo, setProductInfo] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Array<Product>>([]);

  const [similarProductsLoading, setSimilarProductsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (productId) {
      setLoading(true);

      getProductById(productId).then((info) => {
        setProductInfo(info);

        setForm({ color: info.colors[0], quantity: 1, size: info.sizes[0] });

        setLoading(false);
      });
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      setSimilarProductsLoading(true);

      getSimilarProducts(productId).then((data) => {
        setSimilarProducts(data);
        setSimilarProductsLoading(false);
      });
    }
  }, [productId]);

  function handleBuyNow() {}

  function handleAddToCart() {}

  function handleAddFavorite() {
    if (actualUser && productId) {
      addProductToFavorites({ userId: actualUser.id, productId: productId });
    }
  }

  function handleShare() {}

  function handleChangeForm(key: keyof ProductForm, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleIncreaseQuantity() {
    setForm((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  }

  function handleDecreaseQuantity() {
    setForm((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  }

  return {
    productInfo,
    loading,
    similarProductsLoading,
    similarProducts,
    handleBuyNow,
    handleAddToCart,
    form,
    handleChangeForm,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleAddFavorite,
    handleShare,
  };
}
