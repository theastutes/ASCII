import express from 'express'
import {getquiz,quizform} from '../controllers/quizmodule.js'

const router = express.Router();

router.post('/quizform',quizform);
router.get('/getquiz',getquiz);

export default router;