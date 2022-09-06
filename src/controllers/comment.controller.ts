import { Request, Response } from 'express'
import { IStatus } from '../util/status.interface'
import commentModel from '../models/comment.model'
import commentView, { IComment } from '../views/comment.view'

export interface ICommentController {
    createComment(req: Request, res: Response): Promise<Response>
    deleteComment(req: Request, res: Response): Promise<Response>
    getCommentsFromPost(req: Request, res: Response): Promise<Response>
}

export class CommentController implements ICommentController {
    constructor() {}
    public async createComment(req: Request, res: Response): Promise<Response> {
        const status: IStatus = { status: false, info: '' }
        try {
            let data = req.body
            await commentModel.createComment(data)
            status.status = true
            status.info = 'comment succesfully created'
        } catch (err) {
            status.info = `${err}`
        }
        return res.send(status)
    }
    public async deleteComment(req: Request, res: Response): Promise<Response> {
        const status: IStatus = { status: false, info: '' }
        try {
            let data = req.body
            await commentModel.deleteComment(data)
            status.status = true
            status.info = 'comment succesfully deleted'
        } catch (err) {
            status.info = `${err}`
        }
        return res.send(status)
    }
    public async getCommentsFromPost(
        req: Request,
        res: Response
    ): Promise<Response> {
        const comments: IComment[] = []
        try {
            const data = req.body
            const rawComments = await commentModel.getCommentsFromPost(data)
            rawComments.forEach(comment => {
                comments.push(commentView.createView(comment))
            })
        } catch (err) {
            return res.send(err)
        }
        return res.send(comments)
    }
}
