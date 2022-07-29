import { NextFunction, Request, Response } from 'express';
import sequelize, { UserTag } from 'shared/database';
import { OK } from 'http-status';

const add = async ({ body: { userId, tagIds } }: Request, res: Response, next: NextFunction) => {
  const transaction = await sequelize.transaction();

  try {
    await UserTag.destroy({ where: { userId } });

    await UserTag.bulkCreate(
      tagIds.map((tagId: number) => ({
        userId,
        tagId,
      })),
      { ignoreDuplicates: true },
    );

    transaction.commit();
    return res.status(OK).json();
  } catch (err) {
    transaction.rollback();
    next(err);
  }
};

export { add };
