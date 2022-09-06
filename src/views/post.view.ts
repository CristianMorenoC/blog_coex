import { IStatus } from '../util/status.interface'
import commentView, { IComment } from './comment.view'

interface IPost {
    postId: string
    username: string
    content: string
    comments: Array<IComment>
}

 interface IBlockedUser {
    username: string
    postId: string
    status: IStatus
}

interface IPostView {
    createView(data: {
        postId: string
        userId: string
        content: string
        status: boolean
        comments: Array<IComment>
    }): IPost

    blockedUserView(data: {
        postId: string
        userId: string
        username: string
    }): IBlockedUser
}

class PostView implements IPostView {
    constructor() {}

    public createView(data: {
        postId: string
        userId: string
        content: string
        status: boolean
        comments: Array<any>
    }): IPost {
        const commentsArr: Array<any> = []
        data.comments.forEach(comment => {
            commentsArr.push(commentView.createView(comment))
        })
        if(!data.status){
            const response: IPost = {
                postId: data.postId,
                username: data.userId,
                content: '',
                comments: commentsArr
            }
            return response
        }
        const response: IPost = {
            postId: data.postId,
            username: data.userId,
            content: data.content,
            comments: commentsArr
        }
        return response
    }

    public blockedUserView(data: { postId: string; userId: string; username: string }): IBlockedUser {
            const response :IBlockedUser = {
                username: data.username,
                postId: data.postId,
                status: {status: false, info: 'a'}
            }
            return response     
    }
}

const newPostView = new PostView()