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
            content: Content
        }

        return res.send(IPostModel.createPost(newPost));
    }

    getUsersPosts(req:Request, res:Response){
        const UserId = req.body.user_Id;
        res.send(IPostModel.getAllPostUser(UserId));
    }


    getUserPost(req:Request, res:Response){
      const postid = req.body.postid;
    
        res.send(IPostModel.getPost(postid));
    }

    async deletePost(req:Request, res:Response):Promise<Response>{
        const postid = req.body.postid;
    
       return res.send(IPostModel.deletePost(postid));
    }

    async blockUser(req:Request, res:Response):Promise<Response>{
        const UserId = req.body.user_Id;
    
        return res.send(IPostModel.blockUser(UserId));
    }
}

const newPost = new PostController(db)

