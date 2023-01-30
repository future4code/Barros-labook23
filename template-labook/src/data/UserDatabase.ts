import { BaseDatabase } from './BaseDatabase';
import { UserRegister, UserRegisterCreate } from '../models/UserRegister';
import { CustomError } from '../error/CustomError';


export class UserDataBase extends BaseDatabase {
    private static TABLE_NAME = "labook_users"
    create = async ({ id, name, email, password }: UserRegisterCreate) => {
        try {
            await UserDataBase.connection.insert({
                id: id,
                name: name,
                email: email,
                password: password
            }).into(UserDataBase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}
