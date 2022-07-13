import { getAll, login, register } from './user.controller';
import { Router } from 'express';

const router = Router();
const path = '/users';

router.get('/', getAll).post('/login', login).post('/register', register);

export default { router, path };
