import { Router } from 'express';
import { getAllPosts, getPost } from '../controllers/posts.controller.js';

const router = Router();

// http://localhost:5000/api/posts
router.get('/', getAllPosts);

// http://localhost:5000/api/posts/:id
router.get('/:id', getPost);
export default router;
