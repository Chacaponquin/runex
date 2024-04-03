import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import { CurrentUser } from "../domain";
import { FetchProps, BodyProps } from "@modules/app/modules/http/interfaces";
import { LoginUserDTO, RespUserDTO, SendMessageDTO } from "../dto/user";

interface AddProductFavoriteDTO {
  productId: string;
  userId: string;
}

interface DeleteProductFavoriteDTO {
  productId: string;
  userId: string;
}

export default function useUserServices() {
  const { get, post, put } = useFetch();

  function getUserByToken(props: FetchProps<CurrentUser>) {
    get({ ...props, url: API_ROUTES.USER.GET_CURRENT_USER });
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

  return {
    getUserByToken,
    sendMessage,
    addProductToFavorites,
    deleteProductInFavorites,
    signIn,
  };
}
