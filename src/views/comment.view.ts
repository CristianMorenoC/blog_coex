export interface IComment {
    postId: string
    madeBy: string
    content: string
}

export interface ICommentView {
    createView(data: {
        id: string
        postId: string
        madeBy: string
        content: string
        status: boolean
    }): IComment
}

export class CommentView implements ICommentView {
    constructor() { }
    createView(data: {
        id: string
        postId: string
        madeBy: string
        content: string
        status: boolean
    }): IComment {
        if(!data.status){
            const response: IComment = {
                postId: data.postId,
                madeBy: data.madeBy,
                content: '',
            }
            return response
        }
        const response: IComment = {
            postId: data.postId,
            madeBy: data.madeBy,
            content: data.content,
        }
        return response

    }

    }


export default new CommentView()
