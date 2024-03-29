"use client";

import axios from "axios";
import { useEnv } from "@modules/app/modules/env/hooks";
import { useUser } from "@modules/user/hooks";
import { useEffect, useMemo } from "react";
import { FetchProps, PostProps } from "../../interfaces";

export default function useFetch() {
  const { getToken } = useUser();
  const { API_ROUTE } = useEnv();

  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: API_ROUTE,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    });
  }, [API_ROUTE, getToken]);

  useEffect(() => {
    axiosInstance.interceptors.request.use(undefined, function (error) {
      Promise.reject(error);
    });
  }, []);

  function get<T>(props: FetchProps<T> & { url: string }): void {
    axiosInstance
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
    axiosInstance
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
    axiosInstance
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
    axiosInstance
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

  return { get, post, axiosInstance, remove, put };
}
