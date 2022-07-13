import { Request, Response } from 'express';
import { ILoginRequest } from './types';
import jwt from 'jsonwebtoken';
import { LOGIN_ERROR } from 'shared/constants/errorMessages';
import User from './user.model';

const getAll = async (req: Request, res: Response) => {
  const data = await User.findAll();
  return res.json(data);
};

const login = async ({ body: { username, password } }: ILoginRequest, res: Response) => {
  const user = await User.unscoped().findOne({ where: { username } });
  if (!user) return res.status(401).json({ message: LOGIN_ERROR });

  const isPasswordCorrect = await !user.passwordCompare(password);
  if (!isPasswordCorrect) return res.status(401).json({ message: LOGIN_ERROR });

  const { id } = user;
  const payload = { id, username };
  const secret = process.env.ACCESS_TOKEN_SECRET || '';
  const accessToken = jwt.sign(payload, secret);

  return res.json(accessToken);
};

export { getAll, login };
