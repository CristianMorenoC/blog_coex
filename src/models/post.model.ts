import { db, DBConfig } from "../util/firebase";
import { addDoc, collection, getDoc, setDoc, doc  } from "firebase/firestore";
import { IStatus } from "../util/status.interface";

export interface IPostModel {
    createPost(data:{user_Id: string, content: string}): Promise<IStatus>,
    getPost(data: {post_id: string}): Promise<IStatus>,
    updatedPost(data: {post_id: string, content: string, status: string}): Promise<IStatus>,
    deletePost(data: {post_id: string}): Promise<IStatus>,
    blockUser(data: {user_id: string}): Promise<IStatus>
}

export class PostModel implements IPostModel  {

    constructor(
        private db: DBConfig
    ){}
    async createPost(data: { user_Id: string; content: string; }): Promise<IStatus> {
        
        try {

            const newPost: object = {
                id: data.user_Id,
                content: data.content
            }

            const ref = await addDoc(collection(this.db.dbConnection, "post"), newPost)

            return {status: true, info: `post creado con el id: ${ref.id}`}
            
        } catch (error) {
            console.log(error)
            return {status: false, info: `el post no pudo ser creado ${error}`}
        }
    }

    async getPost(data: { post_id: string; }): Promise<IStatus>{
        try {
            const post = await getDoc(doc(this.db.dbConnection, "post", data.post_id))

            return {status: true, info: `${post}`}
        } catch (error) {
            return {status: false, info: `el post no pudo ser obtenido ${error}`}
        }

    }
    async getPosts(data: { post_id: string; }): Promise<IStatus>{
        try {
            const post = await getDoc(doc(this.db.dbConnection, "post", data.post_id))

            return {status: true, info: `${post}`}
        } catch (error) {
            return {status: false, info: `el post no pudo ser obtenido ${error}`}
        }

    }
    async updatedPost( data:{ post_id: string; content: string; status: string; }): Promise<IStatus>{
        try {

            const newPost = {
                content: data.content,
                status: data.status
            }

            const postRef = collection(this.db.dbConnection, "post", data.post_id)

            await setDoc(doc(postRef, data.post_id), newPost)

            return {status: true, info: `el post fue actualizado`}
        } catch (error) {
            return {status: false, info: `el post no pudo ser actualizado ${error}`}
        }
    }
    async deletePost( data:{ post_id: string; }): Promise<IStatus>{
        try {
            const newPost: object = {
                status: false
            }

            const postRef = collection(this.db.dbConnection, "post", data.post_id)

            await setDoc(doc(postRef, data.post_id), newPost)

            return {status: true, info: `el post ha sido borrado`}
         
        } catch (error) {
            return {status: false, info: 'el post no ha sido borrado'}
        }        

    }
    async blockUser( data:{ user_id: string; }): Promise<IStatus>{
        try {
            const userBlock: object = {
                id: data.user_id
            }

            await addDoc(collection(this.db.dbConnection, "BlockedUsers"), userBlock)

            return {status: true, info: `el usuario con el id: ${data.user_id} fue bloqueado`}

        } catch (error) {
            return {status: false, info: `el usuario con el id: ${data.user_id} no pudo ser bloqueado`}
        }
    }

    

}

export default new PostModel(db)