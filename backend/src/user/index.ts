import { getAll, login } from './user.controller';
import { Router } from 'express';

const router = Router();
const path = '/users';

router.get('/', getAll).post('/login', login);

export default { router, path };
