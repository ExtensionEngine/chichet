import { ILoginRequest, IRegisterRequest } from './types';
import { Request, Response } from 'express';
import errorMessages from 'shared/constants/errorMessages';
import { UniqueConstraintError } from 'sequelize';
import User from './user.model';

const getAll = async (req: Request, res: Response) => {
  const data = await User.findAll();
  return res.json(data);
};

const login = async ({ body: { username, password } }: ILoginRequest, res: Response) => {
  const user = await User.unscoped().findOne({ where: { username } });
  if (!user) return res.status(401).json({ message: errorMessages.LOGIN_ERROR });

  const isPasswordCorrect = await user.passwordCompare(password);
  if (!isPasswordCorrect) return res.status(401).json({ message: errorMessages.LOGIN_ERROR });

  const { accessToken, refreshToken } = await user.generateTokens();
  res.cookie('accessToken', accessToken);
  res.cookie('refreshToken', refreshToken, { httpOnly: true });

  return res.status(200).send();
};

const register = async ({ body }: IRegisterRequest, res: Response) => {
  try {
    const user = await User.create(body);

    const { accessToken, refreshToken } = await user.generateTokens();
    res.cookie('accessToken', accessToken);
    res.cookie('refreshToken', refreshToken, { httpOnly: true });

    return res.status(201).send();
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      return res.status(409).json({ message: errorMessages.REGISTER_ERROR });
    }
    return res.status(500).end();
  }
};

export { getAll, login, register };
