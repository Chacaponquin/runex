"use client";

import axios, { AxiosResponse } from "axios";
import { useEnv } from "@modules/app/modules/env/hooks";
import { useUser } from "@modules/user/hooks";
import { useEffect, useMemo } from "react";
import { FetchProps, BodyProps } from "../../interfaces";
import { handleError } from "../../utils";

export default function useFetch() {
  const { getAccessToken } = useUser();
  const { API_ROUTE } = useEnv();

  const instance = useMemo(() => {
    return axios.create({
      baseURL: API_ROUTE,
      headers: {
        authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }, [API_ROUTE]);

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
    resolve(instance.get<T>(props.url), props);
  }

  function remove<T>(props: FetchProps<T> & { url: string }): void {
    resolve(instance.delete(props.url), props);
  }

  function post<T, B>(props: BodyProps<T, B> & { url: string }): void {
    resolve(instance.post<T>(props.url, props.body), props);
  }

  function put<T, B>(props: BodyProps<T, B> & { url: string }): void {
    resolve(instance.put<T>(props.url, props.body), props);
  }

  return { get, post, instance, remove, put };
}
