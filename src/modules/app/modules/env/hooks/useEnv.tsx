"use client";

export default function useEnv() {
  const API_ROUTE = process.env.NEXT_PUBLIC_API_ROUTE as string;

  return { API_ROUTE };
}
