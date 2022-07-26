import { CONFLICT, CREATED, OK, UNAUTHORIZED } from 'http-status';
import { ILoginRequest, IRegisterRequest } from './types';
import { NextFunction, Request, Response } from 'express';
import errorMessages from 'shared/constants/errorMessages';
import HttpError from 'shared/error/httpError';
import { setAuthCookies } from 'shared/helpers/auth';
import { UniqueConstraintError } from 'sequelize';
import { User } from 'shared/database';

const getAll = async (req: Request, res: Response) => {
  const data = await User.findAll();
  return res.json(data);
};

const login = async ({ body: { username, password } }: ILoginRequest, res: Response, next: NextFunction) => {
  const user = await User.unscoped().findOne({ where: { username } });
  if (!user) return next(new HttpError(UNAUTHORIZED, errorMessages.LOGIN_ERROR));

  const isPasswordCorrect = await user.passwordCompare(password);
  if (!isPasswordCorrect) return next(new HttpError(UNAUTHORIZED, errorMessages.LOGIN_ERROR));

  const tokens = await user.generateTokens();
  setAuthCookies(tokens, res);

  return res.status(OK).send();
};

const register = async ({ body }: IRegisterRequest, res: Response, next: NextFunction) => {
  try {
    const user = await User.create(body);

    const tokens = await user.generateTokens();
    setAuthCookies(tokens, res);

    return res.status(CREATED).send();
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      return next(new HttpError(CONFLICT, errorMessages.REGISTER_ERROR));
    }
    return next(new Error());
  }
};

export { getAll, login, register };
