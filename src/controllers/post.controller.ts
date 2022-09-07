import {Request, Response} from 'express';
import IPostModel from '../models/post.model';
import {IStatus} from '../util/status.interface';
import { addDoc, collection, getDocs } from "firebase/firestore";
import {db, DBConfig} from '../util/firebase';

export class PostController{
    constructor(
        private db: DBConfig
    ){}
    
    async createPost(req:Request, res:Response):Promise<Response>{
        
        const UserId = req.body.user_Id;
        const Content= req.body.content;
        const newPost={
            user_Id: UserId,
            content: Content,
            status: true
        }

        const modernResponse = await IPostModel.createPost(newPost)

        return res.json(modernResponse);
    }

    async getUsersPosts(req:Request, res:Response){
        const UserId = req.params.id;
        const modernUser = await IPostModel.getAllPostUser({username:UserId})
        res.json(modernUser);
    }


    async getUserPost(req:Request, res:Response){
      const postid = req.params.id;
      const modernResponse = await IPostModel.getPost({post_id:postid})
      res.json(modernResponse);
    }

    async deletePost(req:Request, res:Response):Promise<Response>{
        const postid = req.params.id;
        const modernResponse = await IPostModel.deletePost({post_id: postid})
       return res.json(modernResponse);
    }

    async blockUser(req:Request, res:Response):Promise<Response>{
        const UserId = req.params.userId;
        const postId = req.params.postId;
        const modernResponse = await IPostModel.blockUser({user_id: UserId, post_id: postId })
        return res.json(modernResponse);
    }
}

const newPost = new PostController(db)

export default newPost

