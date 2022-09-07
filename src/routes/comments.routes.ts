import { Router } from 'express';
import commentController from '../controllers/comment.controller';

const router:Router = Router();

router
.route('/comments')
.post(commentController.createComment)

router
.route('/comments/post/:id')
.get(commentController.getCommentsFromPost)

router
.route('/comments/:id')
.delete(commentController.deleteComment)

export default router;