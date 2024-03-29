"use client";

import { PostProps } from "@modules/app/modules/http/interfaces";
import { ResponseSignInAdminDTO, SignInAdminUserDTO } from "../dto/admin";
import { useFetch } from "@modules/app/modules/http/hooks";
import { API_ROUTES } from "@modules/app/constants";

export default function useAdminUserServices() {
  const { post } = useFetch();

  function signIn(
    props: PostProps<ResponseSignInAdminDTO, SignInAdminUserDTO>
  ) {
    post<ResponseSignInAdminDTO, SignInAdminUserDTO>({
      ...props,
      url: API_ROUTES.ADMIN_USER.SIGN_IN,
    });
  }

  return { signIn };
}
