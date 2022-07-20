import { FORBIDDEN_ERROR, TOKEN_EXPIRED_ERROR } from 'shared/constants/errorMessages';
import { JsonWebTokenError, verify as jwtVerify, TokenExpiredError } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Audience from './audience';
import { IJwtPayloadDecoded } from './types';
import { User } from '../database';

export default async function refresh(req: Request, res: Response, next: NextFunction) {
  if (req.user) return next();
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return res.status(403).json({ error: FORBIDDEN_ERROR });
  }
  try {
    const user = await User.findOne({ where: { refreshToken } });
    const { id, username, aud } = jwtVerify(refreshToken, process.env.REFRESH_TOKEN_SECRET || '') as IJwtPayloadDecoded;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!user || id !== user.id || username !== user.username || aud !== Audience.Scope.Refresh) {
      return res.status(403).json({ error: FORBIDDEN_ERROR });
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await user.generateTokens();
    req.user = user;
    res.cookie('accessToken', newAccessToken);
    res.cookie('refreshToken', newRefreshToken, { httpOnly: true });
    return next();
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      return res.status(403).json({ error: TOKEN_EXPIRED_ERROR });
    }
    if (err instanceof JsonWebTokenError) {
      return res.status(403).json({ error: FORBIDDEN_ERROR });
    }
  }
}
