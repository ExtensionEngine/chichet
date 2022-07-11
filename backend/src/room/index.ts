import { getAll } from './room.controller';
import { Router } from 'express';

const router = Router();
const path = '/rooms';

router.get('', getAll);

export default { router, path };
