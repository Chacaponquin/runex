import {
  CreateProductDTO,
  EditProductDTO,
  FilterProductDTO,
  RespProductDTO,
} from "./product";

export interface EditMedicineDTO extends EditProductDTO {}

export interface FilterMedicineDTO extends FilterProductDTO {}

export interface RespMedicineDTO extends RespProductDTO {}

export interface CreateMedicineDTO extends CreateProductDTO {}
