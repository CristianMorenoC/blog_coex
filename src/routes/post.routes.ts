import { Router } from 'express';
import postController from '../controllers/post.controller';

const router:Router = Router();

router
.route('/posts')
.post(postController.createPost)

router
.route('/posts/:id')
.get(postController.getUserPost)
.delete(postController.deletePost)

router
.route('posts/user/:username')
.post(postController.blockUser)
.get(postController.getUsersPosts)

export default router;