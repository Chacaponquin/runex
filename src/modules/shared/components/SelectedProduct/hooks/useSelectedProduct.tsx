"use client";

import { Product } from "@modules/product/domain";
import { useProductServices } from "@modules/product/services";
import { useEffect, useState } from "react";
import { ProductForm } from "../interfaces";
import { useProductActions } from "@modules/product/hooks";
import { useCart } from "@modules/cart/hooks";

interface Props {
  productId: string | null;
  handleDeleteSelectedProduct(): void;
}

export default function useSelectedProduct({
  productId,
  handleDeleteSelectedProduct,
}: Props) {
  const { getProductById, getSimilarProducts } = useProductServices();
  const { handleAddFavorite, handleDeleteFavorite, isFavorite } =
    useProductActions({
      productId,
    });
  const { handleSetProduct } = useCart();

  const [form, setForm] = useState<ProductForm>({
    color: "",
    size: "",
    quantity: 1,
  });

  const [productInfo, setProductInfo] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Array<Product>>([]);

  const [similarProductsLoading, setSimilarProductsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [openShare, setOpenShare] = useState(false);

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

  function handleShare() {
    setOpenShare(true);
  }

  function handleCloseShare() {
    setOpenShare(false);
  }

  function handleChangeForm(key: keyof ProductForm, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
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
      handleSetProduct({ quantity: form.quantity, product: productInfo });
      handleDeleteSelectedProduct();
    }
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
    isFavorite,
    openShare,
    handleCloseShare,
    handleDeleteFavorite,
  };
}
