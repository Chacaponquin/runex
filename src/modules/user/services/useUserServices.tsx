"use client";

import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import { FetchProps, BodyProps } from "@modules/app/modules/http/interfaces";
import {
  LoginUserDTO,
  RespUserDTO,
  SendMessageDTO,
  SignUpUserDTO,
} from "../dto/user";
import { useUser } from "../hooks";
import { Product } from "@modules/product/domain";
import { RespProductDTO } from "@modules/product/dto/product";
import { useProductServices } from "@modules/product/services";
import { Order } from "@modules/order/domain";
import { RespOrderDTO } from "@modules/order/dto";
import { useOrderServices } from "@modules/order/services";

interface AddProductFavoriteDTO {
  productId: string;
  userId: string;
}

interface DeleteProductFavoriteDTO {
  productId: string;
  userId: string;
}

export default function useUserServices() {
  const { map: mapProduct } = useProductServices();
  const { map: mapOrder } = useOrderServices();
  const { get, post, put } = useFetch();
  const { getRefreshToken } = useUser();

  function getUserByToken(props: FetchProps<RespUserDTO>) {
    get<RespUserDTO>({
      ...props,
      url: API_ROUTES.USER.GET_CURRENT_USER,
      authorization: getRefreshToken(),
    });
  }

  function sendMessage(props: BodyProps<void, SendMessageDTO>) {
    post({ ...props, url: API_ROUTES.USER.CONTACT });
  }

  function addProductToFavorites(
    props: BodyProps<void, AddProductFavoriteDTO>
  ) {
    put({ ...props, url: API_ROUTES.USER.ADD_PRODUCT_FAVORITE });
  }

  function deleteProductInFavorites(
    props: BodyProps<void, DeleteProductFavoriteDTO>
  ) {
    put({ ...props, url: API_ROUTES.USER.DELETE_PRODUCT_FAVORITE });
  }

  function signIn(props: BodyProps<RespUserDTO, LoginUserDTO>) {
    post<RespUserDTO, LoginUserDTO>({ ...props, url: API_ROUTES.USER.LOGIN });
  }

  function signUp(props: BodyProps<RespUserDTO, SignUpUserDTO>) {
    post<RespUserDTO, SignUpUserDTO>({
      ...props,
      url: API_ROUTES.USER.SIGN_UP,
    });
  }

  function favoritesCount(props: FetchProps<number>) {
    get<number>({ ...props, url: API_ROUTES.USER.FAVORITES_COUNT });
  }

  function ordersCount(props: FetchProps<number>) {
    get<number>({ ...props, url: API_ROUTES.USER.ORDERS_COUNT });
  }

  function favoriteProducts(props: FetchProps<Product[]>) {
    get<RespProductDTO[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) props.onSuccess(data.map((d) => mapProduct(d)));
      },
      url: API_ROUTES.USER.FAVORITES,
    });
  }

  function getOrders(props: FetchProps<Order[]>) {
    get<RespOrderDTO[]>({
      ...props,
      onSuccess(data) {
        if (props.onSuccess) {
          props.onSuccess(data.map((d) => mapOrder(d)));
        }
      },
      url: API_ROUTES.USER.ORDERS,
    });
  }

  return {
    getUserByToken,
    sendMessage,
    addProductToFavorites,
    deleteProductInFavorites,
    signIn,
    favoritesCount,
    ordersCount,
    favoriteProducts,
    getOrders,
    signUp,
  };
}
