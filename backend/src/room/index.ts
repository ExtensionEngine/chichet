import authenticate from 'shared/auth/authenticate';
import { getAll } from './room.controller';
import refresh from 'shared/auth/refresh';
import { Router } from 'express';

const router = Router();
const path = '/rooms';

router.get('/', authenticate, refresh, getAll);

export default { router, path };
