import { useFetch } from "@modules/app/modules/http/hooks";
import {
  CreateClotheDTO,
  EditClotheDTO,
  FilterClothesDTO,
  RespClotheDTO,
} from "../dto/clothe";
import { API_ROUTES } from "@modules/app/constants";
import {
  FetchProps,
  BodyProps,
  PutProps,
} from "@modules/app/modules/http/interfaces";
import {
  Clothe,
  Product,
  ProductColor,
  ProductSize,
  Provider,
} from "../domain";
import {
  GetDTO,
  GetSpecificProductsDTO,
  RespProductDTO,
  RespSearchProductsDTO,
} from "../dto/product";
import useProductServices from "./useProductServices";
import { SearchResult } from "../interfaces/product";

export default function useClotheServices() {
  const { map: mapProduct } = useProductServices();
  const { post, remove, put, get } = useFetch();

  function map(c: RespClotheDTO): Clothe {
    return new Clothe({
      categories: c.categories,
      colors: c.colors,
      id: c.id,
      images: c.images,
      name: c.name,
      price: c.price,
      provider: c.provider,
      sizes: c.sizes,
    });
  }

  function createClothe(props: BodyProps<void, CreateClotheDTO>) {
    post<void, CreateClotheDTO>({
      ...props,
      url: API_ROUTES.CLOTHE.CREATE,
      body: props.body,
    });
  }

  function filter(props: BodyProps<SearchResult, FilterClothesDTO>) {
    post<RespSearchProductsDTO, FilterClothesDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess({
            result: data.result.map((d) => mapProduct(d)),
            totalPages: data.totalPages,
          });
        }
      },
      url: API_ROUTES.CLOTHE.FILTER,
    });
  }

  function editClothe(props: PutProps<void, EditClotheDTO>) {
    put<void, EditClotheDTO>({
      ...props,
      url: API_ROUTES.CLOTHE.EDIT,
      body: props.body,
    });
  }

  function deleteClothe(props: FetchProps<undefined> & { id: string }) {
    remove({ ...props, url: API_ROUTES.CLOTHE.REMOVE(props.id) });
  }

  function getClothes(props: BodyProps<Clothe[], GetDTO>): void {
    post<RespClotheDTO[], GetDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => map(d)));
      },
      url: API_ROUTES.CLOTHE.GET,
    });
  }

  function findById(props: FetchProps<Clothe> & { id: string }): void {
    get<RespClotheDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(map(data));
      },
      url: API_ROUTES.CLOTHE.FIND(props.id),
    });
  }

  function getAllSizes(props: FetchProps<ProductSize[]>) {
    get<string[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => ({ name: d })));
      },
      url: API_ROUTES.CLOTHE.ALL_SIZES,
    });
  }

  function getAllColors(props: FetchProps<ProductColor[]>) {
    get<ProductColor[]>({ ...props, url: API_ROUTES.CLOTHE.ALL_COLORS });
  }

  function getSimilars(props: FetchProps<Product[]> & { id: string }) {
    get<RespProductDTO[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(data.map((d) => mapProduct(d)));
        }
      },
      url: API_ROUTES.CLOTHE.SIMILARS(props.id),
    });
  }

  function getNews(props: BodyProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.CLOTHE.NEW,
    });
  }

  function getTrending(props: BodyProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.CLOTHE.TRENDING,
    });
  }

  function getPopular(props: BodyProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.CLOTHE.POPULAR,
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
      url: API_ROUTES.CLOTHE.GET_ALL_PROVIDERS,
    });
  }

  return {
    createClothe,
    deleteClothe,
    getClothes,
    findById,
    editClothe,
    filter,
    getAllSizes,
    getSimilars,
    getNews,
    getPopular,
    getTrending,
    getAllColors,
    getAllProviders,
  };
}
