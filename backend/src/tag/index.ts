import authenticate from 'shared/auth/authenticate';
import { getAll } from './tag.controller';
import refresh from 'shared/auth/refresh';
import { Router } from 'express';

const router = Router();
const path = '/tags';

router.get('/', authenticate, refresh, getAll);

export default { router, path };
