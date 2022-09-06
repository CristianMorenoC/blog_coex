import { Request, Response } from 'express'
import { IStatus } from '../util/status.interface'

export interface ICommentController {
    createComment(req: Request, res: Response): Promise<IStatus>
    createComment(req: Request, res: Response): Promise<IStatus>
}
