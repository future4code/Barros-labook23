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
exports.PostBusiness = void 0;
const CustomError_1 = require("../error/CustomError");
const IdGenerator_1 = require("../services/IdGenerator");
class PostBusiness {
    getAllPost(id) {
        throw new Error("Method not implemented.");
    }
    constructor(postDatabase) {
        this.postDatabase = postDatabase;
        this.createPost = ({ photo, description, type, authorId }) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!photo || !description || !type || !authorId) {
                    throw new CustomError_1.CustomError(400, "Body invalido, Verifique foto,descrição ou id.");
                }
                const postId = (0, IdGenerator_1.generateId)();
                const insertPost = {
                    id: postId,
                    photo: photo,
                    description: description,
                    type: type,
                    authorId: authorId
                };
                yield this.postDatabase.create(insertPost);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
}
exports.PostBusiness = PostBusiness;
;
