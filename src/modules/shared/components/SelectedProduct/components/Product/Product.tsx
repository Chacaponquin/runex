import { Product as ProductClass } from "@modules/product/domain";
import {
  Image as ProductImage,
  Loading,
  Data,
  SimilarProducts,
  Top,
} from "./components";
import { ProductForm } from "../../interfaces";

interface Props {
  info: ProductClass | null;
  loading: boolean;
  similarProducts: Array<ProductClass>;
  similarProductsLoading: boolean;
  handleAddToCart(): void;
  handleBuyNow(): void;
  form: ProductForm;
  handleDecreaseQuantity(): void;
  handleIncreaseQuantity(): void;
  handleAddFavorite(): void;
  handleShare(): void;
  isFavorite: boolean;
  handleDeleteFavorite(): void;
  extra: React.ReactNode;
}

export default function Product({
  info,
  loading,
  similarProducts,
  similarProductsLoading,
  form,
  handleAddToCart,
  handleBuyNow,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleAddFavorite,
  handleShare,
  isFavorite,
  handleDeleteFavorite,
  extra,
}: Props) {
  return (
    <div className="flex flex-grow bg-white w-full justify-center rounded-t-2xl overflow-y-auto pt-10 esm:pt-6 px-5">
      <div className="flex h-full flex-col max-w-[1100px] w-full">
        {loading && <Loading />}

        {info && (
          <div className="flex flex-col w-full">
            <Top
              handleAddFavorite={handleAddFavorite}
              handleShare={handleShare}
              isFavorite={isFavorite}
              handleDeleteFavorite={handleDeleteFavorite}
            />

            <div className="grid xl:grid-cols-2 grid-cols-1 w-full gap-x-7 gap-y-5 mb-14">
              <ProductImage images={info.images} name={info.name} />

              <Data
                extra={extra}
                name={info.name}
                price={info.priceStr}
                provider={info.provider}
                form={form}
                handleAddToCart={handleAddToCart}
                handleBuyNow={handleBuyNow}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
              />
            </div>

            <SimilarProducts
              products={similarProducts}
              loading={similarProductsLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
}
