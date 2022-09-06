import { Router } from 'express';

const router:Router = Router();

router
.route('/comments')
.get()
.post()

router
.route('/comments/:id')
.delete()

export default router;