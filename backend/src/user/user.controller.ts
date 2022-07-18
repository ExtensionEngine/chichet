import { IGeneratedTokens, ILoginRequest, IRegisterRequest, IUser } from './types';
import { LOGIN_ERROR, REGISTER_ERROR } from 'shared/constants/errorMessages';
import { Request, Response } from 'express';
import { UniqueConstraintError } from 'sequelize';
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

  const tokens = generateTokens(user);
  return res.json(tokens);
};

const register = async ({ body }: IRegisterRequest, res: Response) => {
  try {
    const user = await User.create(body);
    const tokens = generateTokens(user);
    return res.status(201).json(tokens);
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      return res.status(409).json({ message: REGISTER_ERROR });
    }
    return res.status(500).end();
  }
};

export { getAll, login, register };

function generateTokens(user: IUser): IGeneratedTokens {
  const accessToken = user.generateAccessToken({ expiresIn: process.env.ACCESS_TOKEN_DURATION });
  return { accessToken };
}
