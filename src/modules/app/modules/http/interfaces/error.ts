interface Props {
  status: number;
  message: string;
}

export class HttpError extends Error {
  status: number;
  message: string;

  constructor(props: Props) {
    super(props.message);
    this.status = props.status;
    this.message = props.message;
  }
}

export interface RespHttpError {
  error: HttpError;
  time: string;
  path: number;
}
