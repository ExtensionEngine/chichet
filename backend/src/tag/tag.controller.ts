import { NextFunction, Response } from 'express';
import sequelize, { Tag } from 'shared/database';
import { IAuthRequest } from 'shared/auth/types';

const getAll = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  const userId = req.user?.id;

  try {
    const tags = await Tag.findAll({
      attributes: {
        include: [
          [
            sequelize.literal(`(
                  SELECT true
                  FROM "userTags"
                  WHERE "userTags"."tagId" = "tag"."id" AND "userTags"."userId" = ${userId}
              )`),
            'selected',
          ],
        ],
      },
    });

    return res.json(tags);
  } catch (err) {
    next(err);
  }
};

export { getAll };
