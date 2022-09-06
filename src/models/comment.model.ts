import { IStatus } from "../util/status.interface";
import { addDoc, collection, getDoc, setDoc, doc  } from "firebase/firestore";
import { DBConfig, db } from "../util/firebase";

export interface ICommentModel {
    createComment(data: {post_id: string, user_id: string, content: string}):Promise<IStatus>,
    getCommentsFromPost(data: {post_id: string}):Promise<any[]>,
    deleteComment(data: {comment_id: string}):Promise<IStatus>
}

class CommentModel implements ICommentModel {
    constructor(
        private db:DBConfig
    ){
    }
    async createComment(data: { post_id: string; user_id: string; content: string; }): Promise<IStatus> {
        try {
            const ref = await addDoc(collection(this.db.dbConnection, "comments"), data);

            return {status: true, info: `comentario creado con el id: ${ref.id}`}
        } catch (err) {
            console.log(err)
            return {status: false, info: `el comentario no pudo ser creado ${err}`}
        }
    }
    async getCommentsFromPost(data: { post_id: string; }): Promise<any[]> {
        try {
            const comment = await getDoc(doc(this.db.dbConnection, "comments", data.post_id));
            return comment.data() as Array<any>
        } catch (err) {
            console.log(err)
            return []
        }
    }
    async deleteComment(data: { comment_id: string; }): Promise<IStatus> {
        try {
            const newPost: object = {
                status: false
            }

            const commentRef = collection(this.db.dbConnection, "comments", data.comment_id);

            await setDoc(doc(commentRef, data.comment_id), newPost);

            return {status: true, info: `el comentario ha sido borrado`}
        } catch (err) {
            console.log(err)
            return {status: false, info: `el comentario no pudo ser creado ${err}`}
        }
    }
}

export default new CommentModel(db)
