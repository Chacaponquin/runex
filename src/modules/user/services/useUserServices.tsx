import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import { CurrentUser } from "../domain";
import { FetchProps, PostProps } from "@modules/app/modules/http/interfaces";
import { SendMessageDTO } from "../dto/user";

export default function useUserServices() {
  const { get, post } = useFetch();

  function getUserByToken(props: FetchProps<CurrentUser>) {
    get({
      url: API_ROUTES.USER.GET_CURRENT_USER,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: props.onSuccess,
    });
  }

  function sendMessage(props: PostProps<void, SendMessageDTO>) {
    post({ ...props, url: API_ROUTES.USER.CONTACT });
  }

  return { getUserByToken, sendMessage };
}
