import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import { CurrentUser } from "../domain";
import { FetchProps, BodyProps } from "@modules/app/modules/http/interfaces";
import { SendMessageDTO } from "../dto/user";

interface AddProductFavoriteProps {
  productId: string;
  userId: string;
}

interface DeleteProductFavoriteProps {
  productId: string;
  userId: string;
}

export default function useUserServices() {
  const { get, post, put } = useFetch();

  function getUserByToken(props: FetchProps<CurrentUser>) {
    get({
      url: API_ROUTES.USER.GET_CURRENT_USER,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: props.onSuccess,
    });
  }

  function sendMessage(props: BodyProps<void, SendMessageDTO>) {
    post({ ...props, url: API_ROUTES.USER.CONTACT });
  }

  function addProductToFavorites(
    props: BodyProps<void, AddProductFavoriteProps>
  ) {
    put({ ...props, url: API_ROUTES.USER.ADD_PRODUCT_FAVORITE });
  }

  function deleteProductInFavorites(
    props: BodyProps<void, DeleteProductFavoriteProps>
  ) {
    put({ ...props, url: API_ROUTES.USER.DELETE_PRODUCT_FAVORITE });
  }

  return {
    getUserByToken,
    sendMessage,
    addProductToFavorites,
    deleteProductInFavorites,
  };
}
