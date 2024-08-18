import { Router } from 'express';
import { addComment } from '../controllers/comment.controller.js';

const router = Router();

// http://localhost:5000/api/comment
router.post('/add', addComment);

export default router;
