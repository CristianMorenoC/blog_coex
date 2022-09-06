import {Request, Response} from 'express';
import IPostModel from '../models/post.model';
import {IStatus} from '../util/status.interface';
import { addDoc, collection, getDocs } from "firebase/firestore";
import {db, DBConfig} from '../util/firebase';

export class PostController{
    constructor(
        private db: DBConfig
    ){}
    
    async createPost(req:Request, res:Response) {
        
        const UserId = req.body.user_Id;
        const Content= req.body.content
        
        const newPost: object = {
            id: UserId,
            content: Content
        }
        try {
            const ref = await addDoc(collection(this.db.dbConnection, "post"), newPost)
            return res.send( {status: true, info: `post creado con el id: ${ref.id}`})
        } catch (error) {
            console.log(error)
            return res.send({status: false, info: 'No se pudo crear el post'})
        }

    }


    getUsersPosts(req:Request, res:Response):IPostModel[]{
        const UserId = req.body.user_Id;
        
        
        return IPostModel['info'];
    }


    getUserPost(req:Request, res:Response):IPostModel{
        const nombre = req.body.username;
        const postid = req.body.postid;
    
        res.send(IPostModel);
    }

    async deletePost(req:Request, res:Response):Promise<IStatus>{
        const postid = req.body.postid;
    
        try {
            const ref = await addDoc(collection(this.db.dbConnection, "post"), newPost)
            return {status: true, info: `post creado con el id: ${ref.id}`}
        } catch (error) {
            console.log(error)
            return {status: false, info: 'No se pudo crear el post'}
        }
    }

    async blockUser(req:Request, res:Response):Promise<IStatus>{
        
    }
}

const newPost = new PostController(db)

