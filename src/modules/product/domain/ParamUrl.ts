import { APP_ROUTES } from "@modules/app/constants";
import {
  Colors,
  MaxPrice,
  MinPrice,
  Order,
  Page,
  Providers,
  Query,
  Sizes,
} from "../value-object";
import { FilterClothesDTO } from "../dto/clothe";
import { FilterProductDTO } from "../dto/product";
import { FilterMedicineDTO } from "../dto/medicine";

interface Param {
  name: string;
  value: string;
}

class ProductParamsUrl {
  private array: Param[];

  constructor({
    maxPrice,
    minPrice,
    page,
    providers,
    name,
    order,
  }: Partial<FilterProductDTO>) {
    this.array = [
      { name: "q", value: new Query().toParam(name) },
      { name: "pMax", value: new MaxPrice().toParam(maxPrice) },
      { name: "pMin", value: new MinPrice().toParam(minPrice) },
      { name: "page", value: new Page().toParam(page) },
      { name: "providers", value: new Providers().toParam(providers) },
      { name: "order", value: new Order().toParam(order) },
    ];
  }

  build(base: string, a: Param[]) {
    this.array = [...this.array, ...a];

    let url = "?";

    this.array.forEach((p) => {
      if (p.value) {
        url += `${p.name}=${p.value}&`;
      }
    });

    if (url === "?") {
      return base;
    } else {
      const pos = url.lastIndexOf("&");
      if (pos === -1) {
        return `${base}${url}`;
      } else {
        const newUrl = url.substring(0, pos) + "" + url.substring(pos + 1);
        return `${base}${newUrl}`;
      }
    }
  }
}

export class ClotheParamsUrl {
  build(params: Partial<FilterClothesDTO>): string {
    const builder = new ProductParamsUrl(params);

    return builder.build(APP_ROUTES.SECTION.SEARCH_CLOTHES, [
      { name: "colors", value: new Colors().toParam(params.colors) },
      { name: "sizes", value: new Sizes().toParam(params.sizes) },
    ]);
  }
}

export class MedicineParamsUrl {
  build(params: Partial<FilterMedicineDTO>): string {
    const builder = new ProductParamsUrl(params);

    return builder.build(APP_ROUTES.SECTION.SEARCH_MEDICINE, []);
  }
}
