"use client";

import { STORAGE_KEYS } from "@modules/app/constants";

export default function useLocalStorage() {
  function get(key: STORAGE_KEYS): string | undefined {
    let value: undefined | string;

    if (typeof window !== "undefined") {
      value = window.localStorage.getItem(key) || undefined;
    } else {
      value = undefined;
    }

    return value;
  }

  function set(key: STORAGE_KEYS, value: string): void {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
  }

  function remove(key: STORAGE_KEYS): void {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  }

  return { get, set, remove };
}
