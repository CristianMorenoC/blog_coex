import { IStatus } from '../util/status.interface'
import { addDoc, collection, getDoc, setDoc, doc, query, where, getDocs } from 'firebase/firestore'
import { DBConfig, db } from '../util/firebase'

export interface ICommentModel {
    createComment(data: {
        post_id: string
        user_id: string
        content: string
    }): Promise<IStatus>
    getCommentsFromPost(data: { post_id: string }): Promise<any[]>
    deleteComment(data: { comment_id: string }): Promise<IStatus>
}

class CommentModel implements ICommentModel {
    constructor(private db: DBConfig) {}


    async createComment(data: {
        post_id: string
        user_id: string
        content: string
    }): Promise<IStatus> {
        try {        
            
            const newComment = {
                ...data,
                status: true
            }

            const blockedUserTable = await getDoc(doc(this.db.dbConnection, "blockedUsers", data.user_id))    
            
            if(blockedUserTable.data()?.post_id === data.post_id){
                return {status: false, info: `el usuario con el id ${data.user_id}, no puede comentar en el post ${data.post_id}`}
            }

            const ref = await addDoc(
                collection(this.db.dbConnection, 'comments'),
                newComment
            )

            return {
                status: true,
                info: `comentario creado con el id: ${ref.id}`,
            }
        } catch (err) {
            console.log(err)
            return {
                status: false,
                info: `el comentario no pudo ser creado ${err}`,
            }
        }
    }
    async getCommentsFromPost(data: { post_id: string }): Promise<any[]> {
        const commentsArr: any[] = []
        try {
            const collectionComment = collection(this.db.dbConnection, 'comments');
            const q = query(collectionComment, where("post_id", "==", data.post_id));
            const comments = await getDocs(q);
            comments.forEach(comment => {
                commentsArr.push(comment.data())
            })
        }catch (err) {
            console.log(err)
        }
        return commentsArr
    }
    async deleteComment(data: { comment_id: string }): Promise<IStatus> {
        try {

            let commentData = await getDoc(doc(this.db.dbConnection, "comments", data.comment_id));

            const newPost: object = {
                ...commentData.data(),
                status: false,
            }

            await setDoc(doc(this.db.dbConnection, "comments", data.comment_id), newPost)

            return { status: true, info: `el comentario ha sido borrado` }
        } catch (err) {
            console.log(err)
            return {
                status: false,
                info: `el comentario no pudo ser creado ${err}`,
            }
        }
    }
}

export default new CommentModel(db)
