import { Router, Express } from "express";
import userRouter from './user.routes';
import postsRouter from './post.routes';
import commentsRouter from './comments.routes';


const adminRoutes = (app:Express)=>{
    const router = Router();
    app.use('/api/v1', router);
    router.use(userRouter);
    router.use(postsRouter);
    router.use(commentsRouter);
}

export default adminRoutes;