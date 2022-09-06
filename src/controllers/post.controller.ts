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

        return res.json(IPostModel.createPost(newPost));
    }

    getUsersPosts(req:Request, res:Response){
        const UserId = req.params.user_Id;
        res.json(IPostModel.getAllPostUser({username:UserId}));
    }


    getUserPost(req:Request, res:Response){
      const postid = req.params.postid;
    
        res.json(IPostModel.getPost({post_id:postid}));
    }

    async deletePost(req:Request, res:Response):Promise<Response>{
        const postid = req.params.id;
    
       return res.json(IPostModel.deletePost({post_id: postid}));
    }

    async blockUser(req:Request, res:Response):Promise<Response>{
        const UserId = req.params.id;
    
        return res.json(IPostModel.blockUser({user_id: UserId}));
    }
}

const newPost = new PostController(db)

export default newPost

