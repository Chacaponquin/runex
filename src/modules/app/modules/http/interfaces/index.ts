import { HttpError } from "./error";

export interface FetchProps<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: HttpError) => void;
  onFinally?: () => void;
}

export interface BodyProps<T, B> extends FetchProps<T> {
  body: B;
}

export interface PutProps<T, B> extends FetchProps<T> {
  body: B;
}
