import { getAll, register, signIn, signOut } from './user.controller';
import { Router } from 'express';

const router = Router();
const path = '/users';

router.get('/', getAll).post('/sign-in', signIn).post('/register', register).post('/sign-out', signOut);

export default { router, path };
