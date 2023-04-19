import express from 'express';

import {uploadpost, getpost} from '../controllers/postmodules.js';

const router = express.Router();

router.post('/upost',uploadpost);
router.get('/gpost',getpost);

export default router;