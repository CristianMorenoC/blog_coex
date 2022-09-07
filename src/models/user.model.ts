import { DBConfig, db } from "../util/firebase";
import { IStatus } from "../util/status.interface";
import { addDoc, collection } from "firebase/firestore";

export interface IUserModel {
    createUser(data:{name: string, username: string}):Promise<IStatus>,
}

class UserModel implements IUserModel {
    constructor(
        private db: DBConfig
    ){}
    async createUser(data: { name: string; username: string; }): Promise<IStatus> {
        try {

            const newUser: object = {
                username: data.username,
                name: data.name
            }

            const ref = await addDoc(collection(this.db.dbConnection, "Users"), newUser)

            return {status: true, info: `usuario creado con el id: ${ref.id}`}
            
        } catch (error) {
            console.log(error)
            return {status: false, info: `el usuario no pudo ser creado ${error}`}
        }

    }
}

export const userModel = new UserModel(db)
