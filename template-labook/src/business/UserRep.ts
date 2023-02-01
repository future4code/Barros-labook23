import { UserRegisterCreate } from "../models/UserRegister"

export interface UserRep{

    create ({ id, name, email, password }: UserRegisterCreate):Promise<void>

}