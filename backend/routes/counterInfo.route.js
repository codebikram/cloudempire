import { Router } from 'express';
import { getCounterInfo } from '../controllers/counterInfo.controller.js';

const router = Router();

// http://localhost:5000/api/info
router.get('/', getCounterInfo);

export default router;
