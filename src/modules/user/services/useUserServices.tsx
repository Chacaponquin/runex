import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";
import { CurrentUser } from "../domain";
import { FetchProps } from "@modules/app/modules/http/interfaces";

export default function useUserServices() {
  const { get } = useFetch();

  function getUserByToken(props: FetchProps<CurrentUser>) {
    get({
      url: API_ROUTES.USER.GET_CURRENT_USER,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: props.onSuccess,
    });
  }

  return { getUserByToken };
}
