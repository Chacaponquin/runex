"use client";

import axios from "axios";
import { useEnv } from "@modules/app/modules/env/hooks";
import { useUser } from "@modules/user/hooks";
import { useEffect, useMemo } from "react";
import { FetchProps, PostProps } from "../../interfaces";

export default function useFetch() {
  const { getToken } = useUser();
  const { API_ROUTE } = useEnv();

  const instance = useMemo(() => {
    return axios.create({
      baseURL: API_ROUTE,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    });
  }, [API_ROUTE, getToken]);

  useEffect(() => {
    instance.interceptors.request.use(undefined, function (error) {
      Promise.reject(error);
    });
  }, []);

  function get<T>(props: FetchProps<T> & { url: string }): void {
    instance
      .get<T>(props.url)
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

  function remove<T>(props: FetchProps<T> & { url: string }): void {
    instance
      .delete(props.url)
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

  function post<T, B>(props: PostProps<T, B> & { url: string }): void {
    instance
      .post<T>(props.url, props.body)
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

  function put<T, B>(props: PostProps<T, B> & { url: string }): void {
    instance
      .put<T>(props.url, props.body)
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

  return { get, post, instance, remove, put };
}
