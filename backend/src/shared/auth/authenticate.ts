import { JsonWebTokenError, verify as jwtVerify, TokenExpiredError } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Audience from './audience';
import { IJwtPayloadDecoded } from './types';
import { User } from '../database';

const FORBIDDEN_MESSAGE = 'Your access to this resource is forbidden';

export default async function authenticate(req: Request, res: Response, next: NextFunction) {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(403).json({ error: FORBIDDEN_MESSAGE });
  }
  try {
    const { id, aud } = jwtVerify(accessToken, process.env.ACCESS_TOKEN_SECRET || '') as IJwtPayloadDecoded;
    if (aud !== Audience.Scope.Access) {
      return res.status(403).json({ error: FORBIDDEN_MESSAGE });
    }
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(403).json({ error: FORBIDDEN_MESSAGE });
    }
    req.user = user;
    return next();
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      return next();
    }
    if (err instanceof JsonWebTokenError) {
      return res.status(403).json({ error: FORBIDDEN_MESSAGE });
    }
  }
}
