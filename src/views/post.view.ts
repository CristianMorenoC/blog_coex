import commentView, { IComment } from './comment.view'

interface IPost {
    postId: number
    username: string
    content: string
    comments: Array<IComment>
}
export interface IBlockedUser {
    username: string
    postId: number
    status: boolean
    info: string
}

interface IPostView {
    createView(data: {
        postId: number
        userId: number
        content: string
        status: boolean
        comments: Array<IComment>
    }): IPost
    blockedUserView(data: {
        postId: number
        userId: number
        username: string
    }): IBlockedUser
}

class PostView implements IPostView {
    constructor() {}

    public createView(data: {
        postId: number
        userId: number
        content: string
        status: boolean
        comments: Array<any>
    }): IPost {
        let commentsArr = []
        data.comments.forEach(comment => {
            commentsArr.push(commentView.createView(comment))
        })
    }
}
