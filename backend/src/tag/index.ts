import { getAll } from './tag.controller';
import { Router } from 'express';

const router = Router();
const path = '/tags';

router.get('/', getAll);

export default { router, path };
