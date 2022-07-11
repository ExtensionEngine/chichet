import { Request, Response } from 'express';
import { Message } from 'shared/database';

const getAll = async (req: Request, res: Response) => {
  const data = await Message.findAll();
  return res.json(data);
};

export { getAll };
