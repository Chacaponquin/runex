"use client";

import axios, { AxiosResponse } from "axios";
import { useEnv } from "@modules/app/modules/env/hooks";
import { useUser } from "@modules/user/hooks";
import { useEffect, useMemo } from "react";
import { FetchProps, BodyProps } from "../interfaces";
import { handleError } from "../utils";

export default function useFetch() {
  const { getAccessToken } = useUser();
  const { API_ROUTE } = useEnv();

  const instance = useMemo(() => {
    return axios.create({
      baseURL: API_ROUTE,
    });
  }, []);

  function buildHeader(token: string | undefined) {
    const sendToken = token ? token : getAccessToken();

    return {
      authorization: `Bearer ${sendToken}`,
    };
  }

  useEffect(() => {
    instance.interceptors.request.use(undefined, handleError);
    instance.interceptors.response.use(undefined, handleError);
  }, []);

  function resolve<T>(
    promise: Promise<AxiosResponse<T, any>>,
    props: FetchProps<T>
  ): void {
    promise
      .then((data) => {
        if (props.onSuccess) {
          props.onSuccess(data.data);
        }
      })
      .catch((error) => {
        if (props.onError) {
          props.onError(error);
        }
      })
      .finally(() => {
        if (props.onFinally) {
          props.onFinally();
        }
      });
  }

  function get<T>(props: FetchProps<T> & { url: string }): void {
    resolve(
      instance.get<T>(props.url, { headers: buildHeader(props.authorization) }),
      props
    );
  }

  function remove<T>(props: FetchProps<T> & { url: string }): void {
    resolve(
      instance.delete(props.url, { headers: buildHeader(props.authorization) }),
      props
    );
  }

  function post<T, B>(props: BodyProps<T, B> & { url: string }): void {
    resolve(
      instance.post<T>(props.url, props.body, {
        headers: buildHeader(props.authorization),
      }),
      props
    );
  }

  function put<T, B>(props: BodyProps<T, B> & { url: string }): void {
    resolve(
      instance.put<T>(props.url, props.body, {
        headers: buildHeader(props.authorization),
      }),
      props
    );
  }

  return { get, post, instance, remove, put };
}
