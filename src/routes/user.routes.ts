import { Router } from 'express';
import userController from '../controllers/user.controller';

const router:Router = Router();

router
.route('/user')
.post(userController.createUser);

export default router;