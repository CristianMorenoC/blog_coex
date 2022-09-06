import {Request, Response} from 'express';
import IPost from '../models/post.model';
import IStatus from '../models/status.model';
import db from '../util/firebase'
import { addDoc, collection, getDocs } from "firebase/firestore";

export class createPost(req:Request, res:Response): Promise<IStatus> {
    const UserId = req.body.userId;
    const content = req.body.content;
     
        const newPost: object = {
            id: UserId,
            content: content
        }

        try {
            const ref = await addDoc(collection(this.db.dbConnection, "post"), newPost)

            return {status: true, info: `post creado con el id: ${ref.id}`}
            
        } catch (error) {
            console.log(error)
            return {status: false, info: 'No se pudo crear el post'}
        }
    }
    res.send(IStatus);

    


export const getUsersPosts= (req:Request, res:Response)=>{
    const nombre = req.body.username;
    
    
    res.send(IPost[res]);
}

export const getUserPost= (req:Request, res:Response)=>{
    const nombre = req.body.username;
    const postid = req.body.postid;

    res.send(IPost);
}

export const deletePost= (req:Request, res:Response)=>{
    const postid = req.body.postid;

    res.send(IStatus);
}

export const blockUser= (req:Request, res:Response)=>{
    return IStatus;
}