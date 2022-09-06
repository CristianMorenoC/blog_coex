export interface IComment {
    postId: number
    madeBy: string
    content: string
}

export interface ICommentView {
    createView(data: {
        id: number
        postId: number
        madBy: number
        content: string
        status: boolean
    }): IComment
}

export class CommentView implements ICommentView {
    constructor() {}
    createView(data: {
        id: number
        postId: number
        madBy: number
        content: string
        status: boolean
    }): IComment {
        return
    }
}

export default new CommentView()
