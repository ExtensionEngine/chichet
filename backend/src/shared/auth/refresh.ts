import { JsonWebTokenError, verify as jwtVerify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Audience from './audience';
import { IJwtPayloadDecoded } from './types';
import { User } from '../database';

const FORBIDDEN_MESSAGE = 'Your access to this resource is forbidden';

export default async function refresh(req: Request, res: Response, next: NextFunction) {
  if (req.user) return next();
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return res.status(403).json({ error: FORBIDDEN_MESSAGE });
  }
  try {
    const user = await User.findOne({ where: { refreshToken } });
    const { id, username, aud } = jwtVerify(refreshToken, process.env.REFRESH_TOKEN_SECRET || '') as IJwtPayloadDecoded;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!user || id !== user.id || username !== user.username) {
      return res.status(403).json({ error: FORBIDDEN_MESSAGE });
    }
    if (aud !== Audience.Scope.Refresh) {
      return res.status(403).json({ error: FORBIDDEN_MESSAGE });
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await user.generateTokens();
    req.user = user;
    res.cookie('accessToken', newAccessToken);
    res.cookie('refreshToken', newRefreshToken, { httpOnly: true });
    return next();
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      return res.status(403).json({ error: FORBIDDEN_MESSAGE });
    }
  }
}
