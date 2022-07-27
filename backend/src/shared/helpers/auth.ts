import { IGeneratedTokens } from 'user/types';
import { Response } from 'express';

const setAuthCookies = (tokens: IGeneratedTokens, res: Response) => {
  const { accessToken, refreshToken } = tokens;
  res.cookie('accessToken', accessToken);
  res.cookie('refreshToken', refreshToken, { httpOnly: true });
};

const clearAuthCookies = (res: Response) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
};

export { setAuthCookies, clearAuthCookies };
