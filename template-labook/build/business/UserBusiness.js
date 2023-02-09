"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const UserDataBase_1 = require("../data/UserDataBase");
const CustomError_1 = require("../error/CustomError");
const IdGenerator_1 = require("../services/IdGenerator");
class UserBusiness {
    constructor() {
        this.userDataBase = new UserDataBase_1.UserDataBase();
        this.createUser = ({ name, email, password }) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name || !email || !password) {
                    throw new CustomError_1.CustomError(400, "Credenciais invalidas! name or email or password.");
                }
                if (password.length <= 7) {
                    throw new CustomError_1.CustomError(400, "Password must be at least 8 characters");
                }
                const id = (0, IdGenerator_1.generateId)();
                const insertNewUser = {
                    id: id,
                    name: name,
                    email: email,
                    password: password,
                };
                yield this.userDataBase.create(insertNewUser);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
