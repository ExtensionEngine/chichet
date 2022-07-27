import { clearAuthCookies, setAuthCookies } from 'shared/helpers/auth';
import { CONFLICT, CREATED, OK, UNAUTHORIZED } from 'http-status';
import { IRegisterRequest, ISignInRequest } from './types';
import { NextFunction, Request, Response } from 'express';
import errorMessages from 'shared/constants/errorMessages';
import HttpError from 'shared/error/httpError';
import { UniqueConstraintError } from 'sequelize';
import { User } from 'shared/database';

const signIn = async ({ body: { username, password } }: ISignInRequest, res: Response, next: NextFunction) => {
  const user = await User.unscoped().findOne({ where: { username } });
  if (!user) return next(new HttpError(UNAUTHORIZED, errorMessages.SIGN_IN_ERROR));

  const isPasswordCorrect = await user.passwordCompare(password);
  if (!isPasswordCorrect) return next(new HttpError(UNAUTHORIZED, errorMessages.SIGN_IN_ERROR));

  const tokens = await user.generateTokens();
  setAuthCookies(tokens, res);

  const { id, firstName, lastName } = user;
  return res.status(OK).json({ id, username, firstName, lastName });
};

const register = async ({ body }: IRegisterRequest, res: Response, next: NextFunction) => {
  try {
    const user = await User.create(body);

    const tokens = await user.generateTokens();
    setAuthCookies(tokens, res);

    const { id, username, firstName, lastName } = user;
    return res.status(CREATED).json({ id, username, firstName, lastName });
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      return next(new HttpError(CONFLICT, errorMessages.REGISTER_ERROR));
    }
    return next(new Error());
  }
};

const signOut = (req: Request, res: Response) => {
  clearAuthCookies(res);
  res.status(OK).send();
};

export { signIn, register, signOut };
