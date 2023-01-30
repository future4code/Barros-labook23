import { UserBusiness } from '../business/UserBusiness';
import { UserRegister } from '../models/UserRegister';
import { Request,Response } from 'express';


export class UserController {
    userBusiness = new UserBusiness()

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password } = req.body;

            const input: UserRegister = {
                name: name,
                email: email,
                password: password
            }
            await this.userBusiness.createUser(input)

            res.status(200).send("User created successfully!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    }