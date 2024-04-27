import { FieldValidator } from "@modules/app/modules/form/domain";
import { Clothe } from "./Clothe";
import { Product, ProductImage } from "./Product";
import { Medicine } from "./Medicine";
import { ClotheParamsUrl, MedicineParamsUrl } from "./ParamUrl";

export interface ProductColor {
  name: string;
  color: string;
}

export interface ProductSize {
  name: string;
}

export interface Provider {
  name: string;
}

export interface ProductCategory {
  name: string;
}

export { Product, Clothe, Medicine, ClotheParamsUrl, MedicineParamsUrl };

export type { ProductImage };

export class ProductDescriptionValidator extends FieldValidator<string> {
  constructor() {
    super({
      message: "La descripción debe tener al menos 10 caracteres",
      id: "product-description",
    });
  }

  public validate(value: string): boolean {
    if (value.length < 10) {
      return false;
    }

    return true;
  }
}

export class ProductNameValidator extends FieldValidator<string> {
  constructor() {
    super({
      message: "El nombre del producto debe tener al menos 5 caracteres",
      id: "product-name",
    });
  }

  public validate(value: string): boolean {
    if (value.length < 5) {
      return false;
    }

    return true;
  }
}

export class ProductImagesValidator extends FieldValidator<ProductImage[]> {
  constructor() {
    super({
      id: "product-image",
      message: "El producto debe tener al menos 1 imagen",
    });
  }

  public validate(value: ProductImage[]): boolean {
    if (value.length < 1) {
      return false;
    }

    return true;
  }
}

export class ClotheColorsValidator extends FieldValidator<Array<string>> {
  constructor() {
    super({
      id: "clothe-colors",
      message: "El producto debe tener al menos 1 color seleccionado",
    });
  }

  public validate(value: string[]): boolean {
    if (value.length < 1) {
      return false;
    }

    return true;
  }
}

export class ClotheSizesValidator extends FieldValidator<Array<string>> {
  constructor() {
    super({
      id: "clothe-colors",
      message: "El producto debe tener al menos 1 talla",
    });
  }

  public validate(value: string[]): boolean {
    if (value.length < 1) {
      return false;
    }

    return true;
  }
}
