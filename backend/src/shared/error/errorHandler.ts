import { NextFunction, Response } from 'express';
import { IAuthRequest } from 'shared/auth/types';
import { IHttpError } from './types';
import { INTERNAL_SERVER_ERROR } from 'http-status';

const errorHandler = (err: IHttpError, _req: IAuthRequest, res: Response, _next: NextFunction) => {
  return err.status
    ? res.status(err.status).json({ message: err.message })
    : res.status(INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong' });
};

export default errorHandler;
