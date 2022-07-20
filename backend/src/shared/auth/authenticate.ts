import { JsonWebTokenError, verify as jwtVerify, TokenExpiredError } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Audience from './audience';
import { FORBIDDEN_ERROR } from 'shared/constants/errorMessages';
import { IJwtPayloadDecoded } from './types';
import { User } from '../database';

export default async function authenticate(req: Request, res: Response, next: NextFunction) {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(403).json({ error: FORBIDDEN_ERROR });
  }
  try {
    const { id, aud } = jwtVerify(accessToken, process.env.ACCESS_TOKEN_SECRET || '') as IJwtPayloadDecoded;
    if (aud !== Audience.Scope.Access) {
      return res.status(403).json({ error: FORBIDDEN_ERROR });
    }
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(403).json({ error: FORBIDDEN_ERROR });
    }
    req.user = user;
    return next();
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      return next();
    }
    if (err instanceof JsonWebTokenError) {
      return res.status(403).json({ error: FORBIDDEN_ERROR });
    }
  }
}
