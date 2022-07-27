import { NextFunction, Request, Response } from 'express';
import { Tag, User } from 'shared/database';

const getAll = async ({ body: { userId } }: Request, res: Response, next: NextFunction) => {
  try {
    const tags = await Tag.findAll({
      include: {
        model: User,
        where: { id: userId },
        required: false,
        attributes: { exclude: ['firstName', 'lastName', 'username', 'password', 'refreshToken'] },
        through: { attributes: [] },
      },
    });

    const tagsToDisplay = tags.map(({ id, label, users }) => ({ id, label, selected: users.length !== 0 }));
    return res.json(tagsToDisplay);
  } catch (err) {
    next(err);
  }
};

export { getAll };
