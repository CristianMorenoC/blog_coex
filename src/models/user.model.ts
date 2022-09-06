import { IStatus } from "../util/status.interface";

export interface IUserModel {
    createUser(data:{name: string, username: string}):Promise<IStatus>,
}

class UserModel implements IUserModel {
    constructor(){

    }
    createUser(data: { name: string; username: string; }): Promise<IStatus> {
        throw new Error("Method not implemented.");
    }
}

