import { JsonWebTokenError, verify as jwtVerify, TokenExpiredError } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Audience from './audience';
import errorMessages from 'shared/constants/errorMessages';
import { IJwtPayloadDecoded } from './types';
import { setAuthCookies } from './helpers';
import { User } from '../database';

const refresh = async (req: Request, res: Response, next: NextFunction) => {
  if (req.user) return next();

  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return res.status(403).json({ message: errorMessages.FORBIDDEN_ERROR });
  }

  try {
    const user = await User.findOne({ where: { refreshToken } });
    const { id, username, aud } = jwtVerify(refreshToken, process.env.REFRESH_TOKEN_SECRET || '') as IJwtPayloadDecoded;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!user || id !== user.id || username !== user.username || aud !== Audience.Scope.Refresh) {
      return res.status(403).json({ message: errorMessages.FORBIDDEN_ERROR });
    }

    req.user = user;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tokens = await user.generateTokens();
    setAuthCookies(tokens, res);

    return next();
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      return res.status(403).json({ message: errorMessages.TOKEN_EXPIRED_ERROR });
    }

    if (err instanceof JsonWebTokenError) {
      return res.status(403).json({ message: errorMessages.FORBIDDEN_ERROR });
    }
  }
};

export default refresh;
