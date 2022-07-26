import { IRegisterRequest, ISignInRequest } from './types';
import { Request, Response } from 'express';
import errorMessages from 'shared/constants/errorMessages';
import { setAuthCookies } from 'shared/helpers/auth';
import { UniqueConstraintError } from 'sequelize';
import { User } from 'shared/database';

const getAll = async (req: Request, res: Response) => {
  const data = await User.findAll();
  return res.json(data);
};

const signIn = async ({ body: { username, password } }: ISignInRequest, res: Response) => {
  const user = await User.unscoped().findOne({ where: { username } });
  if (!user) return res.status(401).json({ message: errorMessages.SIGN_IN_ERROR });

  const isPasswordCorrect = await user.passwordCompare(password);
  if (!isPasswordCorrect) return res.status(401).json({ message: errorMessages.SIGN_IN_ERROR });

  const tokens = await user.generateTokens();
  setAuthCookies(tokens, res);

  return res.status(200).send();
};

const register = async ({ body }: IRegisterRequest, res: Response) => {
  try {
    const user = await User.create(body);

    const tokens = await user.generateTokens();
    setAuthCookies(tokens, res);

    return res.status(201).send();
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      return res.status(409).json({ message: errorMessages.REGISTER_ERROR });
    }
    return res.status(500).end();
  }
};

export { getAll, signIn, register };
