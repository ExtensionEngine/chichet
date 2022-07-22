import { JsonWebTokenError, JwtPayload, verify as jwtVerify, TokenExpiredError } from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import Audience from './audience';
import errorMessages from 'shared/constants/errorMessages';
import { IAuthRequest } from './types';
import User from 'user/user.model';

const authenticate = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(403).json({ message: errorMessages.FORBIDDEN_ERROR });
  }

  try {
    const { id, aud } = jwtVerify(accessToken, process.env.ACCESS_TOKEN_SECRET || '') as JwtPayload;
    if (aud !== Audience.Scope.Access) {
      return res.status(403).json({ message: errorMessages.FORBIDDEN_ERROR });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(403).json({ message: errorMessages.FORBIDDEN_ERROR });
    }

    req.user = user;

    return next();
  } catch (err) {
    if (err instanceof TokenExpiredError) return next();

    if (err instanceof JsonWebTokenError) {
      return res.status(403).json({ message: errorMessages.FORBIDDEN_ERROR });
    }
  }
};

export default authenticate;
