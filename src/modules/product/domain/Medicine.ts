import { PRODUCT_TYPES } from "../constants";
import { Product, ProductProps } from "./Product";

type Props = Omit<ProductProps, "type">;

export class Medicine extends Product {
  constructor(props: Props) {
    super({ ...props, type: PRODUCT_TYPES.MEDICINE });
  }
}
