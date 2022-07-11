import { getAll } from './message.controller';
import { Router } from 'express';

const router = Router();
const path = '/messages';

router.get('', getAll);

export default { router, path };
