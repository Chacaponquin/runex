/* eslint-disable*/
import axios from "axios";
import { HttpError, RespHttpError } from "../interfaces/error";

export function handleResponseError(error: any): HttpError {
  const returnError: HttpError = { message: "", status: 500 };

  if (axios.isAxiosError(error)) {
    returnError.status = error?.response?.status || 500;
    const errorData = error?.response?.data as RespHttpError;
    returnError.message = errorData?.error?.message || "";
  }

  return returnError;
}
