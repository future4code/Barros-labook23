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
exports.PostData = void 0;
const CustomError_1 = require("../error/CustomError");
const BaseDatabase_1 = require("./BaseDatabase");
class PostData extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.create = ({ id, photo, description, type, authorId }) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield PostData.connection.insert({
                    id: id,
                    photo: photo,
                    description: description,
                    type: type,
                    author_id: authorId
                }).into(PostData.TABLE_NAME);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
        this.getAll = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield PostData.connection.raw(`
            SELECT * FROM ${PostData.TABLE_NAME} WHERE ${id}
            `);
                return (result[0]);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
    feed(userId) {
        throw new Error("Method not implemented.");
    }
}
exports.PostData = PostData;
PostData.TABLE_NAME = "labook_posts";
