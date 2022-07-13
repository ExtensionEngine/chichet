import { ILoginRequest, IRegisterRequest } from './types';
import { Request, Response } from 'express';
import { LOGIN_ERROR } from 'shared/constants/errorMessages';
import User from './user.model';

const getAll = async (req: Request, res: Response) => {
  const data = await User.findAll();
  return res.json(data);
};

const login = async ({ body: { username, password } }: ILoginRequest, res: Response) => {
  const user = await User.unscoped().findOne({ where: { username } });
  if (!user) return res.status(401).json({ message: LOGIN_ERROR });

  const isPasswordCorrect = await user.passwordCompare(password);
  if (!isPasswordCorrect) return res.status(401).json({ message: LOGIN_ERROR });

  const data = { accessToken: user.generateAccessToken() };
  return res.json(data);
};

const register = async ({ body }: IRegisterRequest, res: Response) => {
  const user = await User.create(body);
  const data = { accessToken: user.generateAccessToken() };
  return res.status(201).json(data);
};

export { getAll, login, register };
