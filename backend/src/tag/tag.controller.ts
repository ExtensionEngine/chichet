import { NextFunction, Response } from 'express';
import { Tag, User } from 'shared/database';
import { IAuthRequest } from 'shared/auth/types';

const getAll = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  const userId = req.user?.id;

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
