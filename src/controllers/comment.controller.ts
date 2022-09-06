import { Request, Response } from 'express'
import { IStatus } from '../util/status.interface'

export interface ICommentController {
    createComment(req: Request, res: Response): Promise<IStatus>
    deleteComment(req: Request, res: Response): Promise<IStatus>
}

export class CommentController implements ICommentController {
    constructor() {}
    public async createComment(req: Request, res: Response): Promise<IStatus> {
        try {
            let data = req.body
        } catch (err) {}
    }
}
