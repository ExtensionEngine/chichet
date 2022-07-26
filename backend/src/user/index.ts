import { getAll, register, signIn } from './user.controller';
import { Router } from 'express';

const router = Router();
const path = '/users';

router.get('/', getAll).post('/sign-in', signIn).post('/register', register);

export default { router, path };
