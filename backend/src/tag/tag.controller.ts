import { Request, Response } from 'express';
import { Tag } from 'shared/database';

const getAll = async (req: Request, res: Response) => {
  const data = await Tag.findAll();
  return res.json(data);
};

export { getAll };
