import { Request, Response } from 'express';
import { User } from 'shared/database';

const getAll = async (req: Request, res: Response) => {
  const data = await User.findAll();
  return res.json(data);
};

export { getAll };
