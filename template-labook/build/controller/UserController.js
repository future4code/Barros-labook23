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
exports.UserController = void 0;
const UserBusiness_1 = require("../business/UserBusiness");
class UserController {
    constructor() {
        this.userBusiness = new UserBusiness_1.UserBusiness();
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const input = {
                    name: name,
                    email: email,
                    password: password
                };
                yield this.userBusiness.createUser(input);
                res.status(200).send("User created successfully!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
    }
}
exports.UserController = UserController;
