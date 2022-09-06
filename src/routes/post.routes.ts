import { Router } from 'express';

const router:Router = Router();

router
.route('/posts')
.get()
.post()

router
.route('/posts/:id')
.get()
.put()
.delete()

export default router;