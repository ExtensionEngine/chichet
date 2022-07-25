import { IGeneratedTokens } from 'user/types';
import { Response } from 'express';

const setAuthCookies = (tokens: IGeneratedTokens, res: Response) => {
  const { accessToken, refreshToken } = tokens;
  res.cookie('accessToken', accessToken);
  res.cookie('refreshToken', refreshToken, { httpOnly: true });
};

export { setAuthCookies };
