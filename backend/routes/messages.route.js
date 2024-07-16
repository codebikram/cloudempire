import { Router } from 'express';
import { addMessages } from '../controllers/messages.controller.js';

const router = Router();

// http://localhost:5000/api/posts
router.post('/add', addMessages);

export default router;
