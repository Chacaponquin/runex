import { FilterProductDTO } from "./product";

export interface EditMedicineDTO {
  name: string;
  price: number;
  provider: string;
  category: string;
  images: Array<string>;
}

export interface FilterMedicineDTO extends FilterProductDTO {}
