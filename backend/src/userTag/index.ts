import { add } from './userTag.controller';
import authenticate from 'shared/auth/authenticate';
import refresh from 'shared/auth/refresh';
import { Router } from 'express';

const router = Router();
const path = '/user-tags';

router.post('/', authenticate, refresh, add);

export default { router, path };
