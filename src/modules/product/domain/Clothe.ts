import { Product } from "./Product";

export class Clothe extends Product {
  readonly sizes: Array<string> = ["S", "M", "L", "XL"];
  readonly colors: Array<string> = ["orange", "red", "green"];
}
