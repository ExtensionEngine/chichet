import { Request, Response } from 'express';
import { Room } from 'shared/database';

const getAll = async (req: Request, res: Response) => {
  const data = await Room.findAll();
  return res.json(data);
};

export { getAll };
