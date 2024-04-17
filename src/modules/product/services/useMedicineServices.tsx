"use client";

import { Medicine, Product, Provider } from "../domain";
import {
  FetchProps,
  BodyProps,
  PutProps,
} from "@modules/app/modules/http/interfaces";
import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import {
  EditMedicineDTO,
  FilterMedicineDTO,
  RespMedicineDTO,
} from "../dto/medicine";
import { GetDTO, GetSpecificProductsDTO, RespProductDTO } from "../dto/product";
import useProductServices from "./useProductServices";

export default function useMedicineServices() {
  const { map: mapProduct } = useProductServices();
  const { put, remove, post, get } = useFetch();

  function map(m: RespMedicineDTO): Medicine {
    return new Medicine({
      id: m.id,
      categories: m.categories,
      images: m.images,
      name: m.name,
      price: m.price,
      provider: m.provider,
    });
  }

  function findById(props: FetchProps<Medicine> & { id: string }): void {
    get<RespMedicineDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(map(data));
        }
      },
      url: API_ROUTES.MEDICINE.FIND(props.id),
    });
  }

  function editMedicine(props: PutProps<void, EditMedicineDTO>) {
    put<void, EditMedicineDTO>({
      ...props,
      url: API_ROUTES.MEDICINE.EDIT,
      body: props.body,
    });
  }

  function deleteMedicine(props: FetchProps<undefined> & { id: string }) {
    remove({ ...props, url: API_ROUTES.MEDICINE.REMOVE(props.id) });
  }

  function getMedicines(props: BodyProps<Medicine[], GetDTO>) {
    post<RespMedicineDTO[], GetDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(data.map((d) => map(d)));
        }
      },
      url: API_ROUTES.MEDICINE.GET,
    });
  }

  function filter(props: BodyProps<Medicine[], FilterMedicineDTO>) {
    post<RespMedicineDTO[], FilterMedicineDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(data.map((d) => map(d)));
        }
      },
      url: API_ROUTES.MEDICINE.FILTER,
    });
  }

  function getSimilars(props: FetchProps<Product[]> & { id: string }) {
    get<RespProductDTO[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(data.map((d) => mapProduct(d)));
        }
      },
      url: API_ROUTES.MEDICINE.SIMILARS(props.id),
    });
  }

  function getNews(props: BodyProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.MEDICINE.NEW,
    });
  }

  function getTrending(props: BodyProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.MEDICINE.TRENDING,
    });
  }

  function getPopular(props: BodyProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.MEDICINE.POPULAR,
    });
  }

  function getAllProviders(props: FetchProps<Provider[]>) {
    get<string[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(data.map((d) => ({ name: d })));
        }
      },
      url: API_ROUTES.MEDICINE.GET_ALL_PROVIDERS,
    });
  }

  return {
    findById,
    editMedicine,
    deleteMedicine,
    getMedicines,
    filter,
    getSimilars,
    getNews,
    getPopular,
    getTrending,
    getAllProviders,
  };
}
