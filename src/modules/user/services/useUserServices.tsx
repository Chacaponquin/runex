import { useFetch } from "@modules/app/modules/http/hooks";
import { FetchFunctionsProps } from "@modules/app/modules/http/interfaces/fetch";
import { API_ROUTES } from "@modules/app/constants";
import { CurrentUser } from "../domain";

export default function useUserServices() {
  const { get } = useFetch();

  async function getUserByToken(
    props: FetchFunctionsProps<CurrentUser>
  ): Promise<void> {
    get({
      url: API_ROUTES.USER.GET_CURRENT_USER,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: props.onSuccess,
    });
  }

  return { getUserByToken };
}
