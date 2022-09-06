import { Request, Response } from 'express'
import { userModel } from '../models/user.model'
import { IStatus } from '../util/status.interface'

export interface IUserController {
    createUser(req: Request, res: Response): Promise<Response>
}

export class UserController implements IUserController {
    constructor() {}
    public async createUser(req: Request, res: Response): Promise<Response> {
        const status: IStatus = { status: false, info: '' }
        try {
            const data = req.body
            const modelResponse = await userModel.createUser(data)
            status.status = modelResponse.status
            status.info = modelResponse.info
        } catch (err) {
            status.info = `${err}`
        }
        return res.send(status)
    }
}

export default new UserController()
