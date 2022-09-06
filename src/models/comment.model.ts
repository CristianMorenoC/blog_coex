import { IStatus } from "../util/status.interface";

export interface ICommentModel {
    createComment(data: {post_id: number, user_id: number, content: string}):Promise<IStatus>,
    getCommentsFromPost(data: {post_id: number}):Promise<any[]>,
    deleteComment(data: {comment_id: number}):Promise<IStatus>
}

class CommentModel implements ICommentModel {
    constructor(){

    }
    createComment(data: { post_id: number; user_id: number; content: string; }): Promise<IStatus> {
        throw new Error("Method not implemented.");
    }
    getCommentsFromPost(data: { post_id: number; }): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    deleteComment(data: { comment_id: number; }): Promise<IStatus> {
        throw new Error("Method not implemented.");
    }
}


