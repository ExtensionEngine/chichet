import { getAll } from './user.controller';
import { Router } from 'express';

const router = Router();
const path = '/users';

router.get('/', getAll);

export default { router, path };
