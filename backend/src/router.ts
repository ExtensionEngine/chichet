import { Router } from 'express';

// eslint-disable-next-line sort-imports
import message from 'message';
import room from 'room';
import tag from 'tag';
import user from 'user';

const router = Router();

router.use(message.path, message.router);
router.use(room.path, room.router);
router.use(tag.path, tag.router);
router.use(user.path, user.router);

export default router;
