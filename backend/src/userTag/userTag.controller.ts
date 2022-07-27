import { NextFunction, Request, Response } from 'express';
import { OK } from 'http-status';
import { UserTag } from 'shared/database';

const add = async ({ body: { userId, tagIds } }: Request, res: Response, next: NextFunction) => {
  try {
    await UserTag.bulkCreate(
      tagIds.map((tagId: number) => ({
        userId,
        tagId,
      })),
    );

    res.status(OK).json();
  } catch (err) {
    next(err);
  }
};

export { add };
