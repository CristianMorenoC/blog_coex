import { Router } from 'express';

const router:Router = Router();

router
.route('/users')
.post()

export default router;