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
  PostProps,
  PutProps,
} from "@modules/app/modules/http/interfaces";
import { Clothe, Product, ProductSize } from "../domain";
import { GetDTO, GetSpecificProductsDTO, RespProductDTO } from "../dto/product";
import useProductServices from "./useProductServices";

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

  function createClothe(props: PostProps<void, CreateClotheDTO>) {
    post<void, CreateClotheDTO>({
      ...props,
      url: API_ROUTES.CLOTHE.CREATE,
      body: props.body,
    });
  }

  function filter(props: PostProps<Clothe[], FilterClothesDTO>) {
    post<RespClotheDTO[], FilterClothesDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => map(d)));
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

  function getClothes(props: PostProps<Clothe[], GetDTO>): void {
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

  function getSimilars(props: FetchProps<Product[]> & { id: string }) {
    get<RespProductDTO[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(
            data.map(
              (d) =>
                new Product({
                  id: d.id,
                  categories: d.categories,
                  images: d.images,
                  name: d.name,
                  price: d.price,
                  provider: d.provider,
                  type: d.type,
                })
            )
          );
        }
      },
      url: API_ROUTES.CLOTHE.SIMILARS(props.id),
    });
  }

  function getNews(props: PostProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.MEDICINE.NEW,
    });
  }

  function getTrending(props: PostProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.MEDICINE.TRENDING,
    });
  }

  function getPopular(props: PostProps<Product[], GetSpecificProductsDTO>) {
    post<RespProductDTO[], GetSpecificProductsDTO>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.MEDICINE.POPULAR,
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
  };
}
