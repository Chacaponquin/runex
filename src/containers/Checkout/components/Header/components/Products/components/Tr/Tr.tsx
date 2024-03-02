import { useCart } from "@modules/cart/hooks";
import { Actions, Info, Price } from "./components";
import { Product } from "@modules/product/domain";

interface Props {
  quantity: number;
  image: string;
  name: string;
  id: string;
}

export default function Tr({ image, name, id }: Props) {
  const { handleDeleteProduct, totalProductPrice } = useCart();

  return (
    <tr className="">
      <Info image={image} name={name} />
      <Price price={Product.str(totalProductPrice(id))} />
      <Actions handleDelete={() => handleDeleteProduct(id)} />
    </tr>
  );
}
