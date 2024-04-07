import axios, { HttpStatusCode } from "axios";
import { HttpError, RespHttpError } from "../interfaces/error";

export function handleError(error: any) {
  const returnError = new HttpError({
    message: "",
    status: HttpStatusCode.InternalServerError,
  });

  if (axios.isAxiosError(error)) {
    returnError.status = error?.response?.status || 500;
    const errorData = error?.response?.data as RespHttpError;
    returnError.message = errorData?.error?.message || "";
  }

  throw returnError;
}
