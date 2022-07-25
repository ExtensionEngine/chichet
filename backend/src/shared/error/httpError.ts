import { IHttpError } from './types';

class HttpError extends Error implements IHttpError {
  name!: string;
  status!: number;

  constructor(status: number, ...params: any) {
    super(...params);

    this.name = 'HttpError';
    this.status = status;

    Error.captureStackTrace(this, HttpError);
  }
}

export default HttpError;
