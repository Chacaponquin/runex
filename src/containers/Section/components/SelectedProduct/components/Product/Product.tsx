import { Product as ProductClass } from "@modules/product/domain";
import {
  Image as ProductImage,
  Loading,
  Data,
  SimilarProducts,
} from "./components";

interface Props {
  info: ProductClass | null;
  loading: boolean;
  similarProducts: Array<ProductClass>;
  similarProductsLoading: boolean;
}

export default function Product({
  info,
  loading,
  similarProducts,
  similarProductsLoading,
}: Props) {
  return (
    <div className="flex flex-grow bg-white w-full rounded-t-2xl overflow-y-auto lg:px-20 px-10 esm:px-4 py-6">
      {loading && <Loading />}

      {info && (
        <div className="flex flex-col w-full">
          <div className="grid xl:grid-cols-2 grid-cols-1 w-full gap-x-7 gap-y-5 mb-14">
            <ProductImage images={info.images} name={info.name} />
            <Data
              name={info.name}
              price={info.priceStr}
              colors={info.colors}
              provider={info.provider}
              sizes={info.sizes}
            />
          </div>

          <SimilarProducts
            products={similarProducts}
            loading={similarProductsLoading}
          />
        </div>
      )}
    </div>
  );
}
