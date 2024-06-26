import { PRODUCT_TYPES } from "../constants";
import { RespClotheDTO } from "../dto/clothe";
import { Product, ProductProps } from "./Product";

type Props = Omit<ProductProps, "type"> & Omit<RespClotheDTO, "type">;

export class Clothe extends Product {
  readonly sizes: Array<string>;
  readonly colors: Array<string>;

  constructor(props: Props) {
    super({ ...props, type: PRODUCT_TYPES.CLOTHE });

    this.sizes = props.sizes;
    this.colors = props.colors;
  }
}
