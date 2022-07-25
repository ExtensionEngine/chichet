import { NextFunction, Response } from 'express';
import { IAuthRequest } from 'shared/auth/types';
import { IHttpError } from './types';
import { INTERNAL_SERVER_ERROR } from 'http-status';

const errorHandler = (err: IHttpError, req: IAuthRequest, res: Response, _next: NextFunction) => {
  return err.status
    ? res.status(err.status).json({ error: err.message })
    : res.status(INTERNAL_SERVER_ERROR).json({ error: 'Something went wrong' });
};

export default errorHandler;
