import { UserDataBase } from "../data/UserDataBase";
import { CustomError } from "../error/CustomError";
import { UserRegister, UserRegisterCreate } from "../models/UserRegister";
import { generateId } from "../services/IdGenerator";

export class UserBusiness {
  userDataBase = new UserDataBase();

  createUser = async ({ name, email, password }: UserRegister) => {
    try {
      if (!name || !email || !password) {
        throw new CustomError(
          400,
          "Credenciais invalidas! name or email or password."
        );
      }
      if (password.length <= 7) {
        throw new CustomError(400, "Password must be at least 8 characters");
      }

      const id = generateId();

      const insertNewUser: UserRegisterCreate = {
        id: id,
        name: name,
        email: email,
        password: password,
      };

      await this.userDataBase.create(insertNewUser);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
