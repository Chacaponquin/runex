export default function useEnv() {
  const API_ROUTE = process.env.API_URL as string;

  return { API_ROUTE };
}
