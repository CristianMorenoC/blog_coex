import { IStatus } from '../util/status.interface'
import { addDoc, collection, getDoc, setDoc, doc } from 'firebase/firestore'
import { DBConfig, db } from '../util/firebase'

export interface ICommentModel {
    createComment(data: {
        post_id: string
        user_id: string
        content: string
    }): Promise<IStatus>
    getCommentsFromPost(data: { post_id: string }): Promise<IStatus>
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
            const ref = await addDoc(
                collection(this.db.dbConnection, 'comments'),
                data
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
    async getCommentsFromPost(data: { post_id: string }): Promise<IStatus> {
        try {
            const comment = await getDoc(
                doc(this.db.dbConnection, 'comments', data.post_id)
            )
            return { status: true, info: `${comment}` }
        } catch (err) {
            console.log(err)
            return {
                status: false,
                info: `el comentario no pudo ser creado ${err}`,
            }
        }
    }
    deleteComment(data: { comment_id: string }): Promise<IStatus> {
        throw new Error('Method not implemented.')
    }
}

export default new CommentModel(db)
